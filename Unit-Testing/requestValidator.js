function requestValidator(object) {
  function testMethod(method) {
    //"Invalid request header: Invalid {Method/URI/Version/Message}"
    if (
      method == 'GET' ||
      method == 'POST' ||
      method == 'DELETE' ||
      method == 'CONNECT'
    ) {
    } else {
      throw new Error(`Invalid request header: Invalid Method`);
    }
  }

  function testUri(uri) {
    let pattern = /^[\w.]+$/g;
    let result = uri.match(pattern);

    if (uri == '*') return;
    if (!uri.length || !result)
      throw new Error(`Invalid request header: Invalid URI`);
  }

  function testVersion(version) {
    //version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
    if (
      version == 'HTTP/0.9' ||
      version == 'HTTP/1.0' ||
      version == 'HTTP/1.1' ||
      version == 'HTTP/2.0'
    ) {
    } else {
      throw new Error('Invalid request header: Invalid Version');
    }
  }

  function testMessage(message) {
    let pattern = /[\<\>\\\&\'\"]/g;

    //    throw new Error('Invalid request header: Invalid Message');

    let result = message.match(pattern);
    if (result) throw new Error('Invalid request header: Invalid Message');
  }
  if (!object.hasOwnProperty('method'))
    throw new Error('Invalid request header: Invalid Method');
  testMethod(object.method);
  if (!object.hasOwnProperty('uri'))
    throw new Error('Invalid request header: Invalid URI');
  testUri(object.uri);
  if (!object.hasOwnProperty('version'))
    throw new Error('Invalid request header: Invalid Version');
  testVersion(object.version);
  if (!object.hasOwnProperty('message'))
    throw new Error('Invalid request header: Invalid Message');
  testMessage(object.message);

  return object;
}

console.log(
  requestValidator({
    method: 'GET',
    uri: 'apt-get',
    version: 'HTTP/2.0',
    message: 'scriptalert',
  })
);
// requestValidator({
//   method: 'OPTIONS',
//   uri: 'git.master',
//   version: 'HTTP/1.1',
//   message: '-recursive',
// });
// //Invalid request header: Invalid Method
//requestValidator({ method: 'POST', uri: 'home.bash', message: 'rm -rf /*' });
// //Invalid request header: Invalid Version
