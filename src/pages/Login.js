import React from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';
const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values);
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
              <Form.Item>
                <Button block type='primary' onClick={onSubmit}>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
