var objectArr = [];
var app = {

  init: function(message){
    //invoke the send method with the message sent in
    app.send(message);
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
  fetch: function(id){
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
      }
    });
  },
  //create a server method that points to the server
  server: 'https://api.parse.com/1/classes/chatterbox',

  clearMessages: function(){
    $('#chats').text('');
  },

  addMessage: function(message){
    $('#chats').append('<div>'+message+'</div>');
  },

  addRoom: function(room){
    $('#roomSelect').append('<div>'+room+'</div>')
  },

  addFriend: function(friend){
    console.log('I tried to')
    
  },

};
var message = {
  username: 'anonymous',
  text: 'testing',
  roomname: 'tga5'
};
// app.init(message);

$(document).ready(function(){

    $('.username').on('click', function(){
        app.addFriend(this);
    })
  
})


































