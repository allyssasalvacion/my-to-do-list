import { Modal, Input, DatePicker } from "antd";
import "./index.css";

const { TextArea } = Input;

const TaskModal = ({ visible, handleOk, handleCancel, confirmLoading }) => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <Modal
      title="Add task"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <p>Title</p>
      <Input size="large" maxLength={30} />
      <p className="mt-8">Note</p>
      <TextArea showCount maxLength={1000} size="large" className="mb-5" />
    </Modal>
  );
};

export default TaskModal;
