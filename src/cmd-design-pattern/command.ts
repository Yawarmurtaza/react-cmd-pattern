export interface ICommand{
    name: string;
    execute(...arg: any) : any;
}

export class OpenUrlCommand implements ICommand{
    name: string = "openUrl"
    execute(...arg: any) : void {
        console.log(`${this.name} - ${arg}`);
    }
}

export class SendMessageCommand implements ICommand{

    name: string = "sendMessage"
    execute(...arg: any) : void {
        console.log(`${this.name} - ${arg}`);
    }
}

export class CommandManager{
    /**
     * A mapper between command name and the command.
     */
    commands: Record<string, ICommand> = {};
    
    commandNames: string[] = [];

    registerCommand(name: string, command: ICommand) : void {
        this.commands[name]= command;
        this.commandNames.push(name);
    }

    registerCommands(commands: Array<ICommand>) : void {
        commands.forEach(c => {
            this.commands[c.name] = c;
            this.commandNames.push(c.name);
        });

        console.log(this.commands);
    }

    executeCommand(command: string | ICommand, ...args: any){
        if(typeof command === "string"){
            this.commands[command].execute(args);
        }
        else{
            command.execute(args);
        }
    }

    executeAllRegisteredCommands() : void {
        this.commandNames.forEach(n => {
            this.commands[n].execute();
        });
    }
}

export class UIEventHandler_v2 {
    constructor(public commandManager: CommandManager){}
    handleAction(command: string| ICommand, arg: string) : void {
        this.commandManager.executeCommand(command, arg);
    }
}

