const hauler = {

    run: function(creep) {
        if(creep.memory.work && creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.work = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.work && creep.store.getFreeCapacity() === 0) {
	        creep.memory.work = true;
	        creep.say('⚡ work');
	    }
        if(!creep.memory.work) {
            let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType === STRUCTURE_CONTAINER &&
                        structure.store[RESOURCE_ENERGY] > 0;
                }
            });
            if(creep.withdraw(container, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(container, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        } else {
            let targets = creep.room.find(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return (
                            structure.structureType === STRUCTURE_EXTENSION ||
                            structure.structureType === STRUCTURE_SPAWN ||
                            structure.structureType === STRUCTURE_TOWER) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else if(creep.room.find(FIND_MY_CONSTRUCTION_SITES).length > 0) {
                let site = creep.room.find(FIND_MY_CONSTRUCTION_SITES).find(
                    constructionSite => constructionSite.progressTotal > 0);
                if (site) {
                    if (creep.build(site) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(site, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            } else {
                if(creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = hauler;