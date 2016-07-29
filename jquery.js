$(document).ready(function(){
	




$(".addtolistb").click(function(){
	$(".addlist").append("<td>" + $(".buttoninput").val() + "</td>");	
});

$(".checkmarker").click(function(){
	$("td").eq(0).remove();
});

$(".notcheckmarker").click(function(){
	alert("Then fucking do it, dumbass!")
});

$(".todolist").on("click", ".editt", function(){
        $(this).closest('tr').find(".zadatak").empty();
		$(this).closest('tr').find(".zadatak").append( $("#my-input").val() );
});
  					




});




