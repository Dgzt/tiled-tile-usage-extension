import {TileMap} from "./tile-map";
import {Point} from "./point";

interface Layer {
    name: string;
    opacity: number;
    visible: boolean;
    locked: boolean;
    offset: Point;
    map: TileMap;
    selected: boolean;
    readonly isTileLayer: boolean;
    readonly isObjectLayer: boolean;
    readonly isGroupLayer: boolean;
    readonly isImageLayer: boolean;
}
