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
.controller("viewController", function($scope, $modal) {
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
      content: "The book is in #perfect condition. The price can be <a href='#'>#negotiated</a>. This book is for <a href='#'>#BTN710</a> <a href='#'>#BSD</a> program",
      campuses: ["<a href='#'>#York</a>", "<a href='#'>#King</a>"]
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
      content: "The book is in #perfect condition. The price can be <a href='#'>#negotiated</a>. This book is for <a href='#'>#BTN710</a> <a href='#'>#BSD</a> program",
      campuses: ["<a href='#'>#York</a>", "<a href='#'>#King</a>"]
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
      content: "Gideon calls me his angel, but he’s the miracle in my life. My gorgeous, wounded warrior, so determined to slay my demons while refusing to face his own.The vows we'd exchanged should have bound us tighter than blood and flesh. Instead they opened old wounds, exposed pain and insecurities, and lured bitter enemies out of the shadows. I felt him slipping from my grasp, my greatest fears becoming my reality, my love tested in ways I wasn’t sure I was strong enough to bear.At the brightest time in our lives, the darkness of his past encroached and threatened everything we’d worked so hard for. We faced a terrible choice: the familiar safety of the lives we’d had before each other or the fight for a future that suddenly seemed an impossible and hopeless dream…",
      campuses: ["<a href='#'>#King</a>"]
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
      content: "The book is in #perfect condition. The price can be <a href='#'>#negotiated</a>. This book is for <a href='#'>#BTN710</a> <a href='#'>#BSD</a> program",
      campuses: ["<a href='#'>#York</a>", "<a href='#'>#King</a>"]
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
      content: "The book is in #perfect condition. The price can be <a href='#'>#negotiated</a>. This book is for <a href='#'>#BTN710</a> <a href='#'>#BSD</a> program",
      campuses: ["<a href='#'>#York</a>", "<a href='#'>#King</a>"]
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
      content: "Gideon calls me his angel, but he’s the miracle in my life. My gorgeous, wounded warrior, so determined to slay my demons while refusing to face his own.The vows we'd exchanged should have bound us tighter than blood and flesh. Instead they opened old wounds, exposed pain and insecurities, and lured bitter enemies out of the shadows. I felt him slipping from my grasp, my greatest fears becoming my reality, my love tested in ways I wasn’t sure I was strong enough to bear.At the brightest time in our lives, the darkness of his past encroached and threatened everything we’d worked so hard for. We faced a terrible choice: the familiar safety of the lives we’d had before each other or the fight for a future that suddenly seemed an impossible and hopeless dream…",
      campuses: ["<a href='#'>#King</a>"]
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
        }
      }
    });

    _.each($scope.myPosts, function(post) {
      if(post.id === id) {
        post.isFaved = !post.isFaved;
        if(post.isFaved) {
          post.fav++;
        } else {
          post.fav--;
        }
      }
    });
  };

  $scope.addPost = function() {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
          allPosts: function(){
              return $scope.allPosts;
          },
          myPosts: function() {
              return $scope.myPosts;
          }
      }
    });
  }
})

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, allPosts, myPosts) {

  $scope.allPosts = allPosts;
  $scope.myPosts = myPosts;
  $scope.isSelling = true;
  $scope.type = "<a href='#'>#Sell</a>";
  $scope.titles = [
    "The Hunger Games",
    " Harry Potter and the Order of the Phoenix (Harry Potter, #5) ",
    " Twilight (Twilight, #1)",
    "To Kill a Mockingbird",
    "The Lord of the Rings (The Lord of the Rings, #1-3)",
    "The Catcher in the Rye",
    "The Great Gatsby",
    "The Lion, the Witch, and the Wardrobe (Chronicles of Narnia, #1)",
    "Lord of the Flies",
    "Pride and Prejudice",
    "Pride and Prejudice",
    "The Decameron",
    "Journey to the End of the Night",
    "The Canterbury Tales",
    "Great Expectations",
    "Jacques the Fatalist",
    "Madame Bovary"
  ];


  $scope.ok = function () {
    $modalInstance.close();
    var temp = {};
    var campuses = [];

    if($scope.selectedYork)
     campuses.push("<a href='#'>#York</a>");
    if($scope.selectedMarkham)
     campuses.push("<a href='#'>#Markham</a>");
    if($scope.selectedNewnham)
     campuses.push("<a href='#'>#Newnham</a>");
    if($scope.selectedKing)
     campuses.push("<a href='#'>#King</a>");
    if($scope.selectedOther)
     campuses.push("<a href='#'>#Other</a>");

    if(!$scope.price)
      $scope.price = 0;
    temp.title = $scope.title;
    temp.profile = "images/profile.png";
    temp.price = $scope.price;
    temp.type = $scope.type;
    temp.owner = "Ryan Dang";
    temp.content = $scope.description;
    temp.campuses = campuses;

    $scope.allPosts.push(temp);
    $scope.myPosts.push(temp);
    var matches = $scope.description.match(/#\w+/g);

    _.each(matches, function(hashtag) {
      console.log(hashtag);
      temp.content = temp.content.replace(hashtag, "<a href='#'>"+hashtag+"</a>");
    });

  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
})

.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});