$("#start_form").submit(function(event){
  event.preventDefault();
  $.get('/start');
  window.location = '/start';

  /*$.post('/start', {
    nick: $('#usr').val()
  }, function(response){
    if (response.success){
      console.log("success");
    } else {
      console.log("not success");
    };
  });*/
})
