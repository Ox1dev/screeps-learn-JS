var roleHarvester = require('@/role.harvester');
var roleBuilder = require('@/role.builder');
var factory = require('@/factory');
var base = require('@/base');
var utils = require('@/utils');

module.exports.loop = function () {
    factory.run(Game.spawns['Spawn1']);
    base.run(Game.spawns['Spawn1']);
    utils.run();
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role === 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role === 'builder') {
            roleBuilder.run(creep);
        }
    }
}