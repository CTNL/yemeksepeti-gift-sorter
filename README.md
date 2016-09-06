# yemeksepeti-gift-sorter
Yemeksepeti hediyelerini ihtimallere göre sıralar

# How to use
## Option 1: Using the Console

1. Open the console by pressing F12 (Firefox: Ctrl+Shift+K)
2. Copy, paste below code and press Enter:

<code>jQuery(".gift-items li").each(function(){$cols=$(this).find(".properties>div");var e=parseInt($cols[0].innerText)/parseInt($cols[1].innerText);$cols[2].innerHTML=100*e}).sort(function(e,n){var r=parseFloat($(e).find(".properties>div")[2].innerText),t=parseFloat($(n).find(".properties>div")[2].innerText);return r>t?-1:1}).appendTo(".gift-items");</code>
  
## Option 2: Create a Bookmark

<code>javascript:jQuery(".gift-items li").each(function(){$cols=$(this).find(".properties>div");var e=parseInt($cols[0].innerText)/parseInt($cols[1].innerText);$cols[2].innerHTML=100*e}).sort(function(e,n){var r=parseFloat($(e).find(".properties>div")[2].innerText),t=parseFloat($(n).find(".properties>div")[2].innerText);return r>t?-1:1}).appendTo(".gift-items");</code>
