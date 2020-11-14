import JSONP from '../utils/jsonp'

const city = '上海'
const url = `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`

export const getWeatherInfo = async () => {
  try {
    const res: any = await JSONP({ url })
    if (res.status === 'success') {
      return res.results[0].weather_data[0]
    }
  } catch (err) {
    console.log(err)
  }
}
