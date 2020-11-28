import * as api1 from './api1-response.json';
import * as api2 from './api2-response.json';
import * as api3 from './api3-response.json';
import * as config from './integration-config.json';
import  _  from 'lodash';

export function configFunction() {

   let aa= _.get(eval(config.default.name), config.default.path);

   let arrayManipulate = aa.map(item => {
     let keys=config.default.key
       return {
         imageUrl: item[keys],
       };
     });

   console.log(arrayManipulate);
     return arrayManipulate
};

/*
"api1":{
  "path": "default",
  "key": "url",
  "name":"api1"
},
"api2":{
  "path": "default.images",
  "key":"link",
  "name":"api2"
},
"api3":{
  "path": "default.swipers[0].swiper.image_set",
  "key":"image_url",
  "name":"api3"
}
*/
