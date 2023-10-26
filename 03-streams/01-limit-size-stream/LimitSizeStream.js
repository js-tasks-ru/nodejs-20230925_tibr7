const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
    constructor(options) {
        super(options);
        this.limit=options.limit;
        this.sumbite=0;

    }

    _transform(chunk, encoding, callback) {

             this.sumbite+=chunk.byteLength;
             let error=null;
             if(this.sumbite>this.limit){
                   error= new LimitExceededError();
             }


             callback(error, chunk);

    }



}

module.exports = LimitSizeStream;
