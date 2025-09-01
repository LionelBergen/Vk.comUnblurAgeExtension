# Vk.comUnblurAgeExtension
Automatically unblurs preview image of videos, and removes 'This video is age-restricted ... watch', making all videos act the same as non-age restricted videos 


```
var elementsToRemove = [];
var classElementsToRemove = 'vkitVideoCardRestrictionOverlay__restriction';
var imageSrcToRemove = ['imgBlurredSizeS', 'VideoRestriction'];

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
	for (const imageClass of imageSrcToRemove) {
		if (elementI.src && elementI.src.includes(imageSrcToRemove))
		{
			elementI.src = elementI.src.replace(imageSrcToRemove, '');
		}
		
		if (elementI.className && elementI.className.includes(imageSrcToRemove))
		{
			elementI.className = elementI.className.replace(imageSrcToRemove, '');
		}
	}
}   
```  
