import React from 'react'
import { Card, Table, Tag, Space } from 'antd'

const { Column, ColumnGroup } = Table

interface UserInfo {
  key: string;
  age: number;
  address: string;
  tags: string[];
  name?: string;
  firstName?: string;
  lastName?: string;
}

const columns1 = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  }
]

const dataSource1 = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
]

const columns2 = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{ text }</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: string[]) => (
      <>
        {
          tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={ color } key={ tag }>
                { tag.toUpperCase() }
              </Tag>
            )
          })
        }
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: UserInfo) => (
      <Space size="middle">
        <a>Invite { record.name }</a>
        <a>Delete</a>
      </Space>
    )
  }
]

const dataSource2 = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const dataSource3 = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const BasicTable = () => {
  return (
    <div>
      <Card title="基础表格" style={{ marginBottom: '20px' }}>
        <Table columns={ columns1 } dataSource={ dataSource1 } pagination={ false } />
      </Card>
      <Card title="自定义表格" style={{ marginBottom: '20px' }}>
        <Table columns={ columns2 } dataSource={ dataSource2 } pagination={ false } />
      </Card>
      <Card title="JSX自定义表格">
        <Table dataSource={ dataSource3 } pagination={ false }>
          <ColumnGroup title="name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={ (tags: string[]) => (
              <>
                {
                  tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
                      color = 'volcano'
                    }
                    return (
                      <Tag color={ color } key={ tag }>
                        { tag.toUpperCase() }
                      </Tag>
                    )
                  })
                }
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={ (text: string, record: UserInfo) => (
              <Space size="middle">
                <a>Invite { record.lastName }</a>
                <a>Delete</a>
              </Space>
            )}
          />
        </Table>
      </Card>
    </div>
  )
}

export default BasicTable
