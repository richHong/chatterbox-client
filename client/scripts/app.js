var app = {
  init: function(){},
  send: function(){ 
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
};

app.message.username('tsdfhsdfk');
