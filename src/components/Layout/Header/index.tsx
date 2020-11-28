import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import { parseTime } from '../../../utils/date'
import { getWeatherInfo } from '../../../api/weather'
import logo from '../../../assets/images/logo.svg'

interface IProps {
  type?: string;
}

interface IState {
  username: string;
  dateStr: string;
  weatherStr: string;
  weatherImg: string;
}

class Header extends Component<IProps, IState> {
  state = {
    username: 'hamling',
    dateStr: '',
    weatherStr: '',
    weatherImg: ''
  }

  timer: any

  componentDidMount () {
    this.timer = setInterval(() => {
      const dateStr = parseTime(new Date())
      this.setState({
        dateStr
      })
    }, 1000)
    this.getWeatherInfo()
  }

  componentWillUnmount () {
    this.timer && clearInterval(this.timer)
    this.timer = null
  }

  getWeatherInfo = async () => {
    const { weather, dayPictureUrl } = await getWeatherInfo()
    this.setState({
      weatherStr: weather,
      weatherImg: dayPictureUrl
    })
  }

  render () {
    const { username, dateStr, weatherStr, weatherImg } = this.state
    const isCommon = this.props.type === 'COMMON'
    return (
      <div className="header">
        <Row className="user-info">
          {
            isCommon &&
            <Col span="6">
              <img src={ logo } alt="logo" className="logo" />
              <span>BikeAdmin通用管理系统</span>
            </Col>
          }
          <Col span={ isCommon ? '17' : '23'} className="user-info-username">欢迎回来! <span>{ username }</span></Col>
          <Col span="1"><a href="/login">退出</a></Col>
        </Row>
        {
          isCommon
            ? null
            : <Row className="weather-info">
                <Col span="12" className="breadcrumbs">
                  <span className="breadcrumb-item">首页</span>
                </Col>
                <Col span="12">
                  <Row>
                    <Col span="16" className="date">{ dateStr }</Col>
                    <Col span="4">
                      <img src={ weatherImg } alt="weatherImg" />
                    </Col>
                    <Col span="4">{ weatherStr }</Col>
                  </Row>
                </Col>
              </Row>
        }
      </div>
    )
  }
}

export default Header
