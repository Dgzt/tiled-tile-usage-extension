interface Tiled {

    activeAsset : Asset;

    extendMenu(id: string, items: Array<any> | any) : void;

    log(text: string);

    registerAction(id: string, callback: () => void): Action;
}
