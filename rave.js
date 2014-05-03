'use strict';

var has = require('dojo/has');

exports.create = create;

function create (context) {
  var info = {
    name: 'dojo/has',
    module: has
  };
  if (!context.amdPluginMap) context.amdPluginMap = {};
  context.amdPluginMap['has'] = context.amdPluginMap['dojo/has'] = info;
}
