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

function showUsage(usageMap: Map<number, number>): void {
    let text = "";

    tiled.mapEditor.tilesetsView.selectedTiles.forEach((tile: Tile) => {
        const usage = usageMap.has(tile.id) ? usageMap.get(tile.id) : 0;
        text += tile.id + ". tile: " + usage + "\n";
    });
    tiled.alert(text, "Tile usage");
}

function actionCallback(): void {
    if (tiled.activeAsset.isTileMap) {
        const tileMap = tiled.activeAsset as TileMap;

        if (tiled.mapEditor.tilesetsView.selectedTiles.length > 0) {
            const tileLayers = getTileLayers(tileMap);

            if (tileLayers.length > 0) {
                const usageMap = new Map<number, number>();

                tileLayers.forEach((layer: TileLayer) => {
                    for (let i = 0; i < layer.width; ++i) {
                        for (let j = 0; j < layer.height; ++j) {
                            const tileId = layer.tileAt(i, j).id;
                            const value = usageMap.has(tileId) ? usageMap.get(tileId) : 0;
                            usageMap.set(tileId, value + 1);
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
