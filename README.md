# 100 Doors Kata
![example workflow](https://github.com/dfederspiel/100-doors-kata/actions/workflows/main.yml/badge.svg)

![1280x300 image](/1280x300-doors.jpg)  
Ever tried the [100 doors kata](https://rosettacode.org/wiki/100_doors)?  It's a fun little exercise for teaching [TDD](https://en.wikipedia.org/wiki/Test-driven_development).

Typically I bore easily with these kinds of exercises, and as a creature of my short attention span and old habits, I thought "Hey, wouldn't it be neat to **SEE** all of the doors? Because right now it's just red and green dots."  

If we are representing the door state with either `@` or `#`, it should be fairly straight forward to map those to pixels in an image. (e.g. `0=black` and `1=white`)

After some digging, I found [jpeg-js](https://www.npmjs.com/package/jpeg-js), which allows us to feed it the memory buffer we generate from door state data. And with that (and a couple other steps) we get an image!! 🚀

## Usage
```
npm install
npm start
```

This will overwrite the `100x100-doors.jpg` image in the project root.  

![Default 100x100 image](/100x100-doors.jpg)


## Gallery of Doors
Of course that pattern was too hard to ignore, and I lost a bit of time tinkering with the dimensions...

### **Diagonal Square** (1,638,400 pixels/doors)  
With perfectly square dimensions, there is always chaos in the beginning, but with each subsequent pass we observe normalization into a consistent grade.
![1280x1280 image](/1280x1280-doors.jpg)

### **Cascading Gradient** (2,073,600 pixels/doors)  
When `width > height`, we get a gradient.
![1920x1080 image](/1920x1080-doors.jpg)

### **Another Dimension** (2,000,000 pixels/doors)  
And my personal favorite. When `height > width`, we see a fractal pattern emerge with complex, triangular banding. Arguably the most chaotic, but I want this in a frame.
![1000x2000 image](/1000x2000-doors.jpg)


