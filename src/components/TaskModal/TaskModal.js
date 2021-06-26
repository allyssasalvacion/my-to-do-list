import React, { useEffect, useRef } from "react";
import { Modal, Input, Form } from "antd";
import "./index.css";

const { TextArea } = Input;

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

const TaskModal = ({ visible, setVisible, saveTask }) => {
  const [form] = Form.useForm();

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
    setVisible(false);
    saveTask(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Add task"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        name="userForm"
      >
        <p className="text-light_primary dark:text-dark_primary">Title</p>
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Please input a title",
            },
          ]}
        >
          <Input size="large" maxLength={30} />
        </Form.Item>
        <p className="mt-8 text-light_primary dark:text-dark_primary">Note</p>
        <Form.Item name="note">
          <TextArea showCount maxLength={1000} size="large" className="mb-5" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskModal;
