import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Card } from 'antd'
import getData from './data'

interface IProps {}

interface IState {
  id: string;
}

interface Data {
  lon: number;
  lat: number;
  ts?: null;
}

interface Result {
  positionList: Data[];
  area: Data[]
}

type DetailProp = IProps & RouteComponentProps

class Detail extends Component<DetailProp, IState> {
  state = {
    id: ''
  }

  map: any

  async componentDidMount () {
    const { id } = this.props.match.params as IState
    this.setState({
      id
    })
    this.map = new (window as any).BMap.Map('map')
    // this.map.centerAndZoom(new (window as any).BMap.Point(116.3964, 39.9093), 10)
    // this.map.enableScrollWheelZoom()
    this.addMapControl()
    const { positionList, area }: Result = await getData() as Result
    this.drawBikeRoute(positionList)
    this.drawServiceArea(area)
  }

  addMapControl = () => {
    const map = this.map
    map.addControl(new (window as any).BMap.ScaleControl({ anchor: (window as any).BMAP_ANCHOR_TOP_RIGHT }))
    map.addControl(new (window as any).BMap.NavigationControl({ anchor: (window as any).BMAP_ANCHOR_TOP_RIGHT }))
  }

  drawBikeRoute = (positionList: Data[]) => {
    let startPoint = ''
    let endPoint = ''
    if (positionList.length) {
      const first = positionList[0]
      const last = positionList[positionList.length - 1]
      startPoint = new (window as any).BMap.Point(first.lon, first.lat)
      const startIcon = new (window as any).BMap.Icon('/map/start_point.png', new (window as any).BMap.Size(36, 42), { imageSize: new (window as any).BMap.Size(36, 42), anchor: new (window as any).BMap.Size(36, 42) })
      const startMarker = new (window as any).BMap.Marker(startPoint, { icon: startIcon })
      this.map.addOverlay(startMarker)
      endPoint = new (window as any).BMap.Point(last.lon, last.lat)
      const endIcon = new (window as any).BMap.Icon('/map/end_point.png', new (window as any).BMap.Size(36, 42), { imageSize: new (window as any).BMap.Size(36, 42), anchor: new (window as any).BMap.Size(36, 42) })
      const endMarker = new (window as any).BMap.Marker(endPoint, { icon: endIcon })
      this.map.addOverlay(endMarker)
    }
    const trackPoint = []
    for (let i = 0; i < positionList.length; i++) {
      const point = positionList[i]
      trackPoint.push(new (window as any).BMap.Point(point.lon, point.lat))
    }
    const polyline = new (window as any).BMap.Polyline(trackPoint, {
      strokeColor: '#1869AD',
      strokeWeight: 3,
      strokeOpacity: 1
    })
    this.map.addOverlay(polyline)
    this.map.centerAndZoom(endPoint, 11)
  }

  drawServiceArea = (area: Data[]) => {
    const trackPoint = []
    for (let i = 0; i < area.length; i++) {
      const point = area[i]
      trackPoint.push(new (window as any).BMap.Point(point.lon, point.lat))
    }
    const polygon = new (window as any).BMap.Polygon(trackPoint, {
      strokeColor: '#CE0000',
      strokeWeight: 4,
      strokeOpacity: 0.1,
      fillColor: '#FF8605',
      fillOpacity: 0.4
    })
    this.map.addOverlay(polygon)
  }

  render () {
    return (
      <div>
        <Card title={`百度地图应用 / 详情 / ${this.state.id}`}>
          <div id="map" style={{ height: '800px' }}></div>
        </Card>
      </div>
    )
  }
}

export default withRouter(Detail)
