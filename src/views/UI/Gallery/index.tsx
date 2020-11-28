import React, { Component } from 'react'
import { Row, Col, Card, Modal } from 'antd'

type ImgItem = string[]
type Imgs = ImgItem[]

class Gallery extends Component {
  state = {
    imageSrc: '',
    imageTitle: '',
    visible: false
  }

  handlePreview = (item: string) => {
    this.setState({
      visible: true,
      imageSrc: `/gallery/${item}`,
      imageTitle: item
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render () {
    const arr: number[] = Array(5).fill(0)
    const imgs: Imgs = arr.map((item, row) => arr.map((item, col) => `${(col + 1) + row * 5}.png`))
    const imageList = imgs.map(list => list.map((item, index) => (
      <Card
        key={ index }
        cover={ <img src={ `/gallery/${item}` } />}
        style={{ marginBottom: '10px' }}
        onClick={ () => this.handlePreview(item)}
      >
        <Card.Meta title={ `画廊图片 ${item}.png` } description="请尽情欣赏画廊图片吧！" />
      </Card>
    )))

    return (
      <div>
        <Row gutter={ 10 }>
          {
            arr.map((item, index) => (
              <Col key={ index } md={ index === arr.length - 1 ? 4 : 5 }>{ imageList[index] }</Col>
            ))
          }
        </Row>
        <Modal
          visible={ this.state.visible }
          width={ 300 }
          title={ `画廊图片 ${this.state.imageTitle}` }
          onCancel={ this.handleCancel }
          footer={ null }
        >
          { <img src={ this.state.imageSrc } alt={ this.state.imageTitle } style={{ width: '100%' }} />}
        </Modal>
      </div>
    )
  }
}

export default Gallery
