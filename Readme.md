# Readme

This is a demonstration project of `Node.js`. It uses simple `Node.js` + `Express` app that serves a static webpage and a `/api` route returning random quotes.

### 1. Folder Structure
```
simple_nodejs/
├── server.js
├── package.json
├── quotes.txt
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

### 2. Install packages
Run the following from the folder where `package.json` resides.
```
npm install
```

### 3. Run the App
Run the following from top of the folder where `server.js` file resides.
```
npm start
```
or
```
node server.js
```

### 4. Access the Server
- `<ipaddress>:3000` will render the top page of the server. 
- `<ipaddress>:3000/api` will return a JSON object with a random quotation.

