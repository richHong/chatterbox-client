
var app = {
  //Initialize the app
  init: function(){
    //Get information from server
    app.fetch()

    
  },
  //Sends message to server
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
  //Makes ajax call to fetch data from server
  fetch: function(){
    $.ajax({
      //reference server
      url: app.server,
      type: 'GET',
      contentType: 'application/json',
      success: function(data){
        console.log('chatterbox: Fetch recieved');
        //Iterate through the result of the data
        _.each(data.results, function(obj){
          console.log('obj:',obj);
          //After recieving data add message to DOM
          app.addMessage(obj); 
          //After recieving data add room name to DOM dropdown menu
          app.addRoom(obj.roomname);
        })
      
      },
      error: function(data){
        console.error('chatterbox: Failed to fetch message')
      },
    
    });
  },
  //create a server method that points to the server
  server: 'https://api.parse.com/1/classes/chatterbox',
  //Useful for repopulating chat div
  clearMessages: function(){
    $('#chats').text('');
  },
  //Add message to chat div on DOM
  addMessage: function(message){
    //create a variable for new divs to prevent XSS attacks
    var msg = $('<div class="username"/>')
    msg.text(message.username + ' : '+ message.text);
    //Click handler add to username so you can add friend
    $('.username').on('click', function(){
        //adds a friend
        app.addFriend(this);
    })
    //appends the messages to the #chats div
    $('#chats').append(msg);
  },

  addRoom: function(room){
    
    if($('#roomSelect').find('option').val() !== room){
      $('#roomSelect').append('<option value="'+room+'">'+room+'</option>')
    }
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

app.init();

$(document).ready(function(){
  //click element that handles what to do when something is submitted
    $('#send .submit').submit(function(e){
      e.preventDefault();
      app.handleSubmit();
    });
    //filters the messages to whatever room is selected
    $('#roomSelect').change(function(){
      console.log($('.username').filter($('value').val()));
  
    })

  
})


































