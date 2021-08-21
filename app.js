const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geocode('boston',(error,data)=>{
    if(error){
       return console.log(error)
    }
    // console.log('Error', error)
    // console.log('Data', data)
    forecast(data.latitude,data.longitude,(error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
        // console.log('Error', error)
        // console.log('Data', data)
      })
})



// const url = 'http://api.weatherstack.com/current?access_key=3f46f246eb2c36fb8bae8d2deb15d8bb&query=37.8267,122.4233&units=f'
//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaXNoYW5paSIsImEiOiJja3NocnpsN3IwbGU2MzFtYmpucW5qdW1xIn0.GVKtnU1HiGCJLeJonq7N5w&limit=1'

// request({url:url, json:true}, (error,response)=>{
// //    console.log(response.body.current)
//     if (error) {
//         console.log('Unable to connect weather service')
//     } else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently '+ response.body.current.temperature +' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out') 
//     }
// })

// request({url:geocodeURL, json:true},(error, response)=> {  //json:true --> parse json response to us
//     if (error) {
//         console.log('Unable to connect location service')
//     } else if(response.body.features.length ===0){
//         console.log('Unable to find location. Try another search')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitute = response.body.features[0].center[0]
//         console.log(longitute, latitude)
//     }
    
// })


        //test step 1
// request({url:url}, (error, response)=> {
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// })

// console.log('Starting..')

// setTimeout(()=>{
//     console.log('2 seconds timer')
// }, 2000)

// setTimeout(()=>{
//     console.log('0 seconds timer')
// }, 0)

// console.log('Stopping..')