import configFunction from './configFunction.js';

test('unitTest',async() => {
  let testFunction= await configFunction()
  expect(testFunction).toEqual(testArray3);
});

const testArray1 = [
  { "imageUrl": "https://via.placeholder.com/800x600/BD463C" },
  { "imageUrl": "https://via.placeholder.com/800x600/7A2E27" },
  { "imageUrl": "https://via.placeholder.com/800x600/FA5E50" },
  { "imageUrl": "https://via.placeholder.com/800x600/3B1613" },
  { "imageUrl": "https://via.placeholder.com/800x600/E05548" }
]

const testArray2 = [
  { "imageUrl": "https://via.placeholder.com/600x1000/468DBD" },
  { "imageUrl": "https://via.placeholder.com/600x1000/2D5C7A" },
  { "imageUrl": "https://via.placeholder.com/600x1000/5CBBFA" },
  { "imageUrl": "https://via.placeholder.com/600x1000/162C3B" },
  { "imageUrl": "https://via.placeholder.com/600x1000/53A8E0" },
]

const testArray3 =[
  { "imageUrl": "https://via.placeholder.com/800x800/8EBD37" },
  { "imageUrl": "https://via.placeholder.com/800x800/5C7A23" },
  { "imageUrl": "https://via.placeholder.com/800x800/BCFA4" },
  { "imageUrl": "https://via.placeholder.com/800x800/2C3B11" },
  { "imageUrl": "https://via.placeholder.com/800x800/A9E042" },
  ]
