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
        $("#chat_ul").append(response.content);
        $("#check_colloque").hide();
//        $("#login_form_result").html("<div class='alert alert-success' role='alert'>Correct!</div>");
      }
      else {
        console.log("already exists");
      }

    } else {
      console.log("not success");
      html = "<li class='media received'><div class='media-body'><h5 class='mt-0 mb-1'><img src='images/bulle1.svg' alt=''> Lucie Dité</h5>Ca ne me rappelle rien désolée.</div></li><br>"
      $("#chat_ul").append(html);
      //  var html_message = '<div class="alert alert-danger" role="alert" id="error_message">' + 'Identifiant ou mot de passe incorrect' + '</div>'
      //  $("#error_message").html(html_message);
    };
  });
})
