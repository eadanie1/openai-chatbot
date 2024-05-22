type BotMessage = string;

export type message = string;

export type SetStateFunc = (state: ChatbotState) => void;

export interface ChatbotState {
  messages: BotMessage[];
}