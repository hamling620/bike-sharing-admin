import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './index.less'

const NotFound: FC = () => {
  return (
    <div className="not-found-page">
     <h1>404 Not Found</h1>
      <div className="tips">
        <p>抱歉，您访问的页面不存在！</p>
        <Link to='/'>回到首页</Link>
      </div>
    </div>
  )
}

export default NotFound
