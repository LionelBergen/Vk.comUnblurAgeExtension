var elementsToRemove = [];
var classElementsToRemove = 'vkitVideoCardRestrictionOverlay__restriction';
var classElementsLinkToChange = 'fans_fan_lnk';
var imageSrcToRemove = ['imgBlurredSizeS', 'VideoRestriction'];
var loopInterval = 5000;
var loop = true;
var changeURLToVideo = true;

function replaceProperties(elementI)
{
	for (const imageClass of imageSrcToRemove) {
		if (elementI.src && elementI.src.includes(imageSrcToRemove))
		{
			elementI.src = elementI.src.replace(imageSrcToRemove, '');
		}
		
		if (elementI.className && elementI.className.includes(imageClass))
		{
			elementI.className = elementI.className.replace(imageClass, '');
		}
	}
}

function removeDivProperties(elementI)
{
	if (elementI.className && elementI.className.includes(classElementsToRemove))
	{
		elementI.remove();
	}
}

function removeRestrictionFilter()
{
	for (const divI of document.getElementsByTagName('div')) {
		if (divI.className && divI.className.includes(classElementsToRemove))
		{
			elementsToRemove.push(divI);
		}
	}

	for (const divI of elementsToRemove) {
		divI.remove();
	}

	for (const elementI of document.getElementsByTagName('img')) {
		replaceProperties(elementI)
	}

	for (const elementI of document.getElementsByTagName('div')) {
		replaceProperties(elementI)
	}
	
	for (const divWithLink of document.getElementsByClassName(classElementsLinkToChange)) {
		divWithLink.href = divWithLink.href.replace("https://vk.com/", "https://vkvideo.ru/@");
	}
}

if(loop) {
	// setInterval(removeRestrictionFilter, loopInterval);
}

const observer = new MutationObserver(mutations => {
	for (const mutation of mutations) {
		mutation.addedNodes.forEach(node => {
			if (node.nodeType === Node.ELEMENT_NODE) {
				node.querySelectorAll?.("img").forEach(replaceProperties);
				node.querySelectorAll?.('div').forEach(removeDivProperties);
			}
		});
	}
});


observer.observe(document.documentElement, {
	childList: true,
	subtree: true
});