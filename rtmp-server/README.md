### Install
```sh
yarn add node-media-server
```

### [Initialize](https://www.npmjs.com/package/node-media-server)
```javascript
const NodeMediaServer = require('node-media-server');
const config = {
	rtmp: {
		port: 1935,
		chunk_size: 60000,
		gop_cache: true,
		ping: 30,
		ping_timeout: 60
	},
	http: {
		port: 8000,
		allow_origin: '*'
	}
};

var nms = new NodeMediaServer(config);
nms.run();
```

### Package.json
```json
    "start": "node index.js"
```

### Start
```sh
yarn start
```

### Install OBS
[OBS Studio](https://obsproject.com/)

### Config OBS
- create a scene
- create a source -> display capture
- create a source -> audio capture
- setting -> Streams -> Custom Streaming Server
```sh
rtmp://localhost/live
1
```

### Config Video Player
- in React Project 
```sh
yarn add flv.js
```
