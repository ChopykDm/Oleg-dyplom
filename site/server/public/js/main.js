$(function(){
  function sendEmail(){
    var data = {};
    data.milimetr = $("#milimetr").val();

    $.ajax({
      type: "POST",
      url: "/send-mail",
      data:  data,
      contentType:"application/json; charset=utf-8",
      success: function(){alert("все добре")},
       dataType: "json"
    });
  }
  sendEmail();
})






//function alerttext(text){
//  alert(text)
//}

//alerttext("text1")
//alerttext("text2")
