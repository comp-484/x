import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

//dropdown menus
let drop1;
let drop2;
let drop3;

if (Meteor.isClient)
{
  Template.body.onRendered(function()
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

  Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
  });

  Template.hello.helpers({
    counter() {
      return Template.instance().counter.get();
    },
  });

  Template.hello.events({
    'click button'(event, instance) {
      // increment the counter when button is clicked
      instance.counter.set(instance.counter.get() + 1);
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
