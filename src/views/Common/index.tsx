import React, { FC } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Layout/Header'
import './index.less'

const Common: FC = (props) => {
  return (
    <div className="common-wrapper">
      <Header type='COMMON' />
      { props.children }
    </div>
  )
}

Common.propTypes = {
  children: PropTypes.node
}

export default Common
