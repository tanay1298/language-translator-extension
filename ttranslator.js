

// Listen to contextMenu when selected
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){

	if(info != null && info.hasOwnProperty('menuItemId')
			&& info.hasOwnProperty('selectionText')){
		var searchURL = findSearchEngin(info.menuItemId);


	var url = '';
		
		if(searchURL != ''){
			url = searchURL+info.selectionText;
		}

		console.log("the url is:::"+url);
		
		// When the URL is not null, create a new tab to search
		if( url != ''){
			  browser.tabs.create({url: url});
		}

	}

}


// Create a set of context options for text-selection
browser.contextMenus.create({
  id: "hi",
  title: "Hindi",
  contexts: ["selection"],
  icons: {
    "16": "images/om-symbol16.png",
    "32": "images/om-symbol.png"
  }
});


browser.contextMenus.create({
  id: "pun",
  title: "Punjabi",
  contexts: ["selection"],
  icons: {
    "16": "images/dhol.png",
    "32": "images/dhol(1).png"
  }
   
});



browser.contextMenus.create({
  id: "tam",
  title: "Tamil",
  contexts: ["selection"],
  icons: {
    "16": "images/96581d9f85ccd3074c533c8bcb99d270-32bits-16.png",
    "32": "images/96581d9f85ccd3074c533c8bcb99d270-32bits-32.png"
  }
});



browser.contextMenus.create({
  id: "ur",
  title: "Urdu",
  contexts: ["selection"],
  icons: {
    "16": "images/Muslim_Male.png",
    "32": "images/Muslim_Male(1).png"
  }

});


browser.contextMenus.create({
  id: "fr",
  title: "French",
  contexts: ["selection"],
  icons: {
    "16": "images/if_92_Ensign_Flag_Nation_france_2634519.png",
    "32": "images/if_92_Ensign_Flag_Nation_france_2634519 (1).png"
  }
});


browser.contextMenus.create({
  id: "jap",
  title: "Japanese",
  
  contexts: ["selection"],
  icons: {
    "16": "images/Japan.png",
    "32": "images/Japan (1).png"
  }
});


browser.contextMenus.create({
  id: "ger",
  title: "German",
  contexts: ["selection"],
  icons: {
    "16": "images/germany-flag-icon-16.png",
    "32": "images/germany-flag-icon-32.png"
  }
});


browser.contextMenus.create({
  id: "ch",
  title: "Chinese",
  contexts: ["selection"],
   icons: {
    "16": "images/china-flag-icon-16.png",
    "32": "images/china-flag-icon-32.png"
  }
});

browser.contextMenus.create({
  id: "tel",
  title: "Telugu",
  contexts: ["selection"],
  icons: {
    "16": "images/23594cfca8db4f25bb1bd799778236a4-32bits-16.png",
    "32": "images/23594cfca8db4f25bb1bd799778236a4-32bits-32.png"
  }
});

browser.contextMenus.create({
  id: "ben",
  title: "Bengali",
  contexts: ["selection"],
  icons: {
    "16": "images/if_Tiger_204388.png",
    "32": "images/if_Tiger_204388 (1).png"
  }
});


// Find the Search Engine query url to form the url for new tab
function findSearchEngin(searchEngText){

        if(searchEngText == 'pun'){
                return 'https://translate.google.com/#en/pa/';
        }
        else if(searchEngText == 'hi'){
                return 'https://translate.google.com/#en/hi/';
        }
        else if(searchEngText == 'tam'){
                return 'https://translate.google.com/#en/ta/';
        }
        else if(searchEngText == 'fr'){
                return 'https://translate.google.com/#en/fr/';
        }
        else if(searchEngText == 'ur'){
                return 'https://translate.google.com/#en/ur/';
        }
        else if(searchEngText == 'jap'){
                return 'https://translate.google.com/#en/ja/';
        }
        else if(searchEngText == 'ger'){
                return 'https://translate.google.com/#en/de/';
        }
        else if(searchEngText == 'ch'){
                return 'https://translate.google.com/#en/zh-CN/';
        }
        else if(searchEngText == 'tel'){
                return 'https://translate.google.com/#en/te/';
        }
        else if(searchEngText == 'ben'){
                return 'https://translate.google.com/#en/bn/';
        }
        return '';
}

