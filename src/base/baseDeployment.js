const extensionBuilding = require('@/base/extensionBuilding');
const roadBuilding = require('@/base/roadBuilding');
const containerBuilding = require('@/base/containerBuilding');

const baseDeployment = {
    run: function(spawn) {
        let levelController = spawn.room.controller.level;
        let room = spawn.room;
        let x = spawn.pos.x;
        let y = spawn.pos.y;
        let numOfExtensions = spawn.room.find(FIND_MY_STRUCTURES, { filter:
                { structureType: STRUCTURE_EXTENSION }}).length;

        extensionBuilding.run(room, levelController, x, y);
        roadBuilding.run(room, levelController, x, y, numOfExtensions);
        containerBuilding.run(room);
    }
}
module.exports = baseDeployment