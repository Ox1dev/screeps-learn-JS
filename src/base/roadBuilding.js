const roadBuilding = {
    run: (room, levelController, x, y, numOfExtensions) => {
        if (levelController >= 2  && numOfExtensions >= 5) {
            room.createConstructionSite(x + 1, y, STRUCTURE_ROAD);
            room.createConstructionSite(x, y + 1, STRUCTURE_ROAD);
            room.createConstructionSite(x - 1, y, STRUCTURE_ROAD);
            room.createConstructionSite(x, y - 1, STRUCTURE_ROAD);
        }
        if (levelController >= 3 && numOfExtensions >= 10) {
            console.log(levelController, " and 3 ", numOfExtensions);

            const centerX = x;
            const centerY = y;
            const radius = 3; // ромб 4*4
            for (let dx = -radius; dx <= radius; dx++) {
                for (let dy = -radius; dy <= radius; dy++) {
                    if (Math.abs(dx) + Math.abs(dy) === radius) {
                        room.createConstructionSite(centerX + dx, centerY + dy, STRUCTURE_ROAD);
                        console.log('road at', centerX + dx, centerY + dy);
                    }
                }
            }
        }
        if (levelController >= 4 && numOfExtensions >= 20) {

            room.createConstructionSite(x + 4, y - 1, STRUCTURE_ROAD);
            let startY = y - 2;
            for(let startX = x + 5; startX >= x + 2; startX--) {
                if (startY >= y - 5) {
                    room.createConstructionSite(startX, startY, STRUCTURE_ROAD);
                    console.log('build road at x,', startX, 'y', startY);
                }
                startY--;
            }
            room.createConstructionSite(x + 1, y - 4, STRUCTURE_ROAD);

            room.createConstructionSite(x - 1, y - 4, STRUCTURE_ROAD);
            startY = y - 5;
            for(let startX = x - 2; startX >= x - 5; startX--) {
                if (startY <= y - 2) {
                    room.createConstructionSite(startX, startY, STRUCTURE_ROAD);
                    console.log('build road at x,', x, 'y', y);
                }
                startY++
            }
            room.createConstructionSite(x - 4, y - 1, STRUCTURE_ROAD);
        }
        if (levelController >= 5 && numOfExtensions >= 30) {
            room.createConstructionSite(x - 4, y + 1, STRUCTURE_ROAD);
            let startY = y + 2;
            for (let startX = x - 5; startX <= x - 2; startX++) {
                if (startY <= y + 5) {
                    room.createConstructionSite(startX, startY, STRUCTURE_ROAD);
                    console.log('build road at x,', startX, 'y', startY);
                }
                startY++
            }
            room.createConstructionSite(x - 1, y + 4, STRUCTURE_ROAD);

            room.createConstructionSite(x + 1, y + 4, STRUCTURE_ROAD);
            startY = y + 5;
            for(let startX = x + 2; startX <= x + 5; startX++) {
                if (startY >= y + 2) {
                    room.createConstructionSite(startX, startY, STRUCTURE_ROAD);
                    console.log('build road at x,', startX, 'y', startY);
                }
                startY--
            }
            room.createConstructionSite(x + 4, y + 1, STRUCTURE_ROAD);
        }
    }
}

module.exports = roadBuilding;