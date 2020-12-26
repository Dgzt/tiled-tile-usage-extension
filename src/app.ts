const actionName = 'TileUsageAction';

const action = tiled.registerAction(actionName, () => tiled.log('Hello World'));
action.text = 'Tile Usage';

tiled.extendMenu('Edit', [
    { action: actionName },
    { separator: true }
]);
