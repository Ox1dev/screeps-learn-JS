const buildBase = require('@/base/baseDeployment');
const stage5 = require("@/stages/stage5");


const stage6 = {
    run: function (spawn, numOfCreeps) {
        if (numOfCreeps.harvester < 2 && !spawn.spawning && spawn.room.energyAvailable >= 2300) {
            for (let i = 0; i <= 2; i++) {
                let newHarvester = 'Harvester' + Game.time;
                spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,
                        WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                        CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,
                        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
                    newHarvester,
                    {memory: {role: 'harvester'}});
                console.log('Spawning new harvester: ' + newHarvester);
            }
        } else if (numOfCreeps.builder < 2 && !spawn.spawning && spawn.room.energyAvailable >= 2300) {
            for (let i = 0; i <= 2; i++) {
                let newBuilder = 'Builder' + Game.time;
                spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,
                        WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                        CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,
                        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newBuilder,
                    {memory: {role: 'builder'}});
                console.log('Spawning new builder: ' + newBuilder);
            }
        } else if (numOfCreeps.upgrader < 2 && !spawn.spawning && spawn.room.energyAvailable >= 2300) {
            for (let i = 0; i <= 2; i++) {
                let newUpgrader = 'Upgrader' + Game.time;
                spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,
                        WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                        CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,
                        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                        MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newUpgrader,
                    {memory: {role: 'upgrader'}});
                console.log('Spawning new upgrader: ' + newUpgrader);
            }
        } else if (!spawn.spawning && numOfCreeps.harvester <= 1 || numOfCreeps.builder === 0 || numOfCreeps.upgrader === 0) {
            console.log("downgrade to stage 5");
            stage5.run(spawn, numOfCreeps);
        }

        buildBase.run(spawn);
    }
}
module.exports = stage6;