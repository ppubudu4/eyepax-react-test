import React from 'react';
import { Modal, Descriptions, Tag, Spin } from 'antd';
import { useSelector } from 'react-redux';
const DetailModal = ({ onHandelCloseModal, showModal }) => {
  const todoDetailState = useSelector((state) => state?.todo);
  return (
    <Modal
      title={`Task ${todoDetailState?.todoDetail?.id}`}
      centered
      visible={showModal}
      onCancel={onHandelCloseModal}
      okButtonProps={{ style: { display: 'none' } }}>
      {todoDetailState?.detailLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Spin />
        </div>
      ) : (
        <Descriptions bordered>
          <Descriptions.Item label='User ID' span={3}>
            {todoDetailState?.todoDetail?.userId}
          </Descriptions.Item>
          <Descriptions.Item label='ID' span={3}>
            {todoDetailState?.todoDetail?.id}
          </Descriptions.Item>
          <Descriptions.Item label='Task Name' span={3}>
            {todoDetailState?.todoDetail?.title}
          </Descriptions.Item>
          <Descriptions.Item label='Status' span={3}>
            {todoDetailState?.todoDetail?.completed ? (
              <Tag color='green'>Completed</Tag>
            ) : (
              <Tag color='red'>Not Completed</Tag>
            )}
          </Descriptions.Item>
        </Descriptions>
      )}
    </Modal>
  );
};

export default DetailModal;
