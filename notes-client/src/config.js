const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notebucket-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://dxsyx4hwwj.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_7ZTx5OBGb",
      APP_CLIENT_ID: "54val5c6pbi0ag26po8rut645h",
      IDENTITY_POOL_ID: "us-east-1:2fe15ff0-49e7-4147-aeca-29a2448097ca",
    },
  };
  
  export default config;