import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import './home.html';
import './profile.html'
import './settings.html'

Router.route('/', function () {
  this.render('home');
});

Router.route('/profile', function () {
  this.render('profile');
});

Router.route('/settings', function () {
  this.render('settings');
});
//dropdown menus
let drop1;
let drop2;
let drop3;

if (Meteor.isClient)
{
  Template.dropDown.onRendered(function()
    {
      drop1 = document.querySelector("#dropdown1");
      drop2 = document.querySelector("#dropdown2");
      drop3 = document.querySelector("#dropdown3");
    });

  Template.dropDown.events({
    'click #addButton': function()
    {
      console.log("add dropDown clicked");
      drop1.classList.toggle("show");
      drop2.classList.remove("show");
      drop3.classList.remove("show");
    },

    'click #notifButton': function()
    {
      console.log("notification dropDown clicked");
      drop1.classList.remove("show");
      drop2.classList.toggle("show");
      drop3.classList.remove("show");
    },

    'click #accountButton': function()
    {
      console.log("account dropDown clicked");
      drop1.classList.remove("show");
      drop2.classList.remove("show");
      drop3.classList.toggle("show");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
