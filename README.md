# CamouflageJS Frontend

**CamouflageJS Frontend** is a user-friendly web interface designed to work with the backend API for obfuscating JavaScript code. This project provides a seamless way to interact with the obfuscation API, offering developers an intuitive experience to secure their JavaScript code.

---

## Features

- **Interactive UI**: Upload or input JavaScript code directly through the web interface.
- **Real-Time Results**: Obfuscate code and receive results instantly via the connected backend API.
- **Customizable Options**: Choose from various obfuscation configurations provided by the backend.
- **Secure Integration**: Leverages the backend server to handle obfuscation securely.

---

## Requirements

To run CamouflageJS Frontend, ensure your environment has the following:

- **Node.js**: v14 or later
- **NPM**: v6 or later
- **CamouflageJS Backend**: Ensure the backend server is running and accessible.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itz-rajkeshav/Camouflagejs.git
   cd Camouflagejs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the API endpoint:
   Update the API base URL in the frontend configuration file (e.g., `src/config.js`) to point to your backend server:
   ```javascript
   export const API_BASE_URL = 'http://localhost:3000';
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

By default, the frontend runs on `http://localhost:3000`. You can modify the port in the configuration file if needed.

---

## Backend Obfuscation Options

The frontend communicates with the backend API, which uses the following obfuscation options:

```javascript
 const options = {
            compact:true,
            debugProtection:false,
            log:false,
            renameGlobals:true,
            identifierNamesGenerator: 'hexadecimal',
            identifiersPrefix: 'obf_',
            ignoreImports:true,
            numbersToExpressions:true,
            optionPreset:'high-obfuscation',
            stringArray:true,
            stringArrayEncoding: ['base64'],
            transformObjectKeys:true,
            unicodeEscapeSequence: false
        }
```

These options can be customized in the backend to fit your security and performance needs.

---

## Usage

1. **Access the Frontend**: Open the application in your browser after starting the development server.
2. **Input Code**: Paste your JavaScript code into the provided input field or upload a `.js` file.
3. **Customize Options**: (Optional) Select obfuscation options via the UI.
4. **Obfuscate**: Click the "Convert code" button to send the code to the backend and receive the obfuscated result.
5. **Download**: Save the obfuscated code to your local system if needed.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---


