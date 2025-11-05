const stage = require('@/stages/stageLvl')
const roleManager = require('@/roles/roleManager')
const buildBase = require('@/base/baseDeployment')

module.exports.loop = function () {
    let spawn = Game.spawns['Spawn1'];
    roleManager.run();
    stage.run(spawn);
    buildBase.run(spawn);
}