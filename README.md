# jspm + D3 Example
#### Setting Up

Run
```shell
git clone git@github.com:jakeNiemiec/jspm_d3.git
npm i
npm start
```

Open `http://localhost:8080/`

###Expected Output
(in chrome console)
```error
index.js:4 
scaleLinear: linear() {
    var scale = continuous(deinterpolate, d3Interpolate.interpolateNumber);

    scale.copy = function() {
      return copy(scale, linear());
    };

    return linearish(scale);
…
index.js:9 
80
index.js:10 
320
```
