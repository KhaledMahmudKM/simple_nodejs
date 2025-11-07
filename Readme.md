# Readme

This is a demonstration project that renders a simple web page. It also a simple api server. Node.js and express.js is used.

### 1. Folder Structure
simple_nodejs/
├── server.js
├── package.json
├── quotes.txt
└── public/
    ├── index.html
    ├── style.css
    └── script.js

### 2. Install packages
Run the following from the folder where `package.json` resides.
```
npm install
```

### 3. Run the App
Run the following from top of the folder where `server.js` file resides.
```
node server.js
```

### 4. Access the Server
- `<ipaddress>:3000` will render the top page of the server. 
- `<ipaddress>:3000/api` will return a JSON object with a random quotation.

