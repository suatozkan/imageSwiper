# imageSwiper

![Alt text](https://i.ibb.co/6YkNkPt/Ekran-Resmi-2020-12-01-01-33-56.png)

Getting images via api(depend on customer) and swipe endless with React Native(react-native: 0.63.2), Expo(expo:39.0.2).

## Getting Started

* Download/Clone Repo.
* 'npm install' in project folder
* "npm install -g json-server" for install json api
* "json-server --watch api-response.json"  for running api => control and update localhost port at configFunction.js file
* 'Expo start'  
* Set Api config in integration-config.json file as below;
-choose value from options for which api
```javascript
config={
  "path": "default", ||  "default.images" || "default.swipers[0].swiper.image_set"
  "key": "url",   || "link"  ||  "image_url"
  "name":"api1",   ||  "api2"  ||  "api3"
  "imageHeight":"height * 0.7",
  "imageWidth":"width - 20",
  "imageTop":"(height * 0.3) / 2",
  "imageLeft":"10"
}
```
* Ready
* Yarn Test for testing

## Built With

* [Redux](https://reactnavigation.org/) - States
* [Lodash](https://lodash.com/) - Parsing.
* [PanResponder,Animated](react-native) - Card animations and swipe
* [Jest](https://jestjs.io/) - Unit test
