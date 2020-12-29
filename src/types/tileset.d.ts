import {Tile} from "./tile";
import {Size} from "./size";

export interface Tileset {
    name: string;
    image: string;
    readonly tiles : Array<Tile>;
    // terrains : Array<Terrain>;
    tileCount: number;
    nextTileId: number;
    tileWidth: number;
    tileHeight: number;
    tileSize: Size;
    readonly imageWidth: number;
    readonly imageHeight: number;
    readonly imageSize: Size;
    readonly tileSpacing: number;
    readonly margin: number;
    // objectAlignment: Alignment;
    // tileOffset: point;
    // orientation: Orientation;
    // backgroundColor: color;
    readonly isCollection: boolean;
    selectedTiles: Array<Tile>;
}
