import { Button, Input, Form, message } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminLogin = ({ setIsOpen }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCred) => {
        setIsOpen(false);
        navigate("/admin");
        message.success("Successfully Logged In!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        message.error(errorMessage || "Failed to Login");
      });
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="flex flex-col w-full"
    >
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
      <Form.Item
        label="Admin Email"
        name="email"
        rules={[{ required: true, message: "Please input your email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your email" }]}
      >
        <Input.Password />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Login
      </Button>
    </Form>
  );
};

export default AdminLogin;
