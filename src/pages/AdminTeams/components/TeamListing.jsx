import React, { useState } from 'react';
import { Table, Button, Space, Modal, Form, Input, message } from 'antd';
import { addTeamMember, deleteTeamMember, updateTeamMember } from '../../../repository/TeamRepo';

const TeamListing = ({ data }) => {
  const [team, setTeam] = useState(data || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);
  const [form] = Form.useForm();

  const handleAdd = () => {
    setIsEditMode(false);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setIsEditMode(true);
    setCurrentMember(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTeamMember(id);
      setTeam((prev) => prev.filter((member) => member.id !== id));
      message.success('Team member deleted successfully');
    } catch (error) {
      message.error('Error deleting team member');
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (isEditMode && currentMember) {
        await updateTeamMember(currentMember.id, values);
        setTeam((prev) =>
          prev.map((member) => (member.id === currentMember.id ? { ...member, ...values } : member))
        );
        message.success('Team member updated successfully');
      } else {
        const docRef = await addTeamMember(values);
        const newMember = { ...values, id: docRef };
        setTeam((prev) => [...prev, newMember]);
        message.success('Team member added successfully');
      }

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      message.error('Error submitting team member');
      console.error(error);
    }
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render: (img) => <img src={img} alt="team member" style={{ width: 50, height: 50, objectFit: 'cover' }} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
        Add Team Member
      </Button>

      <Table columns={columns} dataSource={team} rowKey="id" />

      {/* Modal for Add/Edit */}
      <Modal
        title={isEditMode ? 'Edit Team Member' : 'Add Team Member'}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="img"
            label="Image URL"
            rules={[{ required: true, message: 'Please enter the image URL' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name' }]}
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

export default TeamListing;
