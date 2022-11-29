# Networking
### Lil' Table of Contents
* [API](/Week_2/networking.md#api)
* [DNS](/Week_2//networking.md#dns-domain-name-system)
* [HTTP](/Week_2/networking.md#http)
* [TCP](/Week_2/networking.md#tcp---transition-control-protocol)
* [URL](/Week_2/networking.md#url-uniform-resource-locator)

&nbsp;
***

&nbsp;
## API
APIs are a set of requirements that govern how one application can talk to another. They achieve this by 'exposing' some of a program's internal functions to the outside world, in a limited fashion. The limit outside access to a specific set of features, often ones that handle some sort of data request. 

APIs clearly define exactly how a program will interact with the rest of the software world. Saving time and resources.

<a href='https://readwrite.com/api-defined/'>...Read More</a>

&nbsp;
## DNS (Domain Name System)
The DNS is a database responsible for turning domain names into IP addresses. Since every device and page has its own IP address, DNS makes it possible to input words, in the form of domain names/URLs into the browser, without having to know every websites IP address.

&nbsp;
### **-- DNS Steps --**
 1. **DNS Recursor:** The DNS recursor/resolver, receives the query from the DNS client. Then it communicates with other DNS servers to find the right IP address. After the resolver retrieves the request from the client, the resolver acts like a client itself. As it does this, it makes queries that get sent to the next three DNS servers:.
 2. **Root Nameservers:** The root nameserver is designated for the internet's DNS root zone. Its job is to answer requests sent to it for records in the root zone. It answers requests by sending back a list of the authoritative nameservers that go with the correct TLD.
 3. **TLD Nameservers:** A TLD nameserver keeps the IP address of the second-level domain contained within the TLD name. It then releases the website’s IP address and sends the query to the domain’s nameserver.
 4. **Authoritative Nameservers:** An authoritative nameserver is what resolves and gives you the answer to your DNS query. There are two types of authoritative nameservers: a master/primary nameserver and secondary nameserver. The master server keeps the original copies of the zone records. The secondary server shares the DNS server load and acts as a backup if the master server fails.

&nbsp;
### **-- DNS Records Types --**
This is just a small subset of the available record types, but these are the most common.
 * `A`: most common; map a hostname to IP address (IPv4, 32-bit)
 * `NS`: *Name Server* - responsible for a DNS Zone
 * `MX`: *Mail Exchange* - record specifies where email gets sent
 * `CNAME`: *Canonical Name* - alias for another hostname
 * `AAAA`: similar to `A`, but uses IPv6, 128-bit


&nbsp;
## HTTP
HTTP is a protocol used to read and write "resources" (data) in a simple text-based manner. It started off as being mostly used for HTML documents, but today it's used for all sorts of documents, like JavaScript files, CSS, and anything else that our browser is capable of downloading (PDFs, etc.)

Request-response, text-based protocol.

<a href = 'https://www.w3.org/WhatIs.html'>What is HyperText?</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_flow'>HTTP Overview</a>

**PATH**: Resource the client wants to act on. The path is part of a [URL (Uniform Resource Locator)](#url).

**CRUD:** Create, Read, Update, Delete

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

```html
|- client -|           |--------- server ---------|


              ------>               ------->
browser        HTTP       server.js          database
              <------               <-------
```

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