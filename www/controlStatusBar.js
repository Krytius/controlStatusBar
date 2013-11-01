function controlStatusBar() {}

controlStatusBar.prototype.hide = function() {
	cordova.exec(this.success, this.error, "controlStatusBar", "hide", []);
};

controlStatusBar.prototype.show = function() {
	cordova.exec(this.success, this.error, "controlStatusBar", "show", []);
};

controlStatusBar.error = function(err) {
	console.log(error);
}

controlStatusBar.success = function(succ) {
	console.log(succ);
}

cordova.addConstructor(function() {
	if (!window.plugins) window.plugins = {};
	window.plugins.controlStatusBar = new controlStatusBar();
});