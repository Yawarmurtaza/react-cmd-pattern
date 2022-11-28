import internal from "stream";
import {
  CommandManager,
  ICommand,
  OpenUrlCommand,
  SendMessageCommand,
  UIEventHandler_v2,
} from "./command";
import { Runner } from "./shortcuts";

export function Run() {
  new Runner().Execute();
}

export function Run_v2() {
  const manager: CommandManager = new CommandManager();

  const commands: Array<ICommand> = [
    new OpenUrlCommand(),
    new SendMessageCommand(),
    new OpenUrlCommand(),
    new OpenUrlCommand(),
  ];

  manager.registerCommands(commands);

  // manager.registerCommand("openUrl", new OpenUrlCommand());
  // manager.registerCommand("sendMessage", new SendMessageCommand());

  const eventHandler = new UIEventHandler_v2(manager);
  eventHandler.handleAction("sendMessage", "Salaam!");
  eventHandler.handleAction(new OpenUrlCommand(), "http://intel.com/");
}

export function UnderstandDictionary() {
  const map: Record<number, string> = {};
  map[1] = "Yawar";
  map[2] = "Sujawal";
  map[0.112334] = "Hyderabad";
  const name: string = "Yawar";

  let data : string = "";

  for(const key in map){
    data += ` ${key} : ${map[key]}`;
  }

  

  return <div>{
   data
    }</div>;
}
