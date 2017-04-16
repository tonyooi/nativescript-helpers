var frameModule = require("ui/frame");

exports.navigateByModuleName = function(moduleName) {
	if( isCurrentPageByModuleName(moduleName) ) { 
		return false ; 
	}
    // console.log(frameModule.topmost().currentPage);
    // console.dump(frameModule.topmost().currentPage.content);
    // content gives you the content of the page
    frameModule.topmost().navigate(moduleName);
}

exports.navigateByModuleNameWithDelay = function(moduleName, delay = 100) {
	if( isCurrentPageByModuleName(moduleName) ) { 
		return false ; 
	}
    setTimeout( function(){ frameModule.topmost().navigate(moduleName); } , delay);
}

function isCurrentPageByModuleName(moduleName) {
    let curPageModuleName = frameModule.topmost().currentPage.toString(); 
    // eg output Page(1)@file:///app/./pages/main-page/main-page.xml:1:1;
    return curPageModuleName.includes(moduleName);
}