interface TileLayer extends Layer{

    width: number;
    height: number;
    size: Size;

    tileAt(x: number, y: number): Tile;
}
