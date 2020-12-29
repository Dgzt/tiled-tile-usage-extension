interface TileCollisionEditor {
    selectedObjects: Array<MapObject>;
    view: Array<MapView>;

    focusObject(object: MapObject): void;
}
