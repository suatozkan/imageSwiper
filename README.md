# imageSwiper

![Alt text](https://i.ibb.co/gZLKTDG/Simulator-Screen-Shot-i-Phone-11-2020-11-29-at-13-18-45.png)

Getting recent transactions via api and confirmation of them with React Native(react-native: 0.59.9).

## Getting Started

* Download/Clone Repo.
* 'npm install' in project folder
* 'Expo start'  
* Set Api config in integration-config.json file as below;
-choose value from options for which api
config={
  "path": "default", ||  "default.images" || "default.swipers[0].swiper.image_set"
  "key": "url",   || "link"  ||  "image_url"
  "name":"api1",   ||  "api2"  ||  "api3"
  "imageHeight":"height * 0.7",
  "imageWidth":"width - 20",
  "imageTop":"(height * 0.3) / 2",
  "imageLeft":"10"
}


## Built With

* [Redux](https://reactnavigation.org/) - States
* [Lodash](https://lodash.com/) - Parsing.
* [PanResponder,Animated](react-native) - Card animations and swipe
* [Jest](https://jestjs.io/) - Unit test
