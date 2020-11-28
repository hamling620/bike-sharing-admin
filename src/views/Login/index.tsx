import React, { FC } from 'react'
import { Card, Form, Input, Checkbox, Button } from 'antd'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 8 }
}
const Login: FC = () => {
  return (
    <div>
      <Card title="行内表单" style={{ marginBottom: '20px' }}>
        <Form layout="inline">
          <Form.Item label="用户名：">
            <Input type="text" placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="密码">
            <Input.Password placeholder="请输入用户密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">登录</Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title="水平表单" style={{ marginBottom: '20px' }}>
        <Form {...layout}>
          <Form.Item
            label="用户名："
            name="username"
            rules={[{ required: true, message: '用户名不能为空' }]}
          >
            <Input type="text" placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="用户密码："
            name="password"
            rules={[{ required: true, message: '用户密码不能为空' }]}
          >
            <Input.Password placeholder="请输入用户密码" />
          </Form.Item>
          <Form.Item {...tailLayout} valuePropName="checked">
            <Checkbox>Remeber me</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary">登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
