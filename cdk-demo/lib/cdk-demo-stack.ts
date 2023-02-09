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

    const cfnCodeRepository = new sagemaker.CfnCodeRepository(this, 'MyCfnCodeRepository', {
      gitConfig: {
        repositoryUrl: 'repositoryUrl',
    
        // the properties below are optional
        branch: 'branch',
        secretArn: 'secretArn',
      },
    
      // the properties below are optional
      codeRepositoryName: 'codeRepositoryName',
      tags: [{
        key: 'key',
        value: 'value',
      }],
    });

    const cfnDomain = new sagemaker.CfnDomain(this, 'MyCfnDomain', {
      authMode: 'authMode',
      defaultUserSettings: {
        executionRole: 'executionRole',
        jupyterServerAppSettings: {
          defaultResourceSpec: {
            instanceType: 'instanceType',
            lifecycleConfigArn: 'lifecycleConfigArn',
            sageMakerImageArn: 'sageMakerImageArn',
            sageMakerImageVersionArn: 'sageMakerImageVersionArn',
          },
        },
        kernelGatewayAppSettings: {
          customImages: [{
            appImageConfigName: 'appImageConfigName',
            imageName: 'imageName',
    
            // the properties below are optional
            imageVersionNumber: 123,
          }],
          defaultResourceSpec: {
            instanceType: 'instanceType',
            lifecycleConfigArn: 'lifecycleConfigArn',
            sageMakerImageArn: 'sageMakerImageArn',
            sageMakerImageVersionArn: 'sageMakerImageVersionArn',
          },
        },
        rSessionAppSettings: {
          customImages: [{
            appImageConfigName: 'appImageConfigName',
            imageName: 'imageName',
    
            // the properties below are optional
            imageVersionNumber: 123,
          }],
          defaultResourceSpec: {
            instanceType: 'instanceType',
            lifecycleConfigArn: 'lifecycleConfigArn',
            sageMakerImageArn: 'sageMakerImageArn',
            sageMakerImageVersionArn: 'sageMakerImageVersionArn',
          },
        },
        rStudioServerProAppSettings: {
          accessStatus: 'accessStatus',
          userGroup: 'userGroup',
        },
        securityGroups: ['securityGroups'],
        sharingSettings: {
          notebookOutputOption: 'notebookOutputOption',
          s3KmsKeyId: 's3KmsKeyId',
          s3OutputPath: 's3OutputPath',
        },
      },
      domainName: 'domainName',
      subnetIds: ['subnetIds'],
      vpcId: 'vpcId',
    
      // the properties below are optional
      appNetworkAccessType: 'appNetworkAccessType',
      appSecurityGroupManagement: 'appSecurityGroupManagement',
      defaultSpaceSettings: {
        executionRole: 'executionRole',
        jupyterServerAppSettings: {
          defaultResourceSpec: {
            instanceType: 'instanceType',
            lifecycleConfigArn: 'lifecycleConfigArn',
            sageMakerImageArn: 'sageMakerImageArn',
            sageMakerImageVersionArn: 'sageMakerImageVersionArn',
          },
        },
        kernelGatewayAppSettings: {
          customImages: [{
            appImageConfigName: 'appImageConfigName',
            imageName: 'imageName',
    
            // the properties below are optional
            imageVersionNumber: 123,
          }],
          defaultResourceSpec: {
            instanceType: 'instanceType',
            lifecycleConfigArn: 'lifecycleConfigArn',
            sageMakerImageArn: 'sageMakerImageArn',
            sageMakerImageVersionArn: 'sageMakerImageVersionArn',
          },
        },
        securityGroups: ['securityGroups'],
      },
      domainSettings: {
        rStudioServerProDomainSettings: {
          domainExecutionRoleArn: 'domainExecutionRoleArn',
    
          // the properties below are optional
          defaultResourceSpec: {
            instanceType: 'instanceType',
            lifecycleConfigArn: 'lifecycleConfigArn',
            sageMakerImageArn: 'sageMakerImageArn',
            sageMakerImageVersionArn: 'sageMakerImageVersionArn',
          },
          rStudioConnectUrl: 'rStudioConnectUrl',
          rStudioPackageManagerUrl: 'rStudioPackageManagerUrl',
        },
        securityGroupIds: ['securityGroupIds'],
      },
      kmsKeyId: 'kmsKeyId',
      tags: [{
        key: 'key',
        value: 'value',
      }],
    });

    const cfnEndpoint = new sagemaker.CfnEndpoint(this, 'MyCfnEndpoint', {
      endpointConfigName: 'endpointConfigName',
    
      // the properties below are optional
      deploymentConfig: {
        blueGreenUpdatePolicy: {
          trafficRoutingConfiguration: {
            type: 'type',
    
            // the properties below are optional
            canarySize: {
              type: 'type',
              value: 123,
            },
            linearStepSize: {
              type: 'type',
              value: 123,
            },
            waitIntervalInSeconds: 123,
          },
    
          // the properties below are optional
          maximumExecutionTimeoutInSeconds: 123,
          terminationWaitInSeconds: 123,
        },
    
        // the properties below are optional
        autoRollbackConfiguration: {
          alarms: [{
            alarmName: 'alarmName',
          }],
        },
      },
      endpointName: 'endpointName',
      excludeRetainedVariantProperties: [{
        variantPropertyType: 'variantPropertyType',
      }],
      retainAllVariantProperties: false,
      retainDeploymentConfig: false,
      tags: [{
        key: 'key',
        value: 'value',
      }],
    });

    const cfnEndpointConfig = new sagemaker.CfnEndpointConfig(this, 'MyCfnEndpointConfig', {
      productionVariants: [{
        initialVariantWeight: 123,
        modelName: 'modelName',
        variantName: 'variantName',
    
        // the properties below are optional
        acceleratorType: 'acceleratorType',
        containerStartupHealthCheckTimeoutInSeconds: 123,
        initialInstanceCount: 123,
        instanceType: 'instanceType',
        modelDataDownloadTimeoutInSeconds: 123,
        serverlessConfig: {
          maxConcurrency: 123,
          memorySizeInMb: 123,
        },
        volumeSizeInGb: 123,
      }],
    
      // the properties below are optional
      asyncInferenceConfig: {
        outputConfig: {
          s3OutputPath: 's3OutputPath',
    
          // the properties below are optional
          kmsKeyId: 'kmsKeyId',
          notificationConfig: {
            errorTopic: 'errorTopic',
            successTopic: 'successTopic',
          },
        },
    
        // the properties below are optional
        clientConfig: {
          maxConcurrentInvocationsPerInstance: 123,
        },
      },
      dataCaptureConfig: {
        captureOptions: [{
          captureMode: 'captureMode',
        }],
        destinationS3Uri: 'destinationS3Uri',
        initialSamplingPercentage: 123,
    
        // the properties below are optional
        captureContentTypeHeader: {
          csvContentTypes: ['csvContentTypes'],
          jsonContentTypes: ['jsonContentTypes'],
        },
        enableCapture: false,
        kmsKeyId: 'kmsKeyId',
      },
      endpointConfigName: 'endpointConfigName',
      explainerConfig: {
        clarifyExplainerConfig: {
          shapConfig: {
            shapBaselineConfig: {
              mimeType: 'mimeType',
              shapBaseline: 'shapBaseline',
              shapBaselineUri: 'shapBaselineUri',
            },
    
            // the properties below are optional
            numberOfSamples: 123,
            seed: 123,
            textConfig: {
              granularity: 'granularity',
              language: 'language',
            },
            useLogit: false,
          },
    
          // the properties below are optional
          enableExplanations: 'enableExplanations',
          inferenceConfig: {
            contentTemplate: 'contentTemplate',
            featureHeaders: ['featureHeaders'],
            featuresAttribute: 'featuresAttribute',
            featureTypes: ['featureTypes'],
            labelAttribute: 'labelAttribute',
            labelHeaders: ['labelHeaders'],
            labelIndex: 123,
            maxPayloadInMb: 123,
            maxRecordCount: 123,
            probabilityAttribute: 'probabilityAttribute',
            probabilityIndex: 123,
          },
        },
      },
      kmsKeyId: 'kmsKeyId',
      shadowProductionVariants: [{
        initialVariantWeight: 123,
        modelName: 'modelName',
        variantName: 'variantName',
    
        // the properties below are optional
        acceleratorType: 'acceleratorType',
        containerStartupHealthCheckTimeoutInSeconds: 123,
        initialInstanceCount: 123,
        instanceType: 'instanceType',
        modelDataDownloadTimeoutInSeconds: 123,
        serverlessConfig: {
          maxConcurrency: 123,
          memorySizeInMb: 123,
        },
        volumeSizeInGb: 123,
      }],
      tags: [{
        key: 'key',
        value: 'value',
      }],
    });

    const environment: any;
    const cfnModel = new sagemaker.CfnModel(this, 'MyCfnModel', {
      executionRoleArn: 'executionRoleArn',

      // the properties below are optional
      containers: [{
        containerHostname: 'containerHostname',
        environment: environment,
        image: 'image',
        imageConfig: {
          repositoryAccessMode: 'repositoryAccessMode',

          // the properties below are optional
          repositoryAuthConfig: {
            repositoryCredentialsProviderArn: 'repositoryCredentialsProviderArn',
          },
        },
        inferenceSpecificationName: 'inferenceSpecificationName',
        mode: 'mode',
        modelDataUrl: 'modelDataUrl',
        modelPackageName: 'modelPackageName',
        multiModelConfig: {
          modelCacheSetting: 'modelCacheSetting',
        },
      }],
      enableNetworkIsolation: false,
      inferenceExecutionConfig: {
        mode: 'mode',
      },
      modelName: 'modelName',
      primaryContainer: {
        containerHostname: 'containerHostname',
        environment: environment,
        image: 'image',
        imageConfig: {
          repositoryAccessMode: 'repositoryAccessMode',

          // the properties below are optional
          repositoryAuthConfig: {
            repositoryCredentialsProviderArn: 'repositoryCredentialsProviderArn',
          },
        },
        inferenceSpecificationName: 'inferenceSpecificationName',
        mode: 'mode',
        modelDataUrl: 'modelDataUrl',
        modelPackageName: 'modelPackageName',
        multiModelConfig: {
          modelCacheSetting: 'modelCacheSetting',
        },
      },
      tags: [{
        key: 'key',
        value: 'value',
      }],
      vpcConfig: {
        securityGroupIds: ['securityGroupIds'],
        subnets: ['subnets'],
      },
    });
  }
}
