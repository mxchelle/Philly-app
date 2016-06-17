Resources = new Mongo.Collection('resources');   

Resources.allow({
	//if you're signed in, you're able to
	insert : function(userId, doc){
		return !!Meteor.userId();
	},
	update : function(userId, doc){
		return !!Meteor.userId();
	},

}); 

Attachment = new SimpleSchema({
	name : {
		type: String
	},
	fileId: {
	    type: String,
	    /*autoform: {
	      afFieldInput: {
	        type: "file",
	        collection: "files"
	      }
	    }*/
	}
});

/*Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")]
});

Files.allow({
  download: function () {
    return true;
  },
  fetch: null
});*/

ResourceSchema = new SimpleSchema({
	name : {
		type: String,
		label: 'Name',
	},

	desc : {
		type: String,
		label: 'Description',
		autoform : {
			type: "textarea"
		}
	},
	attachments : {
		 type: [Attachment]
	},
	author : {
		type: String,
		label: 'Author',
		autoValue: function(){
			return Meteor.userId();
		},
		autoform : {
			type: "hidden"
		}
	},
	createdAt : {
		type: Date,
		label: 'Created At',
		autoValue: function(){
			return new Date()
		},
		autoform : {
			type: "hidden"
		}
	},
	tags: {
        type: String,
        autoform:
            afFieldInput:
                type: 'tags-toggle'
                tags: [
                    'music',
                    'book',
                    # alternatively you can set different label than tag value:
                    { label: 'Movies', value: 'movies' }
                ]
    }
});

Meteor.methods({
	
	deleteResource : function(id){
		Resources.remove(id);
	},
	myServerMethod: function(doc) {
	    /*try {
	      check(doc, Attachment);
	      Attachment.clean(doc);
	    }
	    catch(e){
	      throw new Meteor.Error(e);
	    }*/

    //do some stuff here and throw a new Meteor.Error if there is a problem
  	}
});

Resources.attachSchema(ResourceSchema);