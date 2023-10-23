---
id: 049a36f1-718f-49bf-b607-e955c770b8bf
title: HTTP
description: A cheatsheet for HTTP
keywords: ["http"]
---

Table of contents
[[toc]]

# Status Codes

| Code | Name | Description |
| --- | --- | --- |
| 1xx | Informational | The request was received and is continuing |
| 2xx | Success | The request was successfully received, understood, and accepted |
| 3xx | Redirection | Further action needs to be taken in order to complete the request |
| 4xx | Client Error | The request contains bad syntax or cannot be fulfilled |
| 5xx | Server Error | The server failed to fulfill an apparently valid request |

## Informational

| Code | Name | Description |
| --- | --- | --- |
| 100 | Continue | The server has received the request headers and the client should proceed to send the request body |
| 101 | Switching Protocols | The server is switching to a different protocol in response to an Upgrade request header from the client |
| 102 | Processing (WebDAV) | The server has received and is processing the request, but no response is available yet |
| 103 | Early Hints (Experimental) | The server is sending some hints about the response before it is ready, such as Link headers |

## Success

| Code | Name | Description |
| --- | --- | --- |
| 200 | OK | The request succeeded and the response contains the requested resource |
| 201 | Created | The request succeeded and a new resource was created as a result |
| 202 | Accepted | The request has been received but not yet acted upon |
| 203 | Non-Authoritative Information | The response contains information from a third-party source that may differ from the origin server |
| 204 | No Content | The request succeeded but there is no content to send back |
| 205 | Reset Content | The request succeeded and the user agent should reset the document that sent the request |
| 206 | Partial Content | The request succeeded and the response contains only part of the requested resource |
| 207 | Multi-Status (WebDAV) | The request succeeded and the response contains information about multiple resources |

## Redirection

| Code | Name | Description |
| --- | --- | --- |
| 300 | Multiple Choice | The server has multiple options for the requested resource and the client should choose one of them |
| 301 | Moved Permanently | The requested resource has been moved permanently to a new location and the client should use the new URL from now on |
| 302 | Found | The requested resource has been found temporarily at a different location and the client should use the original URL for future requests |
| 303 | See Other | The requested resource can be found at a different location using a GET method and the client should follow the new URL |
| 304 | Not Modified | The requested resource has not been modified since the last time it was accessed and the client can use the cached version |
| 305 | Use Proxy | The requested resource can only be accessed through a proxy specified in the Location header |
| 306 | Unused | This status code is no longer used and is reserved for future use |
| 307 | Temporary Redirect | The requested resource has been temporarily moved to a new location and the client should use the original method and URL for future requests |
| 308 | Permanent Redirect | The requested resource has been permanently moved to a new location and the client should use the new URL for future requests |

## Client error

| Code | Name | Description |
| --- | --- | --- |
| 400 | Bad Request | The request is malformed or invalid and cannot be processed by the server |
| 401 | Unauthorized | The request requires authentication and the client has not provided valid credentials |
| 402 | Payment Required | The request cannot be fulfilled until the client pays a fee (reserved for future use) |
| 403 | Forbidden | The server understood the request but refuses to authorize it due to insufficient permissions |
| 404 | Not Found | The requested resource does not exist on the server |
| 405 | Method Not Allowed | The request method is not supported by the requested resource |
| 406 | Not Acceptable | The requested resource is not available in a format that matches the client's preferences |
| 407 | Proxy Authentication Required | The request requires authentication with a proxy server and the client has not provided valid credentials |
| 408 | Request Timeout | The server did not receive a complete request from the client within a specified time limit |
| 409 | Conflict | The request could not be completed due to a conflict with the current state of the resource |
| 410 | Gone | The requested resource is no longer available on the server and no forwarding address is known |
| 411 | Length Required | The request did not specify the length of its content, which is required by the requested resource |
| 412 | Precondition Failed | One or more conditions given in the request header fields evaluated to false when tested on the server |
| 413 | Payload Too Large | The request entity is larger than the server is willing or able to process |
| 414 | URI Too Long | The request URI is longer than the server can interpret |
| 415 | Unsupported Media Type | The request entity has a media type that the server or resource does not support |
| 416 | Range Not Satisfiable | The request has specified a range of bytes that cannot be satisfied by the server |
| 417 | Expectation Failed | The server cannot meet the requirements of the Expect request header field |
| 418 | I'm a teapot (RFC 2324) | This code was defined in RFC 2324 as an April Fools' joke and is not expected to be implemented by actual HTTP servers |
| 421 | Misdirected Request (HTTP/2) | The request was directed at a server that is not able to produce a response (for example, because of connection reuse) |
| 422 | Unprocessable Entity (WebDAV) | The request was well-formed but was unable to be followed due to semantic errors |
| 423 | Locked (WebDAV) | The resource that is being accessed is locked |
| 424 | Failed Dependency (WebDAV) | The request failed due to failure of a previous request (for example, a PROPPATCH) |
| 425 | Too Early (Experimental) | Indicates that the server is unwilling to risk processing a request that might be replayed |
| 426 | Upgrade Required | The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field |
| 428 | Precondition Required (RFC 6585) | The origin server requires the request to be conditional (for example, using If-Match header field) |
| 429 | Too Many Requests (RFC 6585) | The user has sent too many requests in a given amount of time ("rate limiting") |
| 431 | Request Header Fields Too Large (RFC 6585) | The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large |
| 451 | Unavailable For Legal Reasons (RFC 7725) A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource |

## Server error

| Code | Name | Description |
| --- | --- | --- |
| 500 | Internal Server Error | The server encountered an unexpected condition that prevented it from fulfilling the request |
| 501 | Not Implemented | The server does not support the functionality required to fulfill the request |
| 502 | Bad Gateway | The server, while acting as a gateway or proxy, received an invalid response from an upstream server |
| 503 | Service Unavailable | The server is currently unable to handle the request due to a temporary overload or maintenance |
| 504 | Gateway Timeout | The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server |
| 505 | HTTP Version Not Supported | The server does not support the HTTP protocol version used in the request |
| 506 | Variant Also Negotiates (RFC 2295) | The server has an internal configuration error and cannot choose one of the available representations for the requested resource |
| 507 | Insufficient Storage (WebDAV) | The server is unable to store the representation needed to complete the request |
| 508 | Loop Detected (WebDAV) | The server detected an infinite loop while processing the request |
| 510 | Not Extended (RFC 2774) | The client needs to provide additional extensions to the request in order to fulfill it |
| 511 | Network Authentication Required (RFC 6585) The client needs to authenticate to gain network access |

# References
- [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
