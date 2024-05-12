# Chroma Flow

Flowing Conversations in Color allows individuals to seamlessly join ongoing discussions, picking up where others left off, while visually perceiving the emotional context of the conversation. By employing emotion detection algorithms, we aim to create an empathetic environment that fosters deeper connections and understanding among participants.

This project utilized a text classification model, [roberta-base-go_emotions](https://huggingface.co/SamLowe/roberta-base-go_emotions), on [huggingface](https://huggingface.co/).

## Get Started

- An [API key](https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token) is need in order to query the model API used in this project.
- Check [`package.json`](https://github.com/cyeeee/affective-socket/blob/main/package.json#L12C3-L12C17) for dependencies that need to be installed to run the code.
- In the termial, type `node .\server.js` to start the server.
- Browse to [http://localhost:3000/](http://localhost:3000/).
