import React, { useEffect } from 'react';
import { Row, Col, Card, Form, Input, Button, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, clearLoginError } from '../redux/actions/authActions';
const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  //error time out
  useEffect(() => {
    let timeOut;
    if (authState.error !== null) {
      timeOut = setTimeout(() => {
        dispatch(clearLoginError());
      }, 3500);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [authState.error]);

  //login submit
  const onSubmit = () => {
    form.validateFields().then((values) => {
      const data = {
        username: values.username,
        password: values.password,
      };

      dispatch(login(data, navigate));
    });
  };
  return (
    <div>
      <Row justify='center'>
        <Col xs={12}>
          <Card title='Login'>
            <Form layout='vertical' form={form}>
              <Form.Item
                label='Username'
                name='username'
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                label='Password'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}>
                <Input type='password' />
              </Form.Item>
              {authState.error !== null && (
                <Alert
                  style={{ marginBottom: '10px' }}
                  message={authState.error}
                  type='error'
                />
              )}
              <Form.Item>
                <Button block type='primary' onClick={onSubmit}>
                  Login
                </Button>
              </Form.Item>
            </Form>
            <blockquote className='mt-3'>
              Username: admin {' | '} Password: admin
            </blockquote>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
