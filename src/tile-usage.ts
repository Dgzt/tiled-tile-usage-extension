const actionName = 'TileUsageAction';

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
        const usageMap = new Map<number, number>();

        if (tileMap.currentLayer.isTileLayer) {
            if (tiled.mapEditor.tilesetsView.selectedTiles.length > 0) {
                const tileLayer = tileMap.currentLayer as TileLayer;

                for (let i = 0; i < tileLayer.width; ++i) {
                    for (let j = 0; j < tileLayer.height; ++j) {
                        const tileId = tileLayer.tileAt(i, j).id;
                        const value = usageMap.has(tileId) ? usageMap.get(tileId) : 0;
                        usageMap.set(tileId, value + 1);
                    }
                }

                showUsage(usageMap);
            } else {
                tiled.alert("No tile selected in the tileset editor!");
            }
        } else {
            tiled.alert("The selected layer is not tile layer!");
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
