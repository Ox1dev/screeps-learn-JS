const extensionBuilding = {
    run: function(room, levelController, x, y) {
        if (levelController >= 2) {
            checkCellAndCreateExtensionConstructionSite(x + 2, y)
            checkCellAndCreateExtensionConstructionSite(x + 1, y + 1)
            checkCellAndCreateExtensionConstructionSite(x, y + 2)
            checkCellAndCreateExtensionConstructionSite(x - 1, y + 1)
            checkCellAndCreateExtensionConstructionSite(x - 2, y)
        }
        if (levelController >= 3) {
            checkCellAndCreateExtensionConstructionSite(x - 1, y - 1)
            checkCellAndCreateExtensionConstructionSite(x, y - 2)
            checkCellAndCreateExtensionConstructionSite(x + 1, y - 1)
            checkCellAndCreateExtensionConstructionSite(x + 2, y - 2)
            checkCellAndCreateExtensionConstructionSite(x + 3, y - 1)
        }
        if (levelController >= 4) {
            checkCellAndCreateExtensionConstructionSite(x + 4, y - 2)
            checkCellAndCreateExtensionConstructionSite(x + 3, y - 2)
            checkCellAndCreateExtensionConstructionSite(x + 3, y - 3)
            checkCellAndCreateExtensionConstructionSite(x + 2, y - 3)
            checkCellAndCreateExtensionConstructionSite(x + 2, y - 4)
            checkCellAndCreateExtensionConstructionSite(x + 1, y - 3)
            checkCellAndCreateExtensionConstructionSite(x - 1, y - 3)
            checkCellAndCreateExtensionConstructionSite(x - 2, y - 4)
            checkCellAndCreateExtensionConstructionSite(x - 2, y - 3)
            checkCellAndCreateExtensionConstructionSite(x - 3, y - 3)
        }
        if (levelController >= 5) {
            checkCellAndCreateExtensionConstructionSite(x - 3, y - 2)
            checkCellAndCreateExtensionConstructionSite(x - 4, y - 2)
            checkCellAndCreateExtensionConstructionSite(x - 3, y - 1)
            checkCellAndCreateExtensionConstructionSite(x - 2, y - 2)
            checkCellAndCreateExtensionConstructionSite(x - 3, y + 1)
            checkCellAndCreateExtensionConstructionSite(x - 4, y + 2)
            checkCellAndCreateExtensionConstructionSite(x - 3, y + 2)
            checkCellAndCreateExtensionConstructionSite(x - 3, y + 3)
            checkCellAndCreateExtensionConstructionSite(x - 2, y + 3)
            checkCellAndCreateExtensionConstructionSite(x - 2, y + 4)
        }
        if (levelController >= 6) {
            checkCellAndCreateExtensionConstructionSite(x - 1, y + 3)
            checkCellAndCreateExtensionConstructionSite(x - 2, y + 2)
            checkCellAndCreateExtensionConstructionSite(x + 1, y + 3)
            checkCellAndCreateExtensionConstructionSite(x + 2, y + 4)
            checkCellAndCreateExtensionConstructionSite(x + 2, y + 3)
            checkCellAndCreateExtensionConstructionSite(x + 3, y + 3)
            checkCellAndCreateExtensionConstructionSite(x + 3, y + 2)
            checkCellAndCreateExtensionConstructionSite(x + 4, y + 2)
            checkCellAndCreateExtensionConstructionSite(x + 3, y + 1)
            checkCellAndCreateExtensionConstructionSite(x + 2, y + 2)
        }

        function checkCellAndCreateExtensionConstructionSite(x, y) {
            if (isCellEmpty(room, x, y)) {
                room.createConstructionSite(x, y, STRUCTURE_EXTENSION)
                console.log('build extension at ', x, ' ',  y)
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

module.exports = extensionBuilding;