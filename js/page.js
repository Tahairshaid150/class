$(document).ready(function() { 
    $('#registerForm').hide(); 


    $('#switchToLogin').click(function() { 
      $('#registerForm').hide(); 
      $('#loginForm').show(); 
    }); 

    
    $('#switchToRegister').click(function() { 
      $('#loginForm').hide(); 
      $('#registerForm').show(); 
    }); 

 
    $('#loginForm, #registerForm').submit(function(e) { 
      e.preventDefault(); 

    }); 
  }); 