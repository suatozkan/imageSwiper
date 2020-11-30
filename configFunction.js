//import api  from './api-response.json'
import config from './integration-config.json'
import  _  from 'lodash';
import fetch from 'isomorphic-fetch';
// converter function for integration-config.json
// exporter only url with imageUrl key
const  configFunction = async()=>{

      let apiName = config.name
      const apiResponse = await fetch(`http://localhost:3000/${apiName}`);  //UPDATE localhost port for your device

      if (!apiResponse.ok) {
        const message = `An error has occured: ${response.status}`;
        return message        // error control
      }
      const apiResults = await apiResponse.json();
      // an error control; if the api.name is wrong in integration-config.json, it shows error..
      if(!apiResults){
        return 'Error, api.name not found'
      }
      if(config.path==""){
        var apiArray=apiResults
      }else{
        var apiArray= _.get(apiResults, config.path);
      }
      let arrayManipulated = apiArray.map(item => {
        let apiKey=config.key
        return {
          imageUrl: item[apiKey],
        };
      });
      return arrayManipulated
};

export default configFunction

/*
-- example integration format in integration-config.json
"api1":{
  "path": "",
  "key": "url",
  "name":"api1",
  "imageHeight":"height * 0.7",
  "imageWidth":"width - 20",
  "imageTop":"(height * 0.3) / 2",
  "imageLeft":"10"
},
"api2":{
  "path": "images",
  "key":"link",
  "name":"api2",
  "imageHeight":"height * 0.7",
  "imageWidth":"width - 20",
  "imageTop":"(height * 0.3) / 2",
  "imageLeft":"10"
},
"api3":{
  "path": "swipers[0].swiper.image_set",
  "key":"image_url",
  "name":"api3",
  "imageHeight":"height * 0.7",
  "imageWidth":"width - 20",
  "imageTop":"(height * 0.3) / 2",
  "imageLeft":"10"
}
*/
