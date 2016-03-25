var app = {
  init: function(){},
  send: function(message){ 
    $.ajax({
      url: 'https://api.parse.com/1/classes/chatterbox',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(data){
        console.log('chatterbox: Message sent');
      },
      error: function(data){
        console.error('chatterbox: Failed to send message')
      }
    });
  },
  fetch: function(){
    $.ajax({
      url: 'https://api.parse.com/1/classes/chatterbox',
      type: 'GET',
      contentType: 'application/json',
      success: function(data){
        console.log('chatterbox: Fetch received');
        console.log('data',data)
        return true;
        // $('#posts').append(data);
      },
      error: function(data){
        console.error('chatterbox: Failed to send message')
      }
    });
  },
  server: 'https://api.parse.com/1/classes/chatterbox',
};
app.fetch()
$(document).ready(function(){
if(app.fetch.success){
  console.log('this works');
}

});