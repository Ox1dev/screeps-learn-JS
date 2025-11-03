const builder = {

    run: function(creep) {

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() === 0) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        const constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);
			// compare current value hp of structure with max hp value
			const structuresToBeRepaired = creep.room.find(FIND_STRUCTURES, {
				filter: object => object.hits < object.hitsMax
			});

            if(creep.room.controller.ticksToDowngrade > 100 && constructionSites.length) {
				constructionSite = constructionSites[0];
				if(creep.build(constructionSite) === ERR_NOT_IN_RANGE) {
					creep.moveTo(constructionSite, {visualizePathStyle: {stroke: '#ffffff'}});
				}
            } else if(creep.room.controller.ticksToDowngrade > 100 && structuresToBeRepaired.length > 0) {
				// put the most damaged structure on the top
				structuresToBeRepaired.sort((a,b) => a.hits - b.hits);

				if(creep.repair(structuresToBeRepaired[0]) === ERR_NOT_IN_RANGE) {
					creep.moveTo(structuresToBeRepaired[0]);
				}
			} else {
				if(creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
					creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
					creep.say('nothing to build');
					creep.say('⚡ upgrade');
				}
			}
	    } else {
	        let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = builder;