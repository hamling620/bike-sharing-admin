const data = {
  positionList: [{
    lon: 116.361221,
    lat: 40.043776
  }, {
    lon: 116.363736,
    lat: 40.038086
  }, {
    lon: 116.364599,
    lat: 40.036484
  }, {
    lon: 116.373438,
    lat: 40.03538
  }, {
    lon: 116.377966,
    lat: 40.036263
  }, {
    lon: 116.379762,
    lat: 40.03654
  }, {
    lon: 116.38084,
    lat: 40.033225
  }, {
    lon: 116.38084,
    lat: 40.029413
  }, {
    lon: 116.381343,
    lat: 40.021291
  }, {
    lon: 116.381846,
    lat: 40.015821
  }, {
    lon: 116.382637,
    lat: 40.008084
  }, {
    lon: 116.398806,
    lat: 40.008637
  }],
  area: [{
    lon: 116.274737,
    lat: 40.139759,
    ts: null
  },
  {
    lon: 116.316562,
    lat: 40.144943,
    ts: null
  },
  {
    lon: 116.351631,
    lat: 40.129498,
    ts: null
  },
  {
    lon: 116.390582,
    lat: 40.082481,
    ts: null
  },
  {
    lon: 116.38742,
    lat: 40.01065,
    ts: null
  },
  {
    lon: 116.414297,
    lat: 40.01181,
    ts: null
  },
  {
    lon: 116.696242,
    lat: 39.964035,
    ts: null
  },
  {
    lon: 116.494498,
    lat: 39.851306,
    ts: null
  },
  {
    lon: 116.238086,
    lat: 39.848647,
    ts: null
  },
  {
    lon: 116.189454,
    lat: 39.999418,
    ts: null
  },
  {
    lon: 116.244646,
    lat: 39.990574,
    ts: null
  },
  {
    lon: 116.281441,
    lat: 40.008703,
    ts: null
  },
  {
    lon: 116.271092,
    lat: 40.142201,
    ts: null
  },
  {
    lon: 116.271092,
    lat: 40.142201,
    ts: null
  }]
}

export default () => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
)
