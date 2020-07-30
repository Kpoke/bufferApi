# bufferApi
A simple api that receives a data and sends it back within the time specified. The server is currently hosted on heroku - url "bufferapi.herokuapp.com" with only one route "/buffer"

The api receives two fields, data - the data you will be sending to the api and receiving back, could be a number, string, object an array
time - the number of seconds you would like the server to take before sending the data back to you

An example

axios.post("bufferapi.herokuapp.com/buffer", { data: [1,2,3,4,5], time: 10})
     .then(response => console.log(response.data))
     .catch((e) => console.log(e))
     
NOTE: Any request of 30 seconds or above will return an H12 error from Heroku
