//using cors proxy to resolve cors issues
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

const BASE_URL = 'https://samples.openweathermap.org/data/2.5/weather'
const API_KEY = 'cc50707b53fb4055cd711d0f707f83ca'

export const httpService = (method = 'GET', queryParams, onSuccess, onFailure) => {
  const httpConfig = {
    ['GET']: () => {
      fetch(`${CORS_PROXY}${BASE_URL}?q=${queryParams}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          const { main } = data
          onSuccess(main.temp)
        })
        .catch((error) => {
          onFailure(error)
        })
    },
  }
  return httpConfig[method]()
}
