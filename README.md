
one plugin for get System Info ,browser name  and brower verson

##eg: my system is win8 ,brower is chrome and its verson is 41.0.2272.89
 
 ```javascript
 
var device = new Device();

// System Info
console.log(device.getSystem()); //Windows 8

// brower name and verson 
		
console.log(device.getBrowser().appName+'/'+device.getBrowser().version); 
// result: chrome/41.0.2272.89

```
