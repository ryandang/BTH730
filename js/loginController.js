angular.module('bthApp', ["ui.bootstrap", "ngSanitize"])

.controller('loginController', function ($scope, $modal, $location, $window) {

  $scope.msg = "";
  $scope.email = "";
  $scope.password = "";

  $scope.closeAlert = function() {
    $scope.msg = "";
  };

  $scope.submit = function() {
    if($scope.email.toLowerCase() === "test@gmail.com" && $scope.password.toLowerCase() === "test") {
        $window.location.href = "./view.html";
    } else {
        $scope.msg = "Incorrect Email or Password."
    }
  }

})
.controller("viewController", function($scope) {
  $scope.allPosts = [
    {
      id: 1,
      owner: "Ryan Dang",
      profile: "images/profile.png",
      title: "Book title 1",
      type: "<a href='#'>#Sell</a>",
      image: null,
      price: 25,
      reply: 2,
      fav: 1,
      isFaved: false,
      content: "The book is in #perfect condition. The price can be <a href='#'>#negotiated</a>. This book is for <a href='#'>#BTN710</a> <a href='#'>#BSD</a> program"
    },
    {
      id: 2,
      owner: "Luong Chuong",
      profile: "images/profile2.png",
      title: "Ken Follett",
      type: "<a href='#'>#Sell</a>",
      image: "images/book1.jpg",
      price: 20,
      reply: 12,
      fav: 3,
      isFaved: true,
      content: "The book is in #perfect condition. The price can be <a href='#'>#negotiated</a>. This book is for <a href='#'>#BTN710</a> <a href='#'>#BSD</a> program"
    },
    {
      id: 3,
      owner: "Ryan Dang",
      profile: "images/profile.png",
      title: "Sylvia Day",
      type: "<a href='#'>#Sell</a>",
      image: "images/book2.jpg",
      price: 25,
      reply: 5,
      fav: 2,
      isFaved: false,
      content: "Gideon calls me his angel, but he’s the miracle in my life. My gorgeous, wounded warrior, so determined to slay my demons while refusing to face his own.The vows we'd exchanged should have bound us tighter than blood and flesh. Instead they opened old wounds, exposed pain and insecurities, and lured bitter enemies out of the shadows. I felt him slipping from my grasp, my greatest fears becoming my reality, my love tested in ways I wasn’t sure I was strong enough to bear.At the brightest time in our lives, the darkness of his past encroached and threatened everything we’d worked so hard for. We faced a terrible choice: the familiar safety of the lives we’d had before each other or the fight for a future that suddenly seemed an impossible and hopeless dream…"
    }
  ];
$scope.content = "<a href='#'>#Sell</a> Book title 1";
  $scope.myFavs = [
    {
      id: 2,
      owner: "Luong Chuong",
      profile: "images/profile2.png",
      title: "Ken Follett",
      type: "<a href='#'>#Sell</a>",
      image: "images/book1.jpg",
      price: 20,
      reply: 12,
      fav: 3,
      isFaved: true,
      content: "The book is in #perfect condition. The price can be <a href='#'>#negotiated</a>. This book is for <a href='#'>#BTN710</a> <a href='#'>#BSD</a> program"
    }
  ];
  $scope.myPosts = [
    {
      id: 1,
      owner: "Ryan Dang",
      profile: "images/profile.png",
      title: "Book title 1",
      type: "<a href='#'>#Sell</a>",
      image: null,
      price: 25,
      reply: 2,
      fav: 1,
      isFaved: false,
      content: "The book is in #perfect condition. The price can be <a href='#'>#negotiated</a>. This book is for <a href='#'>#BTN710</a> <a href='#'>#BSD</a> program"
    },
    {
      id: 3,
      owner: "Ryan Dang",
      profile: "images/profile.png",
      title: "Sylvia Day",
      type: "<a href='#'>#Sell</a>",
      image: "images/book2.jpg",
      price: 25,
      reply: 5,
      fav: 3,
      isFaved: false,
      content: "Gideon calls me his angel, but he’s the miracle in my life. My gorgeous, wounded warrior, so determined to slay my demons while refusing to face his own.The vows we'd exchanged should have bound us tighter than blood and flesh. Instead they opened old wounds, exposed pain and insecurities, and lured bitter enemies out of the shadows. I felt him slipping from my grasp, my greatest fears becoming my reality, my love tested in ways I wasn’t sure I was strong enough to bear.At the brightest time in our lives, the darkness of his past encroached and threatened everything we’d worked so hard for. We faced a terrible choice: the familiar safety of the lives we’d had before each other or the fight for a future that suddenly seemed an impossible and hopeless dream…"
    }
  ];

  $scope.addFav = function(id, e) {
    console.log(id);
    var tempPost;
    // console.log(e);
    _.each($scope.allPosts, function(post) {
      if(post.id === id) {
        tempPost = post;
        post.isFaved = !post.isFaved;
        if(post.isFaved) {
          post.fav++;
          $scope.myFavs.push(tempPost);
        } else {
          post.fav--;
          $scope.myFavs = _.reject($scope.myFavs, function(post) {
            return post.id === id;
          });
          console.log($scope.myFavs);
          // if(!!!_.find($scope.myFavs, function(post) {return post.id === id}))
              // $scope.myFavs.push(tempPost);
        }
      }
    });

    // console.log(post);
  }

});