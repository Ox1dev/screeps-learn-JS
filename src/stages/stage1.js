const buildBase = require('@/base/baseDeployment');

const stage1 = {
    run: function (spawn, numOfCreeps) {
        if (numOfCreeps.harvester < 1 && !spawn.spawning && spawn.room.energyAvailable >= 300) {
            for (let i = 0; i <= 2; i++) {
                let newHarvester = 'Harvester' + Game.time;
                spawn.spawnCreep([WORK, WORK, CARRY, MOVE], newHarvester,
                    {memory: {role: 'harvester'}});
                console.log('Spawning new Harvester: ' + newHarvester);
            }
        } else if (numOfCreeps.hauler < 2 && !spawn.spawning && spawn.room.energyAvailable >= 300) {
            for (let i = 0; i <= 2; i++) {
                let newHauler = 'Hauler' + Game.time;
                spawn.spawnCreep([WORK, CARRY, MOVE, MOVE, MOVE], newHauler,
                    {memory: {role: 'hauler'}});
                console.log('Spawning new Hauler: ' + newHauler);
            }
        } else if (numOfCreeps.builder < 2 && !spawn.spawning && spawn.room.energyAvailable >= 300) {
            for (let i = 0; i <= 2; i++) {
                let newBuilder = 'Builder' + Game.time;
                spawn.spawnCreep([WORK, CARRY, MOVE, MOVE, MOVE], newBuilder,
                    {memory: {role: 'builder'}});
                console.log('Spawning new builder: ' + newBuilder);
            }
        } else if (numOfCreeps.upgrader < 2 && !spawn.spawning && spawn.room.energyAvailable >= 300) {
            for (let i = 0; i <= 2; i++) {
                let newUpgrader = 'Upgrader' + Game.time;
                spawn.spawnCreep([WORK, CARRY, MOVE, MOVE, MOVE], newUpgrader,
                    {memory: {role: 'upgrader'}});
                console.log('Spawning new upgrader: ' + newUpgrader);
            }
        }
        buildBase.run(spawn);
    }
};
module.exports = stage1;