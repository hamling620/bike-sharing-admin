import React, { Component } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'
import './index.less'

const { SubMenu } = Menu

interface MenuType {
  title: string;
  key: string;
  children?: MenuType[];
}

interface Iprops {
  list: MenuType[];
}

interface IState {
  menuTreeNode: any;
}

class Sider extends Component<Iprops, IState> {
  constructor (props: Iprops) {
    super(props)
    this.state = {
      menuTreeNode: []
    }
  }

  componentDidMount () {
    const menuTreeNode: any = this.renderMenu(this.props.list)
    this.setState({
      menuTreeNode
    })
  }

  renderMenu = (data: MenuType[]) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={ item.title } key={ item.key }>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={ item.key }>
          <NavLink to={ `/admin${item.key}` }>{ item.title }</NavLink>
        </Menu.Item>
      )
    })
  }

  render () {
    return (
      <div className="sider">
        <div className="logo">
          <img src={ logo } alt="logo"/>
          <h1>BikeAdmin</h1>
        </div>
        <Menu theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}

export default Sider
