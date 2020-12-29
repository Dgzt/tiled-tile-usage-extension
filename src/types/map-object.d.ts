interface MapObject {
    readonly id: number;
    shape: number;
    name: string;
    type: string;
    x: number;
    y: number;
    pos: Point;
    width: number;
    height: number;
    size: Size;
    rotation: number;
    visible: boolean;
    polygon: Array<Point>;
    text: string;
    font: Font;
    textAlignment: AlignmentEnum;
    wordWrap: boolean;
    textColor: any;
    tile: Tile;
    tileFlippedHorizontally: boolean;
    tileFlippedVertically: boolean;
    selected: boolean;
    readonly layer: ObjectGroup | null;
    readonly map: TileMap;
}
