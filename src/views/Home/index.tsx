import React, { FC, ReactNode } from 'react'
import { Header, Sider, Footer } from '../../components/Layout/index'
import { Row, Col } from 'antd'
import './index.less'
import menuList from '../../config/menuList'

interface IProps {
  children: ReactNode;
}

const Home: FC<IProps> = ({ children }: IProps) => {
  return (
    <>
      <Row className="main">
        <Col span="20" order={ 1 }>
          <div className="container">
            <Header />
            <div className="content-wrapper">
              <div className="content">{ children }</div>
            </div>
            <Footer />
          </div>
        </Col>
        <Col span="4">
          <Sider list={ menuList } />
        </Col>
      </Row>
    </>
  )
}

export default Home
