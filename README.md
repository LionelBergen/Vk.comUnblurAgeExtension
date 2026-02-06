# Vk.comUnblurAgeExtension   
Automatically unblurs preview image of videos, and removes 'This video is age-restricted ... watch', making all videos act the same as non-age restricted videos       

Because the addon probably cannot be verifie/approved by Chrome and Firefox, it remains a local/temporary addon (based on other VK addons being removed from Chrome and Firefox.    


**To load the extension (must be done everytime) in firefox:**    
0) Add manifest.json, README.md and scripts.js into a .zip file. E.G `vk_unblur.zip`   
1) open Firefox
2) enter "about:debugging" in the URL bar
3) click "This Firefox"
4) click "Load Temporary Add-on"
5) open the extension's directory and select any file inside the extension,
   or select the packaged extension (.zip file).









Below is some old code, used to do the same thing but the code must be pasted in dev console on a browser;     
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
