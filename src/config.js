export default {
    MAX_ATTACHMENT_SIZE: 5000000,
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
    }
  };