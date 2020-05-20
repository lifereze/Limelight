const username = document.getElementByclassName ('')
const email = document.getElementByclassName ('')
const password = document.getElementsByClassName ('')

form.addEventListener('submit',(event) => {

    if (username.value === '' || username.value === null ) {
        console.log('please enter your username')
    } 
     
    if (password.length <= 6) {
        console.log('password must be longer than 6 character')
    } 
    else if (password.length >= 20) {
        console.log('password must be less than 20 characters')
    }
    else (password.value === 'password') {
        console.log('Passoward cannot be password')  
    }
    
    
    function validate(email)  
    {
     var gmail = [];
     for (var i = 0; i < email.length; i++) {
         var charr = email.charAt(i);
         if (charr == '@') {
            i++;
            for (var j = 0; j < 5; j++) {
                gmail.push(email.charAt(i));
                i++;
            }
            var checkGmail = gmail.join('');
            if (checkGmail != 'gmail') {
                console.log("Please make sure you have the correct email!");
            } 
            else {
                console.log("Good job");
            }
          }   
        }        
    }


    
    



   event.preventDefault() 
   }); 
   // START of jquery code for trendingProjects CAROUSEL
   / Instantiate the Bootstrap carousel
 $('.multi-item-carousel').carousel({
    interval: false
 });
 // for every slide in carousel, copy the next slide's item in the slide.
 // Do the same for the next, next item.
 $('.multi-item-carousel .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
 });
 // END of jquery code for trendingProjects CAROUSEL



