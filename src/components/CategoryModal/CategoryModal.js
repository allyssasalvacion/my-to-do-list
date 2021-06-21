import React, { useEffect, useRef } from "react";
import { Modal, Input, Form } from "antd";
import "./index.css";

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible, form, prevVisible]);
};

const CategoryModal = ({ visible, setVisible }) => {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  useResetFormOnCloseModal({
    form,
    visible,
  });

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Add category"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        name="userForm"
      >
        <div className="grid gap-2 grid-cols-12">
          <div className="col-span-4">
            <p className="text-light_primary dark:text-dark_primary">Icon</p>
            <Form.Item
              name="icon"
              rules={[
                {
                  required: true,
                  message: "Please input your icon",
                },
              ]}
            >
              <Input size="large" maxLength={2} />
            </Form.Item>
          </div>
          <div className="col-span-8">
            <p className="text-light_primary dark:text-dark_primary">Title</p>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your title",
                },
              ]}
            >
              <Input size="large" maxLength={15} />
            </Form.Item>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default CategoryModal;
