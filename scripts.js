$(document).ready(function() {
  $("form").submit(function(event){
    $("#icecreamForm").addClass("hidden")

  event.preventDefault();
  const icecreamInput = $("#inputfield").val();
  let icecreams = icecreamInput.split(",");
    const capIcecreams= [];

    icecreams.forEach(function(icecream){
      capIcecreams.push(icecream.toUpperCase().trim());
    });

    capIcecreams.sort().forEach(function(flavor){
      $("#flavorList").append("<li>"+flavor+"</li>");
    });
  });
});







