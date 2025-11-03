const extensionBuilding = require('@/base/extensionBuilding');
const roadBuilding = require('@/base/roadBuilding');

const baseDeployment = {
    run: function(spawn) {
        let levelController = spawn.room.controller.level;
        let x = spawn.pos.x;
        let y = spawn.pos.y;
        extensionBuilding.run(spawn, levelController, x, y);
        roadBuilding.run(spawn, levelController, x, y);
    }
}
module.exports = baseDeployment