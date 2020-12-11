import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

if (Meteor.isClient)
{

  Template.dropDown.events({
    'click #addButton': function()
    {
      let drop1 = document.getElementById('dropdown1');
      let drop2 = document.getElementById('dropdown2');
      let drop3 = document.getElementById('dropdown3');

      console.log("add dropDown clicked");
      drop1.classList.toggle("show");
      drop2.classList.remove("show");
      drop3.classList.remove("show");
    },

    'click #notifButton': function()
    {
      let drop1 = document.getElementById('dropdown1');
      let drop2 = document.getElementById('dropdown2');
      let drop3 = document.getElementById('dropdown3');

      console.log("notification dropDown clicked");
      drop1.classList.remove("show");
      drop2.classList.toggle("show");
      drop3.classList.remove("show");
    },

    'click #accountButton': function()
    {
      let drop1 = document.getElementById('dropdown1');
      let drop2 = document.getElementById('dropdown2');
      let drop3 = document.getElementById('dropdown3');

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
