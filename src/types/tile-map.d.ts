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
