What is a Browser?
A browser is a software application that allows users to access and view websites on the internet. 
It retrieves web pages from servers and displays them in a readable and interactive format.
-------------------------------------------------------------------
Examples of Browsers
Google Chrome
Mozilla Firefox
Microsoft Edge
Safari
------------------------------------
What Does a Browser Do?
Sends request to a web server when you enter a URL.
Receives HTML, CSS, and JavaScript files.
Renders (displays) the webpage on your screen.
Executes JavaScript to make the page interactive.
--------------------------------------------------
Key Features
Supports HTML, CSS, JavaScript
Provides Web APIs (DOM, Fetch API, LocalStorage)
Has a JavaScript Engine (like V8 in Chrome)
Ensures security (sandboxing, HTTPS support)

====================================================================
What is Node.js?
Node.js is a JavaScript runtime environment that allows you to run JavaScript outside the browser, mainly on the server side.
It is built on Chrome’s V8 JavaScript engine and is used to build backend applications, APIs, and real-time systems.
--------------------------------------------------------
Why Node.js is Used?
Build backend servers
Create REST APIs
Handle database operations
Build real-time apps (chat apps, live streaming)
Work with file system
------------------------------------------------------
 Key Features
 Fast (uses V8 engine)
 Non-blocking / Asynchronous
 NPM (Node Package Manager) – largest package ecosystem
Access to File System
Can create web servers using http module
-----------------------------------------------------
Simple Example
const http = require('http');

http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
}).listen(3000);
