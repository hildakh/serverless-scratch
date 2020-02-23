// console.log(process.env.REACT_APP_REGION);
export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: process.env.REACT_APP_STRIPE_KEY,
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET
  },
  apiGateway: {
    REGION:  process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_URL
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID
  },
  social: {
    FB:  process.env.REACT_APP_FACEBOOK_APP_ID
  }
}

