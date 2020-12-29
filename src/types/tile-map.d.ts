import {Tileset} from "./tileset";
import {Layer} from "./layer";
import {StaggerAxisEnum} from "./stagger-axis.enum";
import {OrientationEnum} from "./orientation.enum";
import {RenderOrderEnum} from "./render-order.enum";
import {StaggerIndexEnum} from "./stagger-index.enum";
import {LayerDataFormatEnum} from "./layer-data-format.enum";
import {SelectedArea} from "./selected-area";
import {Size} from "./size";

interface TileMap {
    width: number;
    height: number;
    readonly size: Size;
    tileWidth: number;
    tileHeight: number;
    infinite: boolean;
    hexSideLength: number;
    staggerAxis: StaggerAxisEnum;
    orientation: OrientationEnum;
    renderOrder: RenderOrderEnum;
    staggerIndex: StaggerIndexEnum;
    // backgroundColor: color;
    layerDataFormat: LayerDataFormatEnum;
    readonly layerCount: number;
    tilesets: Array<Tileset>;
    selectedArea: SelectedArea;
    currentLayer: Layer;
    selectedLayers: Array<Layer>;
    // selectedObjects : Array<MapObject>;
}
