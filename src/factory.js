var factory = {
    run: function(spawn) {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');

        if(harvesters.length < 2 && spawn.store[RESOURCE_ENERGY] >= 200 && !spawn.spawning) {
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
        }
    }
}
module.exports = factory;