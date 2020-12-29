interface ObjectGroup {
    readonly objects: Array<MapObject>;
    readonly objectCount: number;
    color: any;

    objectAt(index: number): MapObject;
    removeObjectAt(index: number): void;
    removeObject(object: MapObject): void;
    insertObjectAt(index: number, object: MapObject): void;
    addObject(object: MapObject): void;
}
