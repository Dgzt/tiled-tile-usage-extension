const actionName = 'TileUsageAction';

function getTileLayers(tileMap: TileMap): Array<Layer> {
    const retArray = [];

    for (let i = 0; i < tileMap.layerCount; ++i) {
        const layer = tileMap.layerAt(i);

        if (layer.isTileLayer) {
            retArray.push(layer);
        }
    }

    return retArray;
}

function getTileNumPerLine(tile: Tile): number {
    const tileset = tile.tileset;
    return  tileset.imageWidth / tileset.tileWidth;
}

function getTilePositionX(tile: Tile): number {
    return tile.id % getTileNumPerLine(tile) + 1;
}

function getTilePositionY(tile: Tile): number {
    return Math.trunc(tile.id / getTileNumPerLine(tile)) + 1;
}

function showUsage(usageMap: Map<Tile, number>): void {
    let text = "";

    tiled.mapEditor.tilesetsView.selectedTiles.forEach((tile: Tile) => {
        const usage = usageMap.get(tile);
        text += tile.id + ". (" + getTilePositionX(tile) + " x " + getTilePositionY(tile) + ") tile: " + usage + "\n";
    });

    tiled.alert(text, "Tile usage");
}

function actionCallback(): void {
    if (tiled.activeAsset.isTileMap) {
        const tileMap = tiled.activeAsset as TileMap;

        if (tiled.mapEditor.tilesetsView.selectedTiles.length > 0) {
            const usageMap = new Map<Tile, number>();
            tiled.mapEditor.tilesetsView.selectedTiles.forEach(tile => usageMap.set(tile, 0));

            const tileLayers = getTileLayers(tileMap);
            if (tileLayers.length > 0) {

                tileLayers.forEach((layer: TileLayer) => {
                    for (let i = 0; i < layer.width; ++i) {
                        for (let j = 0; j < layer.height; ++j) {
                            const tile = layer.tileAt(i, j);
                            if (tile && usageMap.has(tile)) {
                                usageMap.set(tile, usageMap.get(tile) + 1);
                            }
                        }
                    }
                });

                showUsage(usageMap);
            } else {
                tiled.alert("No tile layer!");
            }
        } else {
            tiled.alert("No tile selected in the tileset editor!");
        }
    } else {
        tiled.alert("The active asset is not tile layer!");
    }
}

const action = tiled.registerAction(actionName, actionCallback);
action.text = 'Tile Usage';

tiled.extendMenu('Map', [
    { action: actionName },
    { separator: true }
]);
