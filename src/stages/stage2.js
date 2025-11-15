const buildBase = require('@/base/baseDeployment');
const stage1 = require("@/stages/stage1");

const stage2 = {
    run: function (spawn, numOfCreeps) {
        if (numOfCreeps.harvester < 1 && !spawn.spawning && spawn.room.energyAvailable >= 550) {
            for (let i = 0; i <= 2; i++) {
                let newHarvester = 'Harvester' + Game.time;
                spawn.spawnCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, CARRY], newHarvester,
                    {memory: {role: 'harvester'}});
                console.log('Spawning new harvester: ' + newHarvester);
            }
        } else if (numOfCreeps.hauler < 2 && !spawn.spawning && spawn.room.energyAvailable >= 550) {
            for (let i = 0; i <= 2; i++) {
                let newHauler = 'Hauler' + Game.time;
                spawn.spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newHauler,
                    {memory: {role: 'hauler'}});
                console.log('Spawning new Hauler: ' + newHauler);
            }
        } else if (numOfCreeps.builder < 2 && !spawn.spawning && spawn.room.energyAvailable >= 550) {
            for (let i = 0; i <= 2; i++) {
                let newBuilder = 'Builder' + Game.time;
                spawn.spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newBuilder,
                    {memory: {role: 'builder'}});
                console.log('Spawning new builder: ' + newBuilder);
            }
        } else if (numOfCreeps.upgrader < 2 && !spawn.spawning && spawn.room.energyAvailable >= 550) {
            for (let i = 0; i <= 2; i++) {
                let newUpgrader = 'Upgrader' + Game.time;
                spawn.spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newUpgrader,
                    {memory: {role: 'upgrader'}});
                console.log('Spawning new upgrader: ' + newUpgrader);
            }
        } else if (!spawn.spawning && numOfCreeps.harvester <= 1 || numOfCreeps.builder === 0 || numOfCreeps.upgrader === 0) {
            console.log("downgrade to stage 1");
            stage1.run(spawn, numOfCreeps);
        }

        buildBase.run(spawn);
    }
}
module.exports = stage2;