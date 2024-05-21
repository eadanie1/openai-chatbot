# OpenAI Chatbot Server

This project is a simple Express.js server that provides an endpoint for interacting with the OpenAI Chatbot API. It allows clients to send messages to the server, which in turn sends them to the OpenAI API for processing and returns the generated response.

## Prerequisites

Before running the server, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://https://github.com/eadanie1/openai-chatbot.git
```

2. Navigate to the project directory:

```bash
cd openai-chatbot
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Define the `OPENAI_API_KEY` variable in the `.env` file and set it to your OpenAI API key.

## Usage

1. Start the backend server:

```bash
npm run devstart
```

The backend server will start running on port 3000 by default.

2. Start the frontend Vite server:

```bash
npm run dev
```

The frontend server will start running on port 5173 by default.

3. You can access the backend API at http://localhost:3000.

4. Access the frontend UI/chatbot at http://localhost:5173.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
