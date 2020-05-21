$(document).ready(function (event) {
    $("form#form_id").submit(function (event) {
        //signup
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var inputtedEmail = $("input#new-email").val();
        var newUser = new User(inputtedFirstName, inputtedLastName, inputtedEmail);
        // Name and Email validation Function.
        function validation() {
            const username = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
            const password = document.getElementById("password").value;
            if (name === "" || email === "" || password === "") {
                alert("Please fill all fields...!!!!!!");
                return false;
            } else if (!email.match(emailReg)) {
                alert("Invalid Email...!!!!!!");
                return false;
            } else if (name === "firstName" && name === "lastName") {
                alert("kindly enter both firstName and lastName");
                return false;
            } else if (password <= 6) {
                alert("please enter more than 6 characters");
                return false;
            } else {
                return true;
            }
        }
        //login
        // Name and password validation Function.
        function validation() {
            const username = document.getElementById("name").value;
            const password = document.getElementById("password").value;
            if (name === "" || password === "") {
                alert("Please fill all fields...!!!!!!");
                return false;
            } else if (password <= 6) {
                alert("please enter more than 6 characters");
                return false;
            } else {
                return true;
            }
        }

        event.preventDefault();
    });
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



//First name, Second name, Email address

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

function Post(user, message, comments, stars, community) {
  this.user = user;
  this.message = message;
  this.comments = comments;
  this.stars = stars;
  this.community = community;
}

function Community(users, posts, images) {
  this.users = users;
  this.posts = post;
  this.images = images;
}
