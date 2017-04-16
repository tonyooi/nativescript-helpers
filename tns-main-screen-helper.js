/**************************************************************************************
*
* Helper functions to geth the dimensions of a main screen element.
* Also provides DIPsToPixels and PixelsToDIPs conversion
*
***************************************************************************************/
var mainScreen = require("platform").screen.mainScreen;

/***************************************************************************************
* Name : getWidthDIPs
* Purpose : gets the main screen width in DIPs
* Params : none
* Returns : the main screen width in DIPs
***************************************************************************************/
exports.getWidthDIPs = function(){
	return mainScreen.widthDIPs;
};

/***************************************************************************************
* Name : getHeightDIPs
* Purpose : gets the main screen height in DIPs
* Params : none
* Returns : the main screen height in DIPs
***************************************************************************************/
exports.getHeightDIPs = function(){
	return mainScreen.heightDIPs;
};

/***************************************************************************************
* Name : getScale
* Purpose : gets the main screen scale which is the relation between DIP and Pixels
* Params : none
* Returns : the main screen height in DIPs
***************************************************************************************/
exports.getScale = function(){
	return mainScreen.scale;
}

/***************************************************************************************
* Name : getWidthPixels
* Purpose : gets the main screen width in pixels
* Params : none
* Returns : the main screen width in pixels
***************************************************************************************/
exports.getWidthPixels = function(){
	return mainScreen.widthPixels;
};

/***************************************************************************************
* Name : getHeightPixels
* Purpose : gets the main screen height in pixels
* Params : none
* Returns : the main screen height in pixels
***************************************************************************************/
exports.getHeightPixels = function(){
	return mainScreen.heightPixels;
};

/***************************************************************************************
* Name : pixelToDIPs
* Purpose : converts the dimension from pixels to DIPs
* Params : dimension in pixels
* Returns : dimension converted to DIPs
***************************************************************************************/
// pixels = dps * scale
exports.pixelToDIPs =  function(pixel_meas){
	return pixel_meas/mainScreen.scale;
};

/***************************************************************************************
* Name : DIPsToPixels
* Purpose : converts the dimension from DIPs to pixels
* Params : dimension in DIPs
* Returns : dimension converted to pixels
***************************************************************************************/
exports.DIPsToPixel =  function(dip_meas){
	return dip_meas*mainScreen.scale;
}