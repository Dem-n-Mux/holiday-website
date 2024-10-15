import React, { useState } from "react";
import { Table, Button, Space, Modal, Form, Input, message } from "antd";
import {
  addInternationalPlacePackage,
  deleteInternationalPlacePackage,
  updateInternationalPlacePackage,
} from "../../../repository/DestinationRepo";

const PackageTable = ({ data, regionId, placeId, docId }) => {
  const [packages, setPackages] = useState(data || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(null);
  const [form] = Form.useForm();

  const handleAdd = () => {
    setIsEditMode(false);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setIsEditMode(true);
    setCurrentPackage(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteInternationalPlacePackage(id, regionId, placeId, docId);
      setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
      message.success("Package deleted successfully");
    } catch (error) {
      message.error("Error deleting package");
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      const formattedValues = {
        ...values,
        days: Number(values.days),
        flights: Number(values.flights),
        hotels: Number(values.hotels),
        transfers: Number(values.transfers),
        activities: Number(values.activities),
      };

      if (isEditMode && currentPackage) {
        await updateInternationalPlacePackage(
          currentPackage.id,
          regionId,
          placeId,
          docId,
          formattedValues
        );
        setPackages((prev) =>
          prev.map((pkg) =>
            pkg.id === currentPackage.id ? { ...pkg, ...formattedValues } : pkg
          )
        );
        message.success("Package updated successfully");
      } else {
        const docRef = await addInternationalPlacePackage(
          regionId,
          placeId,
          docId,
          formattedValues
        );
        const newPackage = { ...formattedValues, id: docRef.id };
        setPackages((prev) => [...prev, newPackage]);
        message.success("Package added successfully");
      }

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      message.error("Error submitting package");
      console.error(error);
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (img) => (
        <img
          src={img}
          alt="package"
          style={{ width: 50, height: 50, objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Place",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Days",
      dataIndex: "days",
      key: "days",
    },
    {
      title: "Flights",
      dataIndex: "flights",
      key: "flights",
    },
    {
      title: "Hotels",
      dataIndex: "hotels",
      key: "hotels",
    },
    {
      title: "Transfers",
      dataIndex: "transfers",
      key: "transfers",
    },
    {
      title: "Activities",
      dataIndex: "activities",
      key: "activities",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add Package
      </Button>

      <Table columns={columns} dataSource={packages} rowKey="id" />

      {/* Modal for Add/Edit */}
      <Modal
        title={isEditMode ? "Edit Package" : "Add Package"}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="img"
            label="Image URL"
            rules={[{ required: true, message: "Please enter the image URL" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter the title" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="place"
            label="Place"
            rules={[{ required: true, message: "Please enter the place" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please enter the price" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="days"
            label="Days"
            rules={[
              { required: true, message: "Please enter the number of days" },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="flights"
            label="Flights"
            rules={[
              { required: true, message: "Please enter the number of flights" },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="hotels"
            label="Hotels"
            rules={[
              { required: true, message: "Please enter the number of hotels" },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="transfers"
            label="Transfers"
            rules={[
              {
                required: true,
                message: "Please enter the number of transfers",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="activities"
            label="Activities"
            rules={[
              {
                required: true,
                message: "Please enter the number of activities",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PackageTable;
