import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Row, Col, Typography, Button } from 'antd';
const SharedLayout = () => {
  return (
    <>
      <Layout>
        <Layout.Header>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography.Title level={3} style={{ color: '#FFF' }}>
                My Todos
              </Typography.Title>
            </div>
            <div>
              <div style={{}}>
                <Button>Logout</Button>
              </div>
            </div>
          </div>
        </Layout.Header>
        <Layout.Content className='site-layout'>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: '100vh' }}>
            <Outlet />
          </div>
        </Layout.Content>
      </Layout>
    </>
  );
};

export default SharedLayout;
