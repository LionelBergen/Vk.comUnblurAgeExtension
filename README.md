# UPDATE   
It seems extensions for VK get removed from the marketplace. Chrome & Firefox both don't allow extensions not on the marketplace.   
This repo simply contains a script which can be copy and pasted into the developer console (f12) to remove the blur filter.    

# Vk.comUnblurAgeExtension
Automatically unblurs preview image of videos, and removes 'This video is age-restricted ... watch', making all videos act the same as non-age restricted videos 


```
var elementsToRemove = [];
var classElementsToRemove = 'vkitVideoCardRestrictionOverlay__restriction';
var imageSrcToRemove = ['imgBlurredSizeS', 'VideoRestriction'];
var loopInterval = 5000;
var loop = true;

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
}

if(loop) {
	setInterval(removeRestrictionFilter, loopInterval);
}
```  
