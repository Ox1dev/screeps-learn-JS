const stage = require('@/stages/stageLvl')
const roleManager = require('@/roles/roleManager')

module.exports.loop = function () {
    let spawn = Game.spawns['Spawn1'];
    roleManager.run();
    stage.run(spawn);
}