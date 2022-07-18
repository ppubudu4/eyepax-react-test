import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Card, Table, Tag } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import {
  getTodoListAction,
  todoListClear,
  getTodoDetailAction,
  todoDetailClear,
} from '../redux/actions/todoActions';
import DetailModal from '../components/DetailModal';
const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const todoState = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoListAction());
    return () => {
      dispatch(todoListClear());
    };
  }, []);

  //model show and dispach to get detail from id
  const onHandleShowModal = (rowData) => {
    dispatch(getTodoDetailAction(rowData.id));
    setShowModal(true);
  };
  //model hide and dispach to clear detail from store
  const onHandelCloseModal = () => {
    dispatch(todoDetailClear());
    setShowModal(false);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (_, record) => <Typography.Text>{record?.id}</Typography.Text>,
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      render: (_, record) => (
        <Typography.Text>{record?.userId}</Typography.Text>
      ),
    },

    {
      title: 'Task',
      dataIndex: 'title',
      render: (_, record) => <Typography.Text>{record?.title}</Typography.Text>,
    },
    {
      title: 'Status',
      dataIndex: 'completed',
      render: (_, record) =>
        record?.completed ? (
          <Tag color='green'>Completed</Tag>
        ) : (
          <Tag color='red'>Not Completed</Tag>
        ),
    },
    {
      title: '',
      dataIndex: 'action',
      render: (_, record) => (
        <EyeOutlined
          onClick={() => onHandleShowModal(record)}
          style={{ fontSize: '24px' }}
        />
      ),
    },
  ];

  return (
    <div style={{ marginTop: '1rem' }}>
      <Card>
        <Table
          loading={todoState?.loading}
          columns={columns}
          dataSource={todoState?.todoList}
          rowKey={'id'}
          pagination={{ pageSize: 20 }}
        />
      </Card>
      <DetailModal
        onHandelCloseModal={onHandelCloseModal}
        showModal={showModal}
      />
    </div>
  );
};

export default Home;
