const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.encryptString = async (sourceString) => {
  const salt = await bcrypt.genSalt(10);
  let encryptedString = await bcrypt.hash(sourceString, salt);
  return encryptedString;
};

exports.generateOTP = async () => {
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
};

exports.generateEmailAuthToken = async (email) => {
  const token = jwt.sign({ email }, process.env.NODE_SECRET_KEY);
  return token;
};

exports.generateAuthTokenWithObject = async (data) => {
  const token = jwt.sign(data, process.env.NODE_SECRET_KEY);
  return token;
};
// exports.Error type: Error
// AxiosError: connect ETIMEDOUT 50.73.41.71:443
//     at AxiosError.from (C:\Users\TK-LPT-0923\Documents\SkyVantage\skyvantage-node-server\node_modules\axios\dist\node\axios.cjs:837:14)
//     at RedirectableRequest.handleRequestError (C:\Users\TK-LPT-0923\Documents\SkyVantage\skyvantage-node-server\node_modules\axios\dist\node\axios.cjs:3029:25)
//     at RedirectableRequest.emit (node:events:517:28)
//     at eventHandlers.<computed> (C:\Users\TK-LPT-0923\Documents\SkyVantage\skyvantage-node-server\node_modules\follow-redirects\index.js:14:24)
//     at ClientRequest.emit (node:events:517:28)
//     at TLSSocket.socketErrorListener (node:_http_client:501:9)
//     at TLSSocket.emit (node:events:517:28)
//     at emitErrorNT (node:internal/streams/destroy:151:8)
//     at emitErrorCloseNT (node:internal/streams/destroy:116:3)
//     at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
//   port: 443,
//   address: '50.73.41.71',
//   syscall: 'connect',
//   code: 'ETIMEDOUT',
//   errno: -4039,
//   config: {
//     transitional: {
//       silentJSONParsing: true,
//       forcedJSONParsing: true,
//       clarifyTimeoutError: false
//     },
//     adapter: [ 'xhr', 'http' ],
//     transformRequest: [ [Function: transformRequest] ],
//     transformResponse: [ [Function: transformResponse] ],
//     timeout: 0,
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
//     maxContentLength: -1,
//     maxBodyLength: -1,
//     env: { FormData: [Function], Blob: [class Blob] },
//     validateStatus: [Function: validateStatus],
//     headers: Object [AxiosHeaders] {
//       Accept: 'application/json, text/plain, */*',
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Accept-Encoding': 'gzip, deflate, br',
//       'User-Agent': 'axios/1.6.0',
//       'Content-Length': '45'
//     },
//     signal: AbortSignal { aborted: false },
//     method: 'post',
//     url: 'https://testsvams.skyvantage.com/api/services/data/getCityNames.lasso',
//     data: 'api_key=tkxelG23eL25b21F21w23F23p&airline=VBJ'
//   },
//   request: <ref *1> Writable {
//     _writableState: WritableState {
//       objectMode: false,
//       highWaterMark: 16384,
//       finalCalled: false,
//       needDrain: false,
//       ending: false,
//       ended: false,
//       finished: false,
//       destroyed: false,
//       decodeStrings: true,
//       defaultEncoding: 'utf8',
//       length: 0,
//       writing: false,
//       corked: 0,
//       sync: true,
//       bufferProcessing: false,
//       onwrite: [Function: bound onwrite],
//       writecb: null,
//       writelen: 0,
//       afterWriteTickInfo: null,
//       buffered: [],
//       bufferedIndex: 0,
//       allBuffers: true,
//       allNoop: true,
//       pendingcb: 0,
//       constructed: true,
//       prefinished: false,
//       errorEmitted: false,
//       emitClose: true,
//       autoDestroy: true,
//       errored: null,
//       closed: false,
//       closeEmitted: false,
//       [Symbol(kOnFinished)]: []
//     },
//     _events: [Object: null prototype] {
//       response: [Function: handleResponse],
//       error: [Function: handleRequestError],
//       socket: [Function: handleRequestSocket]
//     },
//     _eventsCount: 3,
//     _maxListeners: undefined,
//     _options: {
//       maxRedirects: 21,
//       maxBodyLength: Infinity,
//       protocol: 'https:',
//       path: '/api/services/data/getCityNames.lasso',
//       method: 'POST',
//       headers: [Object: null prototype],
//       agents: [Object],
//       auth: undefined,
//       family: undefined,
//       beforeRedirect: [Function: dispatchBeforeRedirect],
//       beforeRedirects: [Object],
//       hostname: 'testsvams.skyvantage.com',
//       port: '',
//       agent: undefined,
//       nativeProtocols: [Object],
//       pathname: '/api/services/data/getCityNames.lasso'
//     },
//     _ended: false,
//     _ending: true,
//     _redirectCount: 0,
//     _redirects: [],
//     _requestBodyLength: 45,
//     _requestBodyBuffers: [ [Object] ],
//     _onNativeResponse: [Function (anonymous)],
//     _currentRequest: ClientRequest {
//       _events: [Object: null prototype],
//       _eventsCount: 7,
//       _maxListeners: undefined,
//       outputData: [],
//       outputSize: 0,
//       writable: true,
//       destroyed: false,
//       _last: true,
//       chunkedEncoding: false,
//       shouldKeepAlive: false,
//       maxRequestsOnConnectionReached: false,
//       _defaultKeepAlive: true,
//       useChunkedEncodingByDefault: true,
//       sendDate: false,
//       _removedConnection: false,
//       _removedContLen: false,
//       _removedTE: false,
//       strictContentLength: false,
//       _contentLength: '45',
//       _hasBody: true,
//       _trailer: '',
//       finished: false,
//       _headerSent: true,
//       _closed: false,
//       socket: [TLSSocket],
//       _header: 'POST /api/services/data/getCityNames.lasso HTTP/1.1\r\n' +
//         'Accept: application/json, text/plain, */*\r\n' +
//         'Content-Type: application/x-www-form-urlencoded\r\n' +
//         'Accept-Encoding: gzip, deflate, br\r\n' +
//         'User-Agent: axios/1.6.0\r\n' +
//         'Content-Length: 45\r\n' +
//         'Host: testsvams.skyvantage.com\r\n' +
//         'Connection: close\r\n' +
//         '\r\n',
//       _keepAliveTimeout: 0,
//       _onPendingData: [Function: nop],
//       agent: [Agent],
//       socketPath: undefined,
//       method: 'POST',
//       maxHeaderSize: undefined,
//       insecureHTTPParser: undefined,
//       joinDuplicateHeaders: undefined,
//       path: '/api/services/data/getCityNames.lasso',
//       _ended: false,
//       res: null,
//       aborted: false,
//       timeoutCb: null,
//       upgradeOrConnect: false,
//       parser: null,
//       maxHeadersCount: null,
//       reusedSocket: false,
//       host: 'testsvams.skyvantage.com',
//       protocol: 'https:',
//       _redirectable: [Circular *1],
//       [Symbol(kCapture)]: false,
//       [Symbol(kBytesWritten)]: 0,
//       [Symbol(kNeedDrain)]: false,
//       [Symbol(corked)]: 0,
//       [Symbol(kOutHeaders)]: [Object: null prototype],
//       [Symbol(errored)]: null,
//       [Symbol(kHighWaterMark)]: 16384,
//       [Symbol(kRejectNonStandardBodyWrites)]: false,
//       [Symbol(kUniqueHeaders)]: null
//     },
//     _currentUrl: 'https://testsvams.skyvantage.com/api/services/data/getCityNames.lasso',
//     [Symbol(kCapture)]: false
//   },
//   cause: Error: connect ETIMEDOUT 50.73.41.71:443
//       at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1555:16) {
//     errno: -4039,
//     code: 'ETIMEDOUT',
//     syscall: 'connect',
//     address: '50.73.41.71',
//     port: 443
//   }
// }
// addAuthTokenInResponseHeader = async (data, resObject) => {
//   let token = await this.generateAuthTokenWithObject(data);
//   resObject.header("x-auth-token", token);
//   resObject.header("Access-Control-Expose-Headers", "x-auth-token");
//   return token;
// };

exports.isValidUser = async (requestPassword, encryptedPassword) => {
  let isValidPassword = await bcrypt.compare(
    requestPassword,
    encryptedPassword
  );
  return isValidPassword;
};
