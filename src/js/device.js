(function(){
			var Device = function(){
					this.ua = navigator.userAgent;

			}


			Device.prototype.getSystem=function(){

           		var device = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
           		// 判别移动设备
           		for(var i=0;i<device.length;i++){
           			if(this.ua.indexOf(device[i])!=-1){
           				switch(device[i]){
           					case 'iPhone':return 'mobile_iPhone';break;
           					case 'SymbianOS':return 'mobile_SymbianOS';break;
           					case 'Windows Phone':return 'mobile_WindowsPhone';break;
           					case 'iPad':return 'pad_iPad';break;
           					case 'iPod':return 'pad_iPod';break;
           					case 'Android':
	           					if(this.ua.indexOf('Mobile')!=-1){
			           				return 'mobile_Android';
			           			}else{
			           				return 'pad_Android';
			           			};break;

           				}
           			}
           		}

           		// 判别PC
           		var ua = navigator.userAgent.toLowerCase(),
           			sys,

	           		isWin7 = ua.indexOf("nt 6.1") > -1,
	           		isWinXp = ua.indexOf("nt 5.1") > -1,
					isWin8 = ua.indexOf("nt 6.3") > -1,
					isWin10 = ua.indexOf("nt 10.0") > -1,
					isVista = ua.indexOf("nt 6.0") > -1,
					isWin2003 = ua.indexOf("nt 5.2") > -1,
					isWin2000 = ua.indexOf("nt 5.0") > -1,
					isWindows = (ua.indexOf("windows") != -1 || ua.indexOf("win32") != -1),
					isMac = (ua.indexOf("macintosh") != -1 || ua.indexOf("mac os x") != -1),
					isAir = (ua.indexOf("adobeair") != -1);
				

					if(isWinXp){
						sys = "Windows xp";
					}else if(isWin7){
						sys = "Windows 7";
					}else if(isWin8){
						sys = "Windows 8";
					}else if(isWin10){
						sys = "Windows 10";
					}else if(isVista){
						sys = "Windows Vista";
					}else if(isWin2003){
						sys = "Windows 2003";
					}else if(isWin2000){
						sys = "Windows 2000";
					}else if(isWindows){
						sys = "Windows";
					}else if(isMac){
						sys = "Macintosh";
					}else if(isAir){
						sys = "Adobeair";
					}else{
						sys = "Unknow";
					}

				return sys;

			}

			Device.prototype.getBrowser = function(){
				var browser = {appName: 'unknown', version: 0},
			        userAgent = window.navigator.userAgent.toLowerCase();
					//IE,firefox,opera,chrome,netscape
			    if ( /(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test( userAgent ) ){
			        browser.appName = RegExp.$1;
			        browser.version = RegExp.$2;
			    } else if ( /version\D+(\d[\d.]*).*safari/.test( userAgent ) ){ // safari
			        browser.appName = 'safari';
			        browser.version = RegExp.$1;
			    }else if (/trident/.test(userAgent) && !/msie/.test(userAgent)){
			    	browser.appName = 'msie';
			    	browser.version = '11.0';
			    }
			    return browser;
			}


			window.Device = Device;
})();