import React from "react";
import { Modal, Input, Form, message } from "antd";

import { db } from "../../firebase-config";
import firebase from "firebase/app";
import "firebase/firestore";

import "./index.css";

const { TextArea } = Input;

const TaskModal = ({ visible, setVisible, editMode, task }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onUpdate = (values) => {
    setVisible(false);
    message.success("Task updated");
    db.collection("tasks").doc(task.id).update({
      task: values.title,
      note: values.note,
    });
  };

  const onSubmit = (values) => {
    setVisible(false);
    message.success("Task created");
    db.collection("tasks").add({
      isFinished: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      task: values.title,
      note: values.note === undefined ? "No note available" : values.note,
    });
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
        onFinish={editMode ? onUpdate : onSubmit}
        onFinishFailed={onFinishFailed}
        initialValues={editMode ? { title: task.task, note: task.note } : ""}
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
          <Input size="large" maxLength={30} autoComplete="off" />
        </Form.Item>
        <p className="mt-8 text-light_primary dark:text-dark_primary">Note</p>
        <Form.Item name="note">
          <TextArea
            showCount
            maxLength={1000}
            size="large"
            className="mb-5"
            autoComplete="off"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskModal;
