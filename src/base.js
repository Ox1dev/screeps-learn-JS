var base = {
    run: function(spawn) {
        var levelController = spawn.room.controller.level;
        var x = spawn.pos.x;
        var y = spawn.pos.y;

        if (isCellEmpty) {
            if (levelController === 1) {
                checkCellAndCreateExtensionConstructionSite(x + 2, y)
                checkCellAndCreateExtensionConstructionSite(x, y - 2)
                checkCellAndCreateExtensionConstructionSite(x, y + 2)
                checkCellAndCreateExtensionConstructionSite(x - 2, y)
                checkCellAndCreateExtensionConstructionSite(x - 4, y)
            } else if (levelController === 2) {
                checkCellAndCreateExtensionConstructionSite(x + 2, y - 2)
                checkCellAndCreateExtensionConstructionSite(x + 2, y + 2)
                checkCellAndCreateExtensionConstructionSite(x - 2, y + 2)
                checkCellAndCreateExtensionConstructionSite(x - 2, y - 2)
                checkCellAndCreateExtensionConstructionSite(x + 4, y)
            }
        }

        function checkCellAndCreateExtensionConstructionSite(x, y) {
            if (isCellEmpty(spawn.room, x, y)) {
                spawn.room.createConstructionSite(x, y, STRUCTURE_EXTENSION)
                console.log('Created construction site at ' + x + ', ' + y)
            }
        }

        function isCellEmpty(room, x, y) {
            // Проверяем, что находится на клетке
            const objects = room.lookAt(x, y);
        
            // Проверяем, нет ли структур, строительных площадок или крипов
            const isCellEmpty = objects.every(obj => {
                return (
                    obj.type !== 'structure' && // Нет структур
                    obj.type !== 'constructionSite' && // Нет строительных площадок
                    obj.type !== 'creep' // Нет крипов
                );
            });
        
            // Проверяем, что клетка не является стеной
            const terrain = room.getTerrain();
            const terrainType = terrain.get(x, y);
            return isCellEmpty && terrainType !== TERRAIN_MASK_WALL;
        }
    }
}
module.exports = base