import { Button, Divider, Form, Input } from "antd";

const DestinationContact = () => {
  const [form] = Form.useForm();
  return (
    <div className="container w-full flex justify-between items-center">
      <div className="flex flex-col gap-6 w-[45%]">
        <h1 className="text-5xl font-playfair text-foreground">
          Have a destination in mind?
        </h1>
        <p className="text-4xl font-light font-playfair text-foreground">
          We got the skills to plan. Let's Team Up in just 3 simple steps
        </p>
      </div>
      <Divider type="vertical" className="border-primary h-64 w-[10%]" />
      <div className="space-y-2 w-[45%]">
        <h1 className="text-2xl text-foreground">CONTACT US</h1>
        <Form form={form} layout="vertical">
          <Form.Item name="name">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="destination">
            <Input placeholder="Destination" />
          </Form.Item>
          <Form.Item name="phoneNumber">
            <Input placeholder="Phone Number" />
          </Form.Item>
          <div className="w-fit mx-auto">
            <Button type="primary" size="large" shape="round">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default DestinationContact;
