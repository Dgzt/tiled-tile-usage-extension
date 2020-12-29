const actionName = 'TileUsageAction';

const action = tiled.registerAction(actionName, () => {
    if (tiled.activeAsset.isTileMap) {
        const tileMap = tiled.activeAsset as TileMap;
        tiled.log(tileMap.tilesets.length.toString());
    } else {
        // TODO
    }
});
action.text = 'Tile Usage';

tiled.extendMenu('Map', [
    { action: actionName },
    { separator: true }
]);
