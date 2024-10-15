import React, { useEffect, useState } from "react";
import { Table, Button, Space, Modal, Form, Input, message } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import {
  addInternationalPlace,
  deleteInternationalPlace,
  updateInternationalPlace,
} from "../../../repository/DestinationRepo";
import slugify from "react-slugify";
import { useNavigate } from "react-router-dom";

const PlacesTable = ({ data, regionId }) => {
  const [places, setPlaces] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(null);
  const [form] = Form.useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setPlaces(data);
    }
  }, [data]);

  const handleAdd = () => {
    setIsEditMode(false);
    setCurrentPlace(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setIsEditMode(true);
    setCurrentPlace(record);
    form.setFieldsValue({
      title: record.title,
      img: record.img,
      vid: record.vid,
      imgArr: record.imgArr,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id, colRef) => {
    try {
      await deleteInternationalPlace(id, regionId, colRef);
      setPlaces((prev) => prev.filter((place) => place.id !== id));
      message.success("Place deleted successfully");
    } catch (error) {
      message.error("Error deleting place");
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const newPlace = {
        title: values.title,
        img: values.img,
        imgArr: values.imgArr || [],
        vid: values.vid,
      };

      if (isEditMode && currentPlace) {
        const updatedPlace = { ...currentPlace, ...newPlace };
        await updateInternationalPlace(
          currentPlace.id,
          regionId,
          currentPlace.colRef,
          updatedPlace
        );
        setPlaces((prev) =>
          prev.map((place) =>
            place.id === currentPlace.id ? updatedPlace : place
          )
        );
        message.success("Place updated successfully");
      } else {
        const addedPlace = await addInternationalPlace(
          regionId,
          slugify(values.title),
          newPlace
        );
        setPlaces((prev) => [
          ...prev,
          { id: addedPlace, colRef: slugify(values.title), ...newPlace },
        ]);
        message.success("Place added successfully");
      }

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      message.error("Error adding or updating place");
      console.error(error);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (img) => (
        <img src={img} alt="place" style={{ width: 100, height: 100 }} />
      ),
    },
    {
      title: "Image Array",
      dataIndex: "imgArr",
      key: "imgArr",
      render: (imgArr) => (
        <div>
          {imgArr.slice(0, 3).map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt="place"
              style={{ width: 50, height: 50, marginRight: 5 }}
            />
          ))}
          {imgArr.length > 3 ? ` +${imgArr.length - 3} more` : null}
        </div>
      ),
    },
    {
      title: "Video",
      dataIndex: "vid",
      key: "vid",
      render: (vid) => (
        <video width="100" height="100" controls>
          <source src={vid} type="video/mp4" />
        </video>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div className="flex flex-col gap-2">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button
            type="default"
            className="bg-red-500 text-white"
            onClick={() => handleDelete(record.id, record.colRef)}
          >
            Delete
          </Button>
          <Button
            type="dashed"
            onClick={() =>
              navigate(
                `/admin/international/package/${regionId}/${record.colRef}/${record.id}`
              )
            }
          >
            Edit Packages
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add New Place
      </Button>

      <Table columns={columns} dataSource={places} rowKey="id" />

      <Modal
        title={isEditMode ? "Edit Place" : "Add New Place"}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter the title" }]}
          >
            <Input disabled={isEditMode} />
          </Form.Item>
          <Form.Item
            name="img"
            label="Image URL"
            rules={[{ required: true, message: "Please enter the image URL" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Image Array">
            <Form.List name="imgArr">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name]}
                        fieldKey={[fieldKey]}
                        rules={[
                          {
                            required: true,
                            message: "Please enter the image URL",
                          },
                        ]}
                      >
                        <Input placeholder="Image URL" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Image URL
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>

          <Form.Item
            name="vid"
            label="Video URL"
            rules={[{ required: true, message: "Please enter the video URL" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PlacesTable;
