const actionName = 'TileUsageAction';

const action = tiled.registerAction(actionName, () => tiled.log('Hello World'));
action.text = 'Tile Usage';

tiled.extendMenu('Map', [
    { action: actionName },
    { separator: true }
]);
