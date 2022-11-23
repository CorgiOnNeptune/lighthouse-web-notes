# Networking
### Lil' Table of Contents
* [HTTP](/Week_2/networking.md#http)
* [TCP](/Week_2/networking.md#tcp---transition-control-protocol)
* [URL](/Week_2/networking.md#url-uniform-resource-locator)

&nbsp;
***

&nbsp;
## HTTP
HTTP is a protocol used to read and write "resources" (data) in a simple text-based manner. It started off as being mostly used for HTML documents, but today it's used for all sorts of documents, like JavaScript files, CSS, and anything else that our browser is capable of downloading (PDFs, etc.)

Request-response, text-based protocol.

<a href = 'https://www.w3.org/WhatIs.html'>What is HyperText?</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_flow'>HTTP Overview</a>

**PATH**: Resource the client wants to act on. The path is part of a [URL (Uniform Resource Locator)](#url).

**METHOD**: What action will be performed. There are 9 HTTP request methods.
* `GET`: used to 'get' data from a server
* `POST`: usually used to create some new data
* `PUT`: generally used for editing existing data on the server
* `DELETE`: used to delete some existing data

**Status Code**: Messages sent back to the client from the server. These are some common ones:
* `200`: 'Everything went great'
* `201`: 'The request has succeeded and a new resource has been created'
* `404`: 'Resource not found'
* `500`: 'Server had an error'

Requests and responses both contain key-value based headers (eg: `Accept-Language: fr` || `Content-Type: text/html`)

&nbsp;
***

&nbsp;
## TCP - *Transition Control Protocol*
TCP is a specific type of protocol (aka guideline, standard, agreement) which is commonly used to structure the data and workflow of data over the network. 
TCP based communication alows two machines to establish an open channel for two-way data communication. 

&nbsp;
<img src="https://d.pr/i/lH328b+"/>

Just like with a phone call, there is always one side which dials a specific number to establish a connection to the other side. In computer networking, this number is as an IP Address. A computer can have many network-based applications running, much like how a company can have many different offices. For this reason, someone decided to effectively allow for specific phone number extensions. These are referred to as ports in computer networking.

&nbsp;
<img src="https://d.pr/i/xDRacM+"/>

&nbsp;
***

&nbsp;
## URL (Uniform Resource Locator)
<a href='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL'>What is a URL?</a>

### Anatomy of a URL
<img src='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL/mdn-url-all.png'/>

* Scheme aka Protocol
  * Usually HTTP or HTTPS (webpages), other schemes such as `mailto:` exist.
  * `://`
* Authority
  * Includes domain and port seperated by `:`. 
* Path
  * Aka path to resource on a web server.
* Parameters
  * Extra parameters provided to the server. Key/value pairs seperated by `&`. Commonly used to return search results and other user input.
* Anchor
  * Anchors to another part of the resource (webpage scrolling to the point the anchor is defined). The fragment identifer (after the `#`) is only used client-side for your browser to act on, it is not sent to the server.