const actionName = 'TileUsageAction';

function printUsage(tileLayer: TileLayer, tilesets: Array<Tileset>, usageMap: Map<number, number>): void {
    tilesets.forEach((tileset: Tileset) => {
        const tileColumnNum = tileset.imageWidth / tileset.tileWidth;

        let columnNum = 1;
        let rowStr = "";
        tileset.tiles.forEach((tile: Tile) => {
            const tileUsae = usageMap.has(tile.id) ? usageMap.get(tile.id) : 0;
            rowStr += tileUsae + "\t";

            if (columnNum === tileColumnNum) {
                tiled.log(rowStr);
                columnNum = 1;
                rowStr = "";
            } else {
                ++columnNum;
            }
        });
    });
}

function actionCallback(): void {
    if (tiled.activeAsset.isTileMap) {
        const tileMap = tiled.activeAsset as TileMap;
        const usageMap = new Map<number, number>();

        if (tileMap.currentLayer.isTileLayer) {
            const tileLayer = tileMap.currentLayer as TileLayer;

            for (let i = 0; i < tileLayer.width; ++i) {
                for (let j = 0; j < tileLayer.height; ++j) {
                    const tileId = tileLayer.tileAt(i, j).id;
                    const value = usageMap.has(tileId) ? usageMap.get(tileId) : 0;
                    usageMap.set(tileId, value+1);
                }
            }

            printUsage(tileLayer, tileMap.tilesets, usageMap);
        }
    } else {
        // TODO
    }
}

const action = tiled.registerAction(actionName, actionCallback);
action.text = 'Tile Usage';

tiled.extendMenu('Map', [
    { action: actionName },
    { separator: true }
]);
