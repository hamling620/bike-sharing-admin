import React, { FC } from 'react'
import { Button } from 'antd'
import Layout from './views/Layout'

const App: FC = () => {
  return (
    <div className="App">
      <Button type="primary">hello world</Button>
      <Layout />
    </div>
  )
}

export default App
