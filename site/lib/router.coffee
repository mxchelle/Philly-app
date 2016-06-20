@route "profile",
    waitOn: ->
      [
        Meteor.subscribe 'images'
      ]