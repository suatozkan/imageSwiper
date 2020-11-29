import * as api from './api-response.json';
import * as config from './integration-config.json';
import  _  from 'lodash';

// converter function for integration-config.json
// exporter only url will imageUrl key
export function configFunction() {
  let apiName = config.default.name
      // an error control; if the api.name is wrong in integration-config.json, it shows error..
      if(!api[apiName]){
        return 'Error, api.name not found'
      }
      if(config.default.path==""){
        var apiArray=api[apiName]
      }else{
        var apiArray= _.get(api[apiName], config.default.path);
      }
      let arrayManipulate = apiArray.map(item => {
        let apiKey=config.default.key
        return {
          imageUrl: item[apiKey],
        };
      });
      console.log(arrayManipulate)
      return arrayManipulate
};

/*
-- example integration format in integration-config.json
"api1":{
  "path": "default",
  "key": "url",
  "name":"api1",
  "imageHeight":"height * 0.7",
  "imageWidth":"width - 20",
  "imageTop":"(height * 0.3) / 2",
  "imageLeft":"10"
},
"api2":{
  "path": "default.images",
  "key":"link",
  "name":"api2",
  "imageHeight":"height * 0.7",
  "imageWidth":"width - 20",
  "imageTop":"(height * 0.3) / 2",
  "imageLeft":"10"
},
"api3":{
  "path": "default.swipers[0].swiper.image_set",
  "key":"image_url",
  "name":"api3",
  "imageHeight":"height * 0.7",
  "imageWidth":"width - 20",
  "imageTop":"(height * 0.3) / 2",
  "imageLeft":"10"
}
*/
