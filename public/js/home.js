$("#login_form").submit(function(event){
  event.preventDefault();

  $.post('/login', {
    username : $('#usr').val(),
    password : $('#psw').val()
  }, function(response){
    if (response.success){
      console.log("success");
      if ($("#"+response.id).length === 0) {
        $("#v-pills-tab").append(response.head);
        $("#v-pills-tabContent").append(response.content);
      }
      else {
        console.log("already exists");
      }

    } else {
      console.log("not success");
    //  var html_message = '<div class="alert alert-danger" role="alert" id="error_message">' + 'Identifiant ou mot de passe incorrect' + '</div>'
    //  $("#error_message").html(html_message);
    };
  });
})
