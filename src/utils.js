var utils = {
    run: function() {
        // for(var name in Game.rooms) {
        //     console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
        // }
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
    }
}
module.exports = utils;