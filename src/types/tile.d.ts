interface Tile {
    readonly id: number;
    readonly width: number;
    readonly height: number;
    readonly size: Size;
    type: string;
    imageFileName: string;
    // terrain: Terrains;
    probability: number;
    // objectGroup : ObjectGroup;
    // frames : Array<frame>;
    readonly animated: boolean;
    readonly tileset: Tileset;
}
