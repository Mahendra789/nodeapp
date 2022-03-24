const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {

    console.log(req.url);
    if (req.url == "/") {
console.log('IF PART')
//      res.setHeader('Set-Cookie', ['type=ninja;']);
     res.setHeader('Set-Cookie', ['type=ninja; Secure; SameSite=None']);
        res.writeHead(200);
        res.end('<iframe src="http://localhost:8000/abc/abc.html" title="google"></iframe> <iframe src="http://127.0.0.1:8001/" title="Reddif"></iframe> <iframe src="http://jenkins.psonar.us/" title="Reddif"></iframe>');
        //res.end('<iframe src="https://grafana.ops.prosimo.io?embedded=true" title="google"></iframe> <iframe src="http://127.0.0.1:8001/" title="Reddif"></iframe> <iframe src="http://jenkins.psonar.us/" title="Reddif"></iframe>');
        //res.end('<iframe src="https://app-azure-eastus2-1646933943547.myeventarena.com/" title="google"></iframe> <iframe src="http://127.0.0.1:8001/" title="Reddif"></iframe>');
    } else {
console.log('ELSE PART')
        // res.setHeader('Set-Cookie', ['type=ninja;']);
     res.setHeader('Set-Cookie', ['type=ninja; Secure; SameSite=None']);
//      res.setHeader('Set-Cookie', ['type=ninja; Secure;']);
        res.writeHead(200);
        // console.log(document.cookie)
        // if (document) {
        // document.cookie = document.cookie + "; SameSite=None; Secure";
        // }
        res.end('<script>var request = new XMLHttpRequest();var path = "http://localhost:8000/accc/";request.open("GET", path, true);request.withCredentials = true;request.setRequestHeader("Cookie", document.cookie);request.send(null);var request = new XMLHttpRequest();var path = "http://localhost:8001/accc/";request.open("GET", path, true);request.withCredentials = true;request.setRequestHeader("Cookie", document.cookie);request.send(null);</script>');

        //res.end('<script>function printCookie(){var cookieContent=document.cookie; console.log(cookieContent);};printCookie();</script><a href="http://localhost:8000/123/">link 1</a><a href="http://localhost:8001/">link 2</a>');
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});