const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.limit=options.limit;
    this.sumbite=0;

  }

  _transform(chunk, encoding, callback) {



    try {
      this.sumbite+=chunk.byteLength;
      if(this.sumbite>this.limit){

        throw new LimitExceededError();


      }

      callback(null, chunk);
    }
    catch(error) {
      this.destroy(error);
     // console.error(error);

    }


  }



}

module.exports = LimitSizeStream;
