
export function validator(message, actionProvider) {
  const trimmedMessage = message.trim();
      
  if (trimmedMessage.length < 3) {
    actionProvider.handleInvalidInput(
      "Input must be at least 3 characters long."
    );
  } else if (!/^[a-zA-Z]/.test(trimmedMessage)) {
    actionProvider.handleInvalidInput("Input must start with a letter.");
  } else {
    actionProvider.handleValidInput(trimmedMessage);
  }
}