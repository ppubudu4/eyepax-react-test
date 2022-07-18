import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Typography, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
const SharedLayout = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <Layout.Header>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography.Title level={3} style={{ color: '#FFF' }}>
                My Todos
              </Typography.Title>
            </div>
            <div>
              {authState?.authenticated ? (
                <div>
                  <Button onClick={() => dispatch(logout(navigate))}>
                    Logout
                  </Button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Layout.Header>
        <Layout.Content className='site-layout'>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: '93vh' }}>
            <Outlet />
          </div>
        </Layout.Content>
      </Layout>
    </>
  );
};

export default SharedLayout;
