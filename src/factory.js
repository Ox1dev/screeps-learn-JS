var factory = {
    run: function(spawn) {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader');

        if(harvesters.length < 4 && spawn.store[RESOURCE_ENERGY] >= 200 && !spawn.spawning) {
            for (let i = 0; i <= 2; i++) {
                var newHarvester = 'Harvester' + Game.time;
                spawn.spawnCreep([WORK,CARRY,MOVE], newHarvester,
                    {memory: {role: 'harvester'}});
                console.log('Spawning new harvester: ' + newHarvester);
            }
        } else if (builders.length < 2 && spawn.store[RESOURCE_ENERGY] >= 150 && !spawn.spawning) {
            for (let i = 0; i <= 2; i++) {
                var newBuilder = 'Builder' + Game.time;
                spawn.spawnCreep([WORK,CARRY,MOVE], newBuilder,
                    {memory: {role: 'builder'}});
                console.log('Spawning new builder: ' + newBuilder);
            }
        } else if (upgraders.length < 1 && spawn.store[RESOURCE_ENERGY] >= 150 && !spawn.spawning) {
            for (let i = 0; i <= 2; i++) {
                var newUpgrader = 'Upgrader' + Game.time;
                spawn.spawnCreep([WORK,CARRY,MOVE], newUpgrader,
                    {memory: {role: 'upgrader'}});
                console.log('Spawning new upgrader: ' + newUpgrader);
            }
        }
    }
}
module.exports = factory;