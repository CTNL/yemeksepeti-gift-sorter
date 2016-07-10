# yemeksepeti-gift-sorter
Yemeksepeti hediyelerini ihtimallere göre sıralar

# How to use
## Option 1: Using the Console

1. Open the console by pressing F12 (Firefox: Ctrl+Shift+K)
2. Copy, paste below code and press Enter:

<code>jQuery(".gift-items li").each(function(){a=$(this).find(".propertiesContainer .col-md-3");b=parseInt(a[0].innerText)/parseInt(a[1].innerText);a[2].innerHTML=b*100;}).sort(function(a,b){an=parseFloat($(a).find(".propertiesContainer .col-md-3")[2].innerText),bn=parseFloat($(b).find(".propertiesContainer .col-md-3")[2].innerText);return an>bn?-1:1;}).appendTo(".gift-items");</code>
  
## Option 2: Create a Bookmark

<code>javascript:jQuery(".gift-items li").each(function(){a=$(this).find(".propertiesContainer .col-md-3");b=parseInt(a[0].innerText)/parseInt(a[1].innerText);a[2].innerHTML=b*100;}).sort(function(a,b){an=parseFloat($(a).find(".propertiesContainer .col-md-3")[2].innerText),bn=parseFloat($(b).find(".propertiesContainer .col-md-3")[2].innerText);return an>bn?-1:1;}).appendTo(".gift-items");</code>
