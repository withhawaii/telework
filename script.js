$(document).ready(function(){

  var script = "javascript:(function(){$('select[id^=dateAt]').each(function(){day=$(this).parent().prev().prev().text().trim();type_select=$(this);hour_select=$(this).parent().next().find('select');if(['/*telework_days*/'].includes(day)){type_select.val('24');hour_select.val('08');}else{type_select.val('');hour_select.val('00');}});})();"
  
  $(".weekday").click(function() {
    var selected = [];
    $(".weekday:checked").each(function() {
      selected.push($(this).attr("name"));
    });
    $("#bookmarklet").attr("href", script.replace("/*telework_days*/", selected.join("','"))) 
  });
    
  var img1 = "leave01.png";
  var img2 = "leave02.png";
  var currentImg = img1;
  setInterval(function(){
    if(currentImg === img1){
      currentImg = img2;
    } else {
      currentImg = img1;
    }
    $("#leave").attr("src", currentImg);
  }, 1000);
  
});
