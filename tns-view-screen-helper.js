/**************************************************************************************
*
* Helper functions to geth the dimensions of a view element.
* Also provides DIPsToPixels and PixelsToDIPs conversion
*
***************************************************************************************/
const scaleDIPs = require("platform").screen.mainScreen.scale;

/***************************************************************************************
* Name : getViewMeasuredWidthHeightPixels
* Purpose : gets the width and height dimension of a view in pixles
* Params : view to measure
* Returns : width and height in pixesl
***************************************************************************************/
//returns the width and height of viewEl in pixels
exports.getViewMeasuredWidthHeightPixels = function(viewEl) {
	viewEl.measure(0,0); // if you don't run measure, will return height = width = 0
	let width = viewEl.getMeasuredWidth();
	let height = viewEl.getMeasuredHeight();
	return ( {width,height} );
};

/***************************************************************************************
* Name : getViewMeasuredWidthHeightDIPs
* Purpose : gets the width and height dimension of a view in DIPs
* Params : view to measure
* Returns : width and height in DIPs
***************************************************************************************/
//returns the width and height of viewEl in pixels
exports.getViewMeasuredWidthHeightDIPs = function(viewEl) {
	viewEl.measure(0,0); // if you don't run measure, will return height = width = 0
	let width = viewEl.getMeasuredWidth()/scaleDIPs;
	let height = viewEl.getMeasuredHeight()/scaleDIPs;
	return ( {width,height} );
};

/***************************************************************************************
* Name : pixelToDIPs
* Purpose : converts the dimension from pixels to DIPs
* Params : dimension in pixels
* Returns : dimension converted to DIPs
***************************************************************************************/
// pixels = dps * scale
exports.pixelToDIPs =  function(pixel_meas){
	return pixel_meas/scaleDIPs;
};

/***************************************************************************************
* Name : DIPsToPixels
* Purpose : converts the dimension from DIPs to pixels
* Params : dimension in DIPs
* Returns : dimension converted to pixels
***************************************************************************************/
exports.DIPsToPixel =  function(dip_meas){
	return dip_meas*scaleDIPs;
}