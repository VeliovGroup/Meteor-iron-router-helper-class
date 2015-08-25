Package.describe({
  name: 'ostrio:iron-router-helper-class',
  version: '1.0.0',
  summary: 'Helper class for other packages by ostrio',
  git: 'https://github.com/VeliovGroup/Meteor-iron-router-helper-class',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['coffeescript'], 'client');
  api.addFiles('iron-router-helper-class.coffee');
  api.export('IronRouterHelper', 'client');
});