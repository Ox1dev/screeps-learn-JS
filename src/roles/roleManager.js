const hauler = require('@/roles/hauler');
const builder = require('@/roles/builder');
const upgrader = require('@/roles/upgrader');
const harvester = require('@/roles/harvester');

let roleManager = {
    run() {
        for(let name in Game.creeps) {
            let creep = Game.creeps[name];
            if(creep.memory.role === 'hauler') {
                hauler.run(creep);
            }
            if(creep.memory.role === 'builder') {
                builder.run(creep);
            }
            if(creep.memory.role === 'upgrader') {
                upgrader.run(creep);
            }
            if(creep.memory.role === 'harvester') {
                harvester.run(creep);
            }
        }
    }
}
module.exports = roleManager;