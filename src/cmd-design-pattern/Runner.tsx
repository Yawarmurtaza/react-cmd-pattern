import { CommandManager, OpenUrlCommand, SendMessageCommand, UIEventHandler_v2 } from "./command";
import { Runner } from "./shortcuts";

export function Run(){
    new Runner().Execute();
}

export function Run_v2(){
    const manager : CommandManager = new CommandManager();
    manager.registerCommand("openUrl", new OpenUrlCommand());
    manager.registerCommand("sendMessage", new SendMessageCommand());

    const eventHandler = new UIEventHandler_v2(manager);
    eventHandler.handleAction("sendMessage", "Salaam!");
    eventHandler.handleAction(new OpenUrlCommand(), "http://intel.com/");

}