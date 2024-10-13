import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import slugify from 'react-slugify';
import { addTheme, deleteTheme, updateTheme } from '../../../repository/ThemeRepo';
import { useNavigate } from 'react-router-dom';

const ThemeListing = ({ data }) => {
  const [themes, setThemes] = useState(data || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(null);
  const [form] = Form.useForm();
  const [imgArr, setImgArr] = useState([]);

  const navigate = useNavigate();

  const handleAdd = () => {
    setIsEditMode(false);
    form.resetFields();
    setImgArr([]);
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setIsEditMode(true);
    setCurrentTheme(record);
    setImgArr(record.imgArr || []); 
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTheme(id);
      setThemes((prev) => prev.filter((theme) => theme.id !== id)); 
      message.success('Theme deleted successfully');
    } catch (error) {
      message.error('Error deleting theme');
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      values.imgArr = imgArr;

      if (isEditMode && currentTheme) {
        await updateTheme(currentTheme.id, values);
        setThemes((prev) =>
          prev.map((theme) => (theme.id === currentTheme.id ? { ...theme, ...values } : theme))
        );
        message.success('Theme updated successfully');
      } else {
        const themeSlug = slugify(values.title);
        values.slug = themeSlug;
        await addTheme(values, themeSlug);
        setThemes((prev) => [...prev, { ...values, id: themeSlug }]);
        message.success('Theme added successfully');
      }

      setIsModalOpen(false); 
      form.resetFields();
    } catch (error) {
      message.error('Please fill in all fields');
    }
  };

  const handleAddImage = () => {
    setImgArr([...imgArr, '']);
  };

  const handleImageChange = (index, value) => {
    const updatedImgArr = [...imgArr];
    updatedImgArr[index] = value;
    setImgArr(updatedImgArr);
  };

  const handleRemoveImage = (index) => {
    const updatedImgArr = imgArr.filter((_, i) => i !== index);
    setImgArr(updatedImgArr);
  };

  const columns = [
    {
      title: 'Cover',
      dataIndex: 'img',
      key: 'img',
      render: (img) => <img src={img} alt="theme" style={{ width: 50, height: 50, objectFit: 'cover' }} />,
    },
    {
      title: 'Image Array',
      dataIndex: 'imgArr',
      key: 'imgArr',
      render: (imgArr) => imgArr.join(', '),
    },
    {
      title: 'Video URL',
      dataIndex: 'vid',
      key: 'vid',
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
        <div className='flex flex-col gap-2'>
          <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
          <Button type="default" className='bg-red-500 text-white' onClick={() => handleDelete(record.id)}>Delete</Button>
          <Button type='dashed' onClick={() => navigate(`/admin/themes/${record.id}`)}>Edit Packages</Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add Theme
      </Button>

      <Table columns={columns} dataSource={themes} rowKey="id" />

      {/* Modal for Add/Edit */}
      <Modal
        title={isEditMode ? 'Edit Theme' : 'Add Theme'}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="img"
            label="Cover Image"
            rules={[{ required: true, message: 'Please enter the image URL' }]}
          >
            <Input />
          </Form.Item>

          {/* Dynamic Image Array Input */}
          <Form.Item label="Image Array">
            {imgArr.map((imgLink, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <Input
                  value={imgLink}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  placeholder="Enter image URL"
                  style={{ marginRight: 8 }}
                />
                <Button type="danger" onClick={() => handleRemoveImage(index)}>Remove</Button>
              </div>
            ))}
            <Button type="dashed" onClick={handleAddImage} style={{ marginTop: 8 }}>
              Add Image
            </Button>
          </Form.Item>

          <Form.Item
            name="vid"
            label="Video URL"
            rules={[{ required: true, message: 'Please enter the video URL' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter the title' }]}
          >
            <Input disabled={isEditMode} readOnly={isEditMode} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ThemeListing;

