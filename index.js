var jpeg = require("jpeg-js");
const fs = require("fs");
const doors = require("./doors");

const WIDTH = 1000;
const HEIGHT = 1000;

const fillFrameDataWithDoorStateMap = (buffer, map) => {
  let i = 0;
  map.split('').forEach((char) => {
    let hex = char == "@" ? 0x00 : 0xff;
    buffer[i++] = hex; // red
    buffer[i++] = hex; // green
    buffer[i++] = hex; // blue
    buffer[i++] = 0xff; // alpha - ignored in JPEGs
  });
};

let doorStateMap;

doors.open(WIDTH, HEIGHT, (doorState) => {
  doorStateMap += doorState;
});

var frameData = new Buffer.alloc(WIDTH * HEIGHT * 4);
fillFrameDataWithDoorStateMap(frameData, doorStateMap);

var rawImageData = {
  data: frameData,
  width: WIDTH,
  height: HEIGHT,
};
var jpegImageData = jpeg.encode(rawImageData, 100);
fs.writeFileSync(`${WIDTH}x${HEIGHT}-doors.jpg`, jpegImageData.data);
