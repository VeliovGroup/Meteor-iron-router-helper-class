Package.describe({
  name: 'ostrio:iron-router-helper-class',
  version: '1.0.1',
  summary: 'Helper class for other iron-router\'s packages by ostrio',
  git: 'https://github.com/VeliovGroup/Meteor-iron-router-helper-class',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('coffeescript', 'client');
  api.addFiles('iron-router-helper-class.coffee', 'client');
  api.export('IronRouterHelper', 'client');
});