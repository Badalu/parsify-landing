import { Readable } from 'stream';
import serverHandler from '../dist/server/server.js';

export default async function (request, response) {
  const host = request.headers['x-forwarded-host'] || request.headers.host || 'localhost';
  const proto = request.headers['x-forwarded-proto'] || 'https';
  const fullUrl = `${proto}://${host}${request.url}`;
  
  // Construct a Web Request object with full URL and headers
  const webRequest = new Request(fullUrl, {
    method: request.method,
    headers: request.headers,
    body: request.method !== 'GET' && request.method !== 'HEAD' ? request : undefined,
    duplex: 'half'
  });

  try {
    const webResponse = await serverHandler.fetch(webRequest, process.env, response);
    
    // Copy status code and headers from Web Response to Node's ServerResponse
    response.statusCode = webResponse.status;
    webResponse.headers.forEach((value, key) => {
      response.setHeader(key, value);
    });

    if (webResponse.body) {
      Readable.fromWeb(webResponse.body).pipe(response);
    } else {
      response.end();
    }
  } catch (error) {
    console.error("Serverless handler crash:", error);
    response.statusCode = 500;
    response.setHeader('content-type', 'text/html; charset=utf-8');
    response.end('Internal Server Error');
  }
}
