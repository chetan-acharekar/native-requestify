const http = require('http');

class requestifier {

    constructor() {

    }

    /**
     * callback function to be executed on data retrival
     * type is error first
     * @param {object} options
     * list of parameters for http request
     * @param {function} callback
     */
    callback(options, callback) {
        options.headers = options.headers ? options.headers : {};
        const { body, contentType } = this.parseParameters(options.body, options.headers.contentType);
        options.headers.contentType = contentType;

        let post_req = http.request(options, function(res) {
            res.setEncoding('utf8');
            let data = "";
            res.on('data', function(chunk) {
                data += chunk;
            });
            res.on('end', function() {
                callback(null, data);
            });
        });

        post_req.on('error', (e) => {
            callback(e)
        });

        // write data
        post_req.write(body);
        post_req.end();
    }


    /**
     * returns promise of http request
     * @param {object} post_options
     * http post options
     */
    promise(options) {
        return new Promise((resolve, reject) => {
            options.headers = options.headers ? options.headers : {};
            const { body, contentType } = this.parseParameters(options.body, options.headers.contentType);
            options.headers.contentType = contentType;

            let post_req = http.request(options, function(res) {
                res.setEncoding('utf8');

                let data = "";
                res.on('data', function(chunk) {
                    data += chunk;
                });
                res.on('end', function() {
                    resolve(data);
                });
            });

            post_req.on('error', (e) => {
                reject(e)
            });

            // write data
            post_req.write(body);
            post_req.end();
        });
    }

    /**
     * to resolve body as per requirements
     * and update content type accordingly
     * @param {object} body 
     * object with data for posting in json formats
     * @param {string} contentType 
     * content-Type of request
     * 
     */
    parseParameters(body, contentType) {
        let result = null;
        contentType = contentType ? contentType : '';
        switch (contentType) {
            case 'application/json':
                result = JSON.stringify(body);
                contentType = 'application/json';
                break;
            case 'x-url-form/encodedd':
                result = querystring.stringify(body);
                contentType = 'x-url-ford/encodedd';
                break;
            default:
                result = JSON.stringify(body);
                contentType = 'application/json';
                break;
        }
        return { body: result, contentType: contentType };
    }
};

module.exports = requestifier;
