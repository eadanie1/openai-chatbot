type BotMessage = string;

export type message = string;

export interface State {
  messages: BotMessage[];
}

export type SetStateFunc = (state: State) => void;