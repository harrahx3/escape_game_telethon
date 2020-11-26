$("#check_colloque").submit(function(event){
  event.preventDefault();

  $.post('/check_colloque', {
    nom : $('#nom').val(),
    lieu : $('#lieu').val(),
    date : $('#date').val()
  }, function(response){
    if (response.success){
      console.log("success");
      if ($("#"+response.id).length === 0) {
        $("#result_div").append(response.content);
//        $("#login_form_result").html("<div class='alert alert-success' role='alert'>Correct!</div>");
      }
      else {
        console.log("already exists");
      }

    } else {
      console.log("not success");
      $("#result_div").html("<div class='alert alert-warning' role='alert'>Mauvaise réponse!</div>");
      //  var html_message = '<div class="alert alert-danger" role="alert" id="error_message">' + 'Identifiant ou mot de passe incorrect' + '</div>'
      //  $("#error_message").html(html_message);
    };
  });
})
