import React, { useState } from 'react';
import { Table, Button, Space, Modal, Form, Input, message } from 'antd';
import { deleteReview, updateReview, addReview } from '../../../repository/ReviewRepo';

const ReviewListing = ({ data }) => {
  const [reviews, setReviews] = useState(data || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentReview, setCurrentReview] = useState(null);
  const [form] = Form.useForm();

  const handleAdd = () => {
    setIsEditMode(false);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setIsEditMode(true);
    setCurrentReview(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    await deleteReview(id);
    message.success('Review deleted successfully');
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (isEditMode && currentReview) {
        await updateReview(currentReview.id, values); 
        message.success('Review updated successfully');
        setReviews(reviews.map((review) => (review.id === currentReview.id ? { ...review, ...values } : review)));
      } else {
        const newReview = await addReview(values); 
        message.success('Review added successfully');
        setReviews([...reviews, newReview]);
      }

      setIsModalOpen(false); 
      form.resetFields();
    } catch (error) {
      message.error('Please fill in all fields');
    }
  };

  const columns = [
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Description',
      dataIndex: 'desc',
      key: 'desc',
      render: (text) => <span>{text.length > 100 ? `${text.slice(0, 100)}...` : text}</span>, 
    },
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render: (img) => <img src={img} alt="review" style={{ width: 50, height: 50, objectFit: 'cover' }} />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
          <Button type="danger" onClick={() => handleDelete(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add Review
      </Button>

      <Table columns={columns} dataSource={reviews} rowKey="id" />

      <Modal
        title={isEditMode ? 'Edit Review' : 'Add Review'}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="author"
            label="Author"
            rules={[{ required: true, message: 'Please enter the author' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="desc"
            label="Description"
            rules={[{ required: true, message: 'Please enter the description' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="img"
            label="Image URL"
            rules={[{ required: true, message: 'Please enter the image URL' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter the title' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ReviewListing;
