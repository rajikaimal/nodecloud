const nodeCloud = require('../../lib/');
const ncAWS = nodeCloud.getProvider('AWS', process.env.ncconf);
const options = {
  apiVersion: '2016-11-15',
};

// get compute object for AWS
const s3 = ncAWS.s3(options);

// create S3 Bucket
const params = {
  Bucket: 'examplebucket',
  CreateBucketConfiguration: {
    LocationConstraint: 'eu-west-1',
  },
};

s3
  .create(params)
  .then(res => {
    console.log(`Bucket created ! ${res}`);
  })
  .catch(err => {
    console.error(`Oops something happened ${err}`);
  });
