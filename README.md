# Vk.comUnblurAgeExtension
Automatically unblurs preview image of videos, and removes 'This video is age-restricted ... watch', making all videos act the same as non-age restricted videos 


```
var elementsToRemove = [];

for (const divI of document.getElementsByTagName('div')) {
	if (divI.className && divI.className.includes('vkitVideoCardRestrictionOverlay__restriction'))
	{
		elementsToRemove.push(divI);
    }
}

for (const divI of elementsToRemove) {
	divI.remove();
}

for (const divI of document.getElementsByTagName('img')) {
	if (divI.src && divI.src.includes('__imgBlurredSizeS'))
	{
		divI.src = divI.src.replace('__imgBlurredSizeS', '');
    }
}
```  
