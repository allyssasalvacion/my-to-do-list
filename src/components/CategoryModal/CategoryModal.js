import { Modal, Input } from "antd";
import "./index.css";

const CategoryModal = ({ visible, handleOk, handleCancel, confirmLoading }) => {
  return (
    <Modal
      title="Add category"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <div className="grid gap-2 grid-cols-12">
        <div className="col-span-2">
          <p>Icon</p>
          <Input size="large" maxLength={1} />
        </div>
        <div className="col-span-10">
          <p>Title</p>
          <Input size="large" maxLength={15} />
        </div>
      </div>
    </Modal>
  );
};

export default CategoryModal;
