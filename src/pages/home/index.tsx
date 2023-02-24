import React, { useState } from 'react';
import { Button, Modal, theme } from 'antd';

const { useToken } = theme;

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token } = useToken();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal{token.colorPrimaryBg}
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default App;
