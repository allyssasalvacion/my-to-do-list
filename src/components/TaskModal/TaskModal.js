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
      <div className="grid gap-2 grid-cols-12">
        <div className="col-span-4">
          <p>Date</p>
          <DatePicker onChange={onChange} size="large" placeholder="" />
        </div>
        <div className="col-span-8">
          <p>Title</p>
          <Input size="large" maxLength={30} />
        </div>
      </div>
      <p className="mt-8">Note</p>
      <TextArea showCount maxLength={1000} size="large" className="mb-5" />
    </Modal>
  );
};

export default TaskModal;
