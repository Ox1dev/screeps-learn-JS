const containerBuilding = {
    run: function(room) {
        let sources = room.find(FIND_SOURCES);
        let x = sources[0].pos.x
        let y = sources[0].pos.y
        let cells= [];
        let containersNum = 0;

        if (isCellEmpty(x + 1, y) === true && containersNum <= 2) {
            cells.push([x + 1, y]);
            if (containersNum === 2) {
                createContainerConstructionSite(cells[1])
            }
            containersNum++;

        }
        if (isCellEmpty(x + 1, y - 1) === true && containersNum <= 2) {
            cells.push([x + 1, y - 1]);
            if (containersNum === 2) {
                createContainerConstructionSite(cells[1])
            }
            containersNum++;

        }
        if (isCellEmpty( x, y - 1) === true && containersNum <= 2) {
            cells.push([x, y - 1]);
            if (containersNum === 2) {
                createContainerConstructionSite(cells[1])
            }
            containersNum++;

        }
        if (isCellEmpty(x - 1, y - 1) === true && containersNum <= 2) {
            cells.push([x - 1, y - 1]);
            if (containersNum === 2) {
                createContainerConstructionSite(cells[1])
            }
            containersNum++;

        }
        if (isCellEmpty(x - 1, y) === true && containersNum <= 2) {
            cells.push([x - 1, y]);
            if (containersNum === 2) {
                createContainerConstructionSite(cells[1])
            }
            containersNum++;
        }
        if (isCellEmpty(x - 1, y + 1) === true && containersNum <= 2) {
            cells.push([x - 1, y + 1]);
            if (containersNum === 2) {
                createContainerConstructionSite(cells[1])
            }
            containersNum++;

        }
        if (isCellEmpty( x, y + 1) === true && containersNum <= 2) {
            cells.push([x, y + 1]);
            if (containersNum === 2) {
                createContainerConstructionSite(cells[1])
            }
            containersNum++;

        }
        if (isCellEmpty(x + 1, y + 1) === true && containersNum <= 2) {
            cells.push([x + 1, y + 1]);
            console.log(isCellEmpty(x + 1, y + 1))
            if (containersNum === 2) {
                createContainerConstructionSite(cells[1])
            }
            containersNum++;

        }

        function createContainerConstructionSite(cells) {
            room.createConstructionSite(cells[0], cells[1], STRUCTURE_CONTAINER)
            console.log('build container at ', cells[0], ' ',  cells[1])
        }

        function isCellEmpty(x, y) {
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
module.exports = containerBuilding;