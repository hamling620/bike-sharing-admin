import jsonp from 'jsonp'

interface JSONPoptions {
  url: string;
}

export default (options: JSONPoptions) => {
  return new Promise((resolve, reject) => {
    jsonp(options.url, { param: 'callback' }, (err, res) => {
      if (err) return reject(err)
      if (res.status === 'success') {
        resolve(res)
      } else {
        reject(res.message)
      }
    })
  })
}
