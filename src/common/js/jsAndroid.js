/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-13 12:41:06
 * @version $Id$
 */

let jsAndroid = {

	//扫码
	barcode: {
		scan: function(){
			var d = jsAndroid.jsAndroidCallback()
			jsAndroid.is_android() ? window.jsAndroid.scan(): window.webkit.messageHandlers.saveImage.postMessage({body: 'I come Here'});
			return d
		},
		scanBtn: function(){
			var d = jsAndroid.jsAndroidCallback()
			window.jsAndroid.scanBtn()
			jsAndroid.is_android() ? window.jsAndroid.scanBtn(): window.webkit.messageHandlers.saveImage.postMessage({body: 'I come Here'});
			return d
		}
	},
	//分享
	share: {
		//分享连接
		shareHref: function(p){
			var d = jsAndroid.jsAndroidCallback()
			window.jsAndroid.shareHref(p)
			return d
		},
		//分享文字
		shareText: function(p){
			var d = jsAndroid.jsAndroidCallback()
			window.jsAndroid.shareText(p)
			return d
		}
	},
	//callback回调
	jsAndroidCallback(){
		return new Promise((resolve) => {
				window["receiveMsgFromNative"] = function (msg) {
				  resolve(msg)
				}
			});
	},
	//判断系统环境,return true表示为Android
	is_android() {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
	　   }
   }
}

export default jsAndroid
