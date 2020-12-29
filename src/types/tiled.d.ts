interface Tiled {

    activeAsset : Asset;

    alert(text: string, title?: string): void;

    extendMenu(id: string, items: Array<any> | any) : void;

    log(text: string);

    prompt(label: string, text?: string, title?: string): string;

    registerAction(id: string, callback: () => void): Action;
}
