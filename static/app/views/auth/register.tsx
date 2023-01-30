import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons';
import {AuthPageWrapper, Logo, Left, Right} from './common';
import axios from 'axios';
const quantiveLogin: string =
  require('../../../../assests/svg/quantive-login.svg').default;
const companyLogo: string =
  require('../../../../assests/svg/company_logo_name.svg').default;
export default function Register() {
  const onFinish = async values => {
    const res = await axios.post(
      'https://https://quantive-backend-hny6.vercel.app/auth/register',
      values
    );
    if (res.status === 200) {
      window.location.href = '/auth/login';
    }
  };
  return (
    <AuthPageWrapper>
      <Logo>
        <img src={companyLogo} style={{width: '100px'}} />
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
          onFinish={onFinish}
        >
          <h1 style={{paddingBottom: '10px', fontFamily: 'sans-serif', color: '#ODF123'}}>
            <span style={{textDecoration: 'underline'}}>Register</span> your account
          </h1>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{width: '100%'}}
              className="login-form-button"
            >
              Register
            </Button>
            <p>
              Already a user <a href="login">Login now!</a>
            </p>
          </Form.Item>
        </Form>
      </Right>
    </AuthPageWrapper>
  );
}
