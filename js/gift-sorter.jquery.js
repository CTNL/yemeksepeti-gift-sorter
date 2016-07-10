jQuery(".gift-items li").each(function(){ // For each gift
  $cols = $(this).find(".propertiesContainer .col-md-3");
  // Probability = #ofGifts / Demand
  var ihtimal = parseInt($cols[0].innerText) / parseInt($cols[1].innerText); 
  $cols[2].innerHTML = ihtimal*100;
}).sort(function(a,b){
  var an = parseFloat($(a).find(".propertiesContainer .col-md-3")[2].innerText),
      bn = parseFloat($(b).find(".propertiesContainer .col-md-3")[2].innerText);
  return an>bn?-1:1;
}).appendTo(".gift-items");
