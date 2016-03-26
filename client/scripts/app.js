var objectArr = [];
var app = {

  init: function(){
    
    app.fetch()
    
  },
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
      //reference server
      url: app.server,
      type: 'GET',
      contentType: 'application/json',
      success: function(data){
        console.log('chatterbox: Fetch recieved');
        objectArr.push(data.results);
        // console.log(objectArr)
      },
      error: function(data){
        console.error('chatterbox: Failed to fetch message')
      },
      complete: function(data){
        $('#chats').append(data);
        console.log('data',data)
      }
    });
  },
  //create a server method that points to the server
  server: 'https://api.parse.com/1/classes/chatterbox',

  clearMessages: function(){
    $('#chats').text('');
  },

  addMessage: function(message){
    var msg = $('<div class="username">'+ message.text +'</div>')
    $('.username').on('click', function(){
        app.addFriend(this);
    })
    $('#chats').append(msg);
  },

  addRoom: function(room){
    $('#roomSelect').append('<div>'+room+'</div>')
  },

  addFriend: function(friend){
    
  },

  handleSubmit: function(){
    var message = {
    username: window.location.search.slice(10),
    text: 'testing',
    roomname: 'tga5'
  }
    app.send(message);

  },

};


$(document).ready(function(){
    $('#send .submit').submit(function(e){
      app.handleSubmit();
      e.preventDefault();
    });
  
})


































