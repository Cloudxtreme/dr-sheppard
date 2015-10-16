Package.describe({
  name: 'jss:bootstrap-add-clear',
  version: '1.0.2',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use(['ecmascript', 'jquery', 'twbs:bootstrap']);
  api.addFiles('bootstrap-add-clear.js', 'client');
});
