
// START of jquery code for trendingProjects CAROUSEL
$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
});
// END of jquery code for trendingProjects CAROUSEL


function Community(name, user, post, links, comments) {
  this.communityName = name;
  this.user = user;
  this.post = post;
  this.links = links;
  this. comments = comments;
}
var newCommunity = new Community("techCommunity", "Bruno", "Check out my new project", "https://btg001.github.io/pizzeria/", "This is really nice!");
console.log(newCommunity);
console.log(newCommunity.communityName);
console.log(newCommunity.user);
console.log(newCommunity.post);
console.log(newCommunity.links);
console.log(newCommunity.comments);

//First name, Second name, Email address

function User(f_name, s_name, email, password) {
  this.f_name = f_name;
  this.s_name = s_name;
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
