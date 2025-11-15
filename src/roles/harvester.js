const harvester = {

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
            let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        } else {
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (
                            structure.structureType === STRUCTURE_CONTAINER) > 0;
                }
            });
            if (targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else {
                const constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);
                constructionSite = constructionSites[0];
                if(creep.build(constructionSite) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};

module.exports = harvester;