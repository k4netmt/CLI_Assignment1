# Proxy Server

Time spent: 11h

Completed:

* [x] Required: Requests to port `8000` are echoed back with the same HTTP headers and body
* [x] Required: Requests/reponses are proxied to/from the destination server
* [x] Required: The destination server is configurable via the `--host`, `--port`  or `--url` arguments
* [x] Required: The destination server is configurable via the `x-destination-url` header
* [x] Required: Client requests and respones are printed to stdout
* [x] Required: The `--logfile` argument outputs all logs to the file specified instead of stdout
* [x] Optionals: Documentation, -h

![Video Walkthrough](https://github.com/k4netmt/preworknodejs/blob/master/proxyServer.gif)



##Features

###Echo Server:
```bash
>curl -v http://127.0.0.1:8000 -d "hello word" -H "foo:bar"
* Rebuilt URL to: http://127.0.0.1:8000/
*   Trying 127.0.0.1...
* Connected to 127.0.0.1 (127.0.0.1) port 8000 (#0)
> POST / HTTP/1.1
> Host: 127.0.0.1:8000
> User-Agent: curl/7.46.0
> Accept: */*
> foo:bar
> Content-Length: 10
> Content-Type: application/x-www-form-urlencoded
>
* upload completely sent off: 10 out of 10 bytes
< HTTP/1.1 200 OK
< host: 127.0.0.1:8000
< user-agent: curl/7.46.0
< accept: */*
< foo: bar
< content-length: 10
< content-type: application/x-www-form-urlencoded
< Date: Sat, 01 Oct 2016 04:42:56 GMT
< Connection: keep-alive
<
hello word* Connection #0 to host 127.0.0.1 left intact
```

### Proxy Server:
curl -v http://127.0.0.1:9000 -d "hello word" -H "foo:bar"
Port 9000 will proxy to the echo server on port 8000.
```bash
* Rebuilt URL to: http://127.0.0.1:9000/
*   Trying 127.0.0.1...
* Connected to 127.0.0.1 (127.0.0.1) port 9000 (#0)
> POST / HTTP/1.1
> Host: 127.0.0.1:9000
> User-Agent: curl/7.46.0
> Accept: */*
> foo:bar
> Content-Length: 10
> Content-Type: application/x-www-form-urlencoded
>
* upload completely sent off: 10 out of 10 bytes
< HTTP/1.1 200 OK
< host: 127.0.0.1:8000
< user-agent: curl/7.46.0
< accept: */*
< foo: bar
< content-length: 10
< content-type: application/x-www-form-urlencoded
< connection: close
< date: Sat, 01 Oct 2016 04:52:25 GMT
<
hello word* Closing connection 0
```

##Configuration:

###CLI Arguments:

The following CLI arguments are supported:

--host

The host of the destination server. Defaults to 127.0.0.1.

--port

The port of the destination server. Defaults to 80 or 8000 when a host is not specified.

--x-destination-url

A single url that overrides the above. E.g., http://www.google.com

--logfile

Specify a file path to redirect logging to.

## Optionals:

###3. Documentation, -h
node index.js -h
```bash
Usage: node ./index.js [options]

Options:
  -p, --port     Specify a forwarding port

  -x, --host     Specify a forwarding host

  -e, --exec     Specify a process to proxy instead

  -l, --logfile  Specify a output log file

  -h, --help     Show help
```

![Video Walkthrough](https://github.com/k4netmt/preworknodejs/blob/master/optional3.gif)



##Workshoper
###Javascripting:
![Video Walkthrough](https://github.com/k4netmt/preworknodejs/blob/master/learnyounode.PNG)
