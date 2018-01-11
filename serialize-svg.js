function toSvg() {
	mySvg = globalSvgCtx.getSerializedSvg();
	mySvg = mySvg.replace(/<g( transform="scale\(2,2\))+">/g, '')
	mySvg = mySvg.replace(/<\/g><\/g>/g, '')
	console.info(mySvg.length);
	document.querySelector('body').innerHTML = mySvg
}

setTimeout(toSvg, 200);
