import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sagemaker from 'aws-cdk-lib/aws-sagemaker';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const cfnApp = new sagemaker.CfnApp(this, 'StableDiffusionApp', {
      appName: 'myStableDiffusion',
      appType: 'appType',
      domainId: 'domainId',
      userProfileName: 'userProfileName',

      // the properties below are optional
      resourceSpec: {
        instanceType: 'instanceType',
        sageMakerImageArn: 'sageMakerImageArn',
        sageMakerImageVersionArn: 'sageMakerImageVersionArn',
      },
      tags: [{
        key: 'key',
        value: 'value',
      }],
    });
  }
}
