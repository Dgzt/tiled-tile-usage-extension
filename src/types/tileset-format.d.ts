interface TilesetFormat {
    read(fileName: string): Tileset;
    write(tileset: Tileset, fileName: string): string;
}
