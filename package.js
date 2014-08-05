Package.describe({
  summary: "Provides access to know on the client side of Meteor"
});

Npm.depends({
    'knox: '0.9.0'
});


Package.on_use(function (api, where) {
  api.add_files('knox-clientside.js', ['client']);
});

Package.on_test(function (api) {
  api.use('knox-clientside');

  api.add_files('knox-clientside_tests.js', ['client']);
});
