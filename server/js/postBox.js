Meteor.methods({
  insertPost: function(post) {
    if (Meteor.user()) {
      Posts.insert({
        message: post,
        user: Meteor.user().username,
        timestamp: new Date()
      });
    }
  }
});
