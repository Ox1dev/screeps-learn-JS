const harvester = require('@/roles/harvester');
const builder = require('@/roles/builder');
const upgrader = require('@/roles/upgrader');

let roleManager = {
    run() {
        for(let name in Game.creeps) {
            let creep = Game.creeps[name];
            if(creep.memory.role === 'harvester') {
                harvester.run(creep);
            }
            if(creep.memory.role === 'builder') {
                builder.run(creep);
            }
            if(creep.memory.role === 'upgrader') {
                upgrader.run(creep);
            }
        }
    }
}
module.exports = roleManager;