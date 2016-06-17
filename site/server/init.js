/*import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  UploadServer.init({
    tmpDir: '/tmp/',
    uploadDir: '/public/upload',
    getDirectory: function(file, formData) {
      return formData.contentType;
    },
    finished: function(file, folder, formFields) {
      console.log('Write to database: ' + folder + '/' + file);
    }
  })
});
*/

Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/public/uploads/tmp',
    uploadDir: process.env.PWD + '/public/uploads/',
    checkCreateDirectories: true //create the directories for you
  });
});