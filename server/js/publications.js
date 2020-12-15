Meteor.publishComposite('posts', function(username) {
  return {
    find: function() {
      // Find the current user's following users
      return Relationships.find({ follower: username });
    },
    children: [{
      find: function(relationship) {
        // Find tweets from followed users
        return Posts.find({user: relationship.following});
      }
    }]
  }
});

Meteor.publish('ownPosts', function(username) {
  return Posts.find({user: username});
});


Meteor.publish('users', function(username) {
  return Meteor.users.find({}, {
    fields: { 'username': 1 },
    limit: 100
  });
});

Meteor.publish('followings', function(username) {
  return Relationships.find({ follower: username });
});

Meteor.publish('followers', function(username) {
  return Relationships.find({ following: username });
});
