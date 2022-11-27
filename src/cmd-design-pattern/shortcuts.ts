export class ShortcutClass{
    openUrl(url: string){
        console.log(`Open url: ${url}`);
    }

    shortenUrl(url: string){
        console.log(`shorten url: ${url}`);
    }

    sendMessage(message: string){
        console.log(`sendMessage: ${message}`);
    }

    translateText(originalText :string ){
        console.log(`translateText ${originalText}`);
    }

    downloadFile(fileUrl: string){
        console.log(`downloadFile ${fileUrl}`);
    }
}

export class UIEventHandler{
    constructor(public shortcut: ShortcutClass){}

    /**
     * Executes received method with its args.
     * @param action ShortcutClass methods generated through Methods utility type.
     * @param arg Arguments for the method in ShortcutClass.
     */
    handleAction(action: ShortcutMethods, arg: string){
        this.shortcut[action](arg);
    }
}

// "openUrl" | "shortenUrl" | "sendMessage" | "translateText" | "downloadFile"
type ShortcutMethods = Methods<ShortcutClass>;

/**
 * Uses TypeScript mapped types. Learn more: https://javascript.plainenglish.io/using-typescript-mapped-types-like-a-pro-be10aef5511a
 */
type Methods<TClassWithMethodsDefinitions> = {
    [P in keyof TClassWithMethodsDefinitions]: TClassWithMethodsDefinitions[P] extends (...args: any) => void ? P : never;
}[keyof TClassWithMethodsDefinitions];


export class Runner{
    Execute(){
        const eventHandler = new UIEventHandler(new ShortcutClass());

        eventHandler.handleAction("openUrl", "http://microsoft.com/");
    }
}
