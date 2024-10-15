import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, Space, Modal, Form, Input, message } from "antd";
import {
  addDomesticRegion,
  deleteDomesticRegion,
} from "../../../repository/DestinationRepo";
import slugify from "react-slugify";

const RegionTable = ({ data }) => {
  const [regions, setRegions] = useState(data || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleAdd = () => {
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDomesticRegion(id);
      setRegions((prev) => prev.filter((region) => region.id !== id));
      message.success("Region deleted successfully");
    } catch (error) {
      message.error("Error deleting region");
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const docRef = await addDomesticRegion(
        { title: values.title, places: [] },
        slugify(values.title)
      );
      const newRegion = { title: values.title, places: [], id: docRef };
      setRegions((prev) => [...prev, newRegion]);
      message.success("Region added successfully");

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      message.error("Error adding region");
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
      title: "Places",
      dataIndex: "places",
      key: "places",
      render: (places) => places.join(", "),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button type="default" className="bg-red-500 text-white" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
          <Button onClick={() => navigate(`/admin/domestic/region/${record.id}`)} type="dashed">
            Edit Destinations
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add Region
      </Button>

      <Table columns={columns} dataSource={regions} rowKey="id" />

      {/* Modal for Add */}
      <Modal
        title="Add Region"
        visible={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[
              { required: true, message: "Please enter the region title" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RegionTable;
