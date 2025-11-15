const stage1 = require('@/stages/stage1');
const stage2 = require('@/stages/stage2');
const stage3 = require('@/stages/stage3');
const stage4 = require('@/stages/stage4');
const stage5 = require('@/stages/stage5');
const stage6 = require('@/stages/stage6');

const stageLvl = {
    run: function(spawn) {
        const controllerLvl = spawn.room.controller.level;
        let numOfHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester').length;
        let numOfBuilders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder').length;
        let numOfUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader').length;
        let numOfHaulers = _.filter(Game.creeps, (creep) => creep.memory.role === 'hauler').length;
        let numOfCreeps = {'harvester': numOfHarvesters, 'builder': numOfBuilders, 'upgrader': numOfUpgraders,
            'hauler': numOfHaulers};
        let numOfExtensions = spawn.room.find(FIND_MY_STRUCTURES, { filter:
                { structureType: STRUCTURE_EXTENSION }}).length;

        if (controllerLvl === 1) {
            stage1.run(spawn, numOfCreeps);
        } else if (controllerLvl === 2) {
            stage2.run(spawn, numOfCreeps);
        } else if (controllerLvl === 3 && numOfExtensions >= 5) {
            stage3.run(spawn, numOfCreeps);
        } else if (controllerLvl === 4 && numOfExtensions >= 10) {
            stage4.run(spawn, numOfCreeps);
        } else if (controllerLvl === 5 && numOfExtensions >= 20) {
            stage5.run(spawn, numOfCreeps);
        } else if (controllerLvl === 6 && numOfExtensions >= 30) {
            stage6.run(spawn, numOfCreeps);
        }
    }
};

module.exports = stageLvl;
