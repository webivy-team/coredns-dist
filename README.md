# coredns-dist

Use [coredns](http://coredns.io) as an npm module for tighter integration with node apps (e.g. test fixtures). See the coreDNS documentation for usage: https://coredns.io/manual/toc/.

## Usage

`npm install coredns-dist`

Put a `Corefile` in the current working directory.

```javascript
import coredns from "coredns-dist";
const server = await coredns();
// You can also pass in a custom environment
const server = await coredns({
  MY_VARIABLE: "www.example.org",
});

// And shut down when you are done
server.stop();
```

```sh
sudo setcap 'cap_net_bind_service=+ep' ../linux-x64/coredns
dig @127.0.0.1 -p 1053 www.example.com
```
