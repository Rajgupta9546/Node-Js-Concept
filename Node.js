Node.js is a runtime environment that allows you to run JavaScript outside the browser.
It is built on Google Chrome’s V8 JavaScript engine and is mainly used to build fast, scalable server-side applications.
Node.js uses an event-driven, non-blocking (asynchronous) architecture, which makes it efficient for handling multiple requests at the same time.

Example:
Using Node.js to create a simple server:

const http = require("http");

http.createServer((req, res) => {
  res.write("Hello from Node.js");
  res.end();
}).listen(3000);


In short: Node.js lets JavaScript work on the server, not just in the browser.
-------------------------------------------------------------------------------
  Where Node.js is Used

Real-time apps (chat apps)

REST APIs
Streaming services
Microservices
Backend for React / Angular / Vue apps
---------------------------------------------------
  Single-Threaded but Highly Scalable

Node.js runs on a single thread, but it can handle thousands of users.
It achieves this using asynchronous, non-blocking operations.
Long tasks do not block other requests.
