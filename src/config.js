const dev = {
  STRIPE_KEY: "pk_test_K6G6QUHdPpeBsEY7E5VmFuMp00SWadzOWT",
    s3: {
      REGION: "us-west-2",
      BUCKET: "notes-apps-skarl"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://hjanjunu4a.execute-api.us-west-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_RKbH8MqEE",
      APP_CLIENT_ID: "27n7pt7q0p0q0o66enupm89ivo",
      IDENTITY_POOL_ID: "us-west-2:d7c0f0d2-9a05-4f22-ad14-ccf24ae68348"
    },
    social: {
      FB: "1033713593642519"
    }
};

const prod = {
  STRIPE_KEY: "pk_test_K6G6QUHdPpeBsEY7E5VmFuMp00SWadzOWT",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-apps-skarl"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://w26n260la7.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_CphjagfLf",
    APP_CLIENT_ID: "ee48vnd38n70osaicnrrhibpe",
    IDENTITY_POOL_ID: "us-west-2:4cbbf5a6-f313-42f5-bb46-33e1c650ed79"
  },
  social: {
    FB: "1033713593642519"
  }
};
  
// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};