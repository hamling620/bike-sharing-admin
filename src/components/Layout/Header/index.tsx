import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import { parseTime } from '../../../utils/date'
import { getWeatherInfo } from '../../../api/weather'

interface IProps {}

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
    return (
      <div className="header">
        <Row className="user-info">
          <Col span="23" className="user-info-username">欢迎回来! <span>{ username }</span></Col>
          <Col span="1"><a href="#">退出</a></Col>
        </Row>
        <Row className="weather-info">
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
      </div>
    )
  }
}

export default Header
