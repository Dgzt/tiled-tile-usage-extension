interface Tiled {

    readonly version: string;
    readonly platform: string;
    readonly arch: string;
    readonly actions: Array<string>;
    readonly menus: Array<string>;
    activeAsset : Asset | null;
    readonly openAssets: Array<any>;
    mapEditor: MapEditor;
    tilesetEditor: TilesetEditor;
    readonly tilesetFormats: Array<string>;
    readonly mapFormats: Array<string>;

    alert(text: string, title?: string): void;

    close(asset: Asset): boolean;

    confirm(text: string, title?: string): boolean;

    error(text: string, activated: () => void): void;

    executeCommand(name: string, inTerminal: boolean): void;

    extendMenu(id: string, items: Array<any> | any) : void;

    log(text: string);

    open(fileName: string): Asset | null;

    prompt(label: string, text?: string, title?: string): string;

    registerAction(id: string, callback: () => void): Action;

    registerMapFormat(shortName: string, mapFormat: any): void;

    registerTilesetFormat(shortName: string, tilesetFormat: any): void;

    registerTool(shortName: string, tool: any): any;

    reload(asset: Asset): Asset | null;

    tilesetFormat(shortName: string): TilesetFormat;

    trigger(action: string): void;

    warn(text: string, activated: () => void): void;
}
