import React, {useState} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {MailOutlined, LockOutlined} from '@ant-design/icons';
import {AuthPageWrapper, Logo, Left, Right} from './common';
import axios from 'axios';

const quantiveLogin: string =
  require('../../../../assests/svg/quantive-login.svg').default;
const logo: string = require('../../../../assests/svg/company_logo_name.svg').default;
export default function Login() {
  const [errorMsg, setErrorMsg] = useState<string>('');
  console.log('error', errorMsg);
  const onFinish = values => {
    var config = {
      method: 'post',
      url: 'https://quantive-backend-hny6.vercel.app/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === 200) {
          localStorage.setItem('token', response.data.token);
          window.location.href = '/organizations/quantive';
        }
      })
      .catch(function (error) {
        setErrorMsg(error.response.data.message);
      });
  };
  return (
    <AuthPageWrapper>
      <Logo>
        <img src={logo} style={{width: '100px'}} />
      </Logo>
      <Left>
        <img src={quantiveLogin} style={{width: '300px'}} />
      </Left>
      <Right>
        <Form
          name="normal_login"
          className="login-form"
          style={{width: '300px'}}
          initialValues={{
            remember: true,
          }}
          onFinish={values => onFinish(values)}
        >
          <h1 style={{paddingBottom: '10px', fontFamily: 'sans-serif', color: '#ODF123'}}>
            <span style={{textDecoration: 'underline'}}>Login</span> to your account
          </h1>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              type="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {errorMsg && <p style={{color: 'red'}}>{errorMsg}</p>}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" style={{float: 'right'}} href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{width: '100%'}}
              className="login-form-button"
            >
              Log in
            </Button>
            <p>
              Or need an account <a href="register">register now!</a>
            </p>
          </Form.Item>
        </Form>
      </Right>
    </AuthPageWrapper>
  );
}
