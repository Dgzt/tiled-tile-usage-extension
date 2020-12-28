const actionName = 'TileUsageAction';

const action = tiled.registerAction(actionName, () => {
    if (tiled.activeAsset.isTileMap) {
        tiled.log('Tile map');
    } else {
        // TODO
    }
});
action.text = 'Tile Usage';

tiled.extendMenu('Map', [
    { action: actionName },
    { separator: true }
]);
