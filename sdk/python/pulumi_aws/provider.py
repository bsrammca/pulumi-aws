# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class Provider(pulumi.ProviderResource):
    def __init__(__self__, resource_name, opts=None, access_key=None, allowed_account_ids=None, assume_role=None, endpoints=None, forbidden_account_ids=None, insecure=None, max_retries=None, profile=None, region=None, s3_force_path_style=None, secret_key=None, shared_credentials_file=None, skip_credentials_validation=None, skip_get_ec2_platforms=None, skip_metadata_api_check=None, skip_region_validation=None, skip_requesting_account_id=None, token=None, __props__=None, __name__=None, __opts__=None):
        """
        The provider type for the aws package. By default, resources use package-wide configuration
        settings, however an explicit `Provider` instance may be created and passed during resource
        construction to achieve fine-grained programmatic control over provider settings. See the
        [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        
        The **assume_role** object supports the following:
        
          * `externalId` (`pulumi.Input[str]`)
          * `policy` (`pulumi.Input[str]`)
          * `role_arn` (`pulumi.Input[str]`)
          * `sessionName` (`pulumi.Input[str]`)
        
        The **endpoints** object supports the following:
        
          * `acm` (`pulumi.Input[str]`)
          * `acmpca` (`pulumi.Input[str]`)
          * `amplify` (`pulumi.Input[str]`)
          * `apigateway` (`pulumi.Input[str]`)
          * `applicationautoscaling` (`pulumi.Input[str]`)
          * `applicationinsights` (`pulumi.Input[str]`)
          * `appmesh` (`pulumi.Input[str]`)
          * `appstream` (`pulumi.Input[str]`)
          * `appsync` (`pulumi.Input[str]`)
          * `athena` (`pulumi.Input[str]`)
          * `autoscaling` (`pulumi.Input[str]`)
          * `autoscalingplans` (`pulumi.Input[str]`)
          * `backup` (`pulumi.Input[str]`)
          * `batch` (`pulumi.Input[str]`)
          * `budgets` (`pulumi.Input[str]`)
          * `cloud9` (`pulumi.Input[str]`)
          * `cloudformation` (`pulumi.Input[str]`)
          * `cloudfront` (`pulumi.Input[str]`)
          * `cloudhsm` (`pulumi.Input[str]`)
          * `cloudsearch` (`pulumi.Input[str]`)
          * `cloudtrail` (`pulumi.Input[str]`)
          * `cloudwatch` (`pulumi.Input[str]`)
          * `cloudwatchevents` (`pulumi.Input[str]`)
          * `cloudwatchlogs` (`pulumi.Input[str]`)
          * `codebuild` (`pulumi.Input[str]`)
          * `codecommit` (`pulumi.Input[str]`)
          * `codedeploy` (`pulumi.Input[str]`)
          * `codepipeline` (`pulumi.Input[str]`)
          * `cognitoidentity` (`pulumi.Input[str]`)
          * `cognitoidp` (`pulumi.Input[str]`)
          * `configservice` (`pulumi.Input[str]`)
          * `cur` (`pulumi.Input[str]`)
          * `datapipeline` (`pulumi.Input[str]`)
          * `datasync` (`pulumi.Input[str]`)
          * `dax` (`pulumi.Input[str]`)
          * `devicefarm` (`pulumi.Input[str]`)
          * `directconnect` (`pulumi.Input[str]`)
          * `dlm` (`pulumi.Input[str]`)
          * `dms` (`pulumi.Input[str]`)
          * `docdb` (`pulumi.Input[str]`)
          * `ds` (`pulumi.Input[str]`)
          * `dynamodb` (`pulumi.Input[str]`)
          * `ec2` (`pulumi.Input[str]`)
          * `ecr` (`pulumi.Input[str]`)
          * `ecs` (`pulumi.Input[str]`)
          * `efs` (`pulumi.Input[str]`)
          * `eks` (`pulumi.Input[str]`)
          * `elasticache` (`pulumi.Input[str]`)
          * `elasticbeanstalk` (`pulumi.Input[str]`)
          * `elastictranscoder` (`pulumi.Input[str]`)
          * `elb` (`pulumi.Input[str]`)
          * `emr` (`pulumi.Input[str]`)
          * `es` (`pulumi.Input[str]`)
          * `firehose` (`pulumi.Input[str]`)
          * `fms` (`pulumi.Input[str]`)
          * `forecast` (`pulumi.Input[str]`)
          * `fsx` (`pulumi.Input[str]`)
          * `gamelift` (`pulumi.Input[str]`)
          * `glacier` (`pulumi.Input[str]`)
          * `globalaccelerator` (`pulumi.Input[str]`)
          * `glue` (`pulumi.Input[str]`)
          * `guardduty` (`pulumi.Input[str]`)
          * `iam` (`pulumi.Input[str]`)
          * `inspector` (`pulumi.Input[str]`)
          * `iot` (`pulumi.Input[str]`)
          * `iotanalytics` (`pulumi.Input[str]`)
          * `iotevents` (`pulumi.Input[str]`)
          * `kafka` (`pulumi.Input[str]`)
          * `kinesis` (`pulumi.Input[str]`)
          * `kinesisAnalytics` (`pulumi.Input[str]`)
          * `kinesisanalytics` (`pulumi.Input[str]`)
          * `kinesisvideo` (`pulumi.Input[str]`)
          * `kms` (`pulumi.Input[str]`)
          * `lakeformation` (`pulumi.Input[str]`)
          * `lambda_` (`pulumi.Input[str]`)
          * `lexmodels` (`pulumi.Input[str]`)
          * `licensemanager` (`pulumi.Input[str]`)
          * `lightsail` (`pulumi.Input[str]`)
          * `macie` (`pulumi.Input[str]`)
          * `managedblockchain` (`pulumi.Input[str]`)
          * `mediaconnect` (`pulumi.Input[str]`)
          * `mediaconvert` (`pulumi.Input[str]`)
          * `medialive` (`pulumi.Input[str]`)
          * `mediapackage` (`pulumi.Input[str]`)
          * `mediastore` (`pulumi.Input[str]`)
          * `mediastoredata` (`pulumi.Input[str]`)
          * `mq` (`pulumi.Input[str]`)
          * `neptune` (`pulumi.Input[str]`)
          * `opsworks` (`pulumi.Input[str]`)
          * `organizations` (`pulumi.Input[str]`)
          * `personalize` (`pulumi.Input[str]`)
          * `pinpoint` (`pulumi.Input[str]`)
          * `pricing` (`pulumi.Input[str]`)
          * `quicksight` (`pulumi.Input[str]`)
          * `r53` (`pulumi.Input[str]`)
          * `ram` (`pulumi.Input[str]`)
          * `rds` (`pulumi.Input[str]`)
          * `redshift` (`pulumi.Input[str]`)
          * `resourcegroups` (`pulumi.Input[str]`)
          * `route53` (`pulumi.Input[str]`)
          * `route53resolver` (`pulumi.Input[str]`)
          * `s3` (`pulumi.Input[str]`)
          * `s3control` (`pulumi.Input[str]`)
          * `sagemaker` (`pulumi.Input[str]`)
          * `sdb` (`pulumi.Input[str]`)
          * `secretsmanager` (`pulumi.Input[str]`)
          * `securityhub` (`pulumi.Input[str]`)
          * `serverlessrepo` (`pulumi.Input[str]`)
          * `servicecatalog` (`pulumi.Input[str]`)
          * `servicediscovery` (`pulumi.Input[str]`)
          * `servicequotas` (`pulumi.Input[str]`)
          * `ses` (`pulumi.Input[str]`)
          * `shield` (`pulumi.Input[str]`)
          * `sns` (`pulumi.Input[str]`)
          * `sqs` (`pulumi.Input[str]`)
          * `ssm` (`pulumi.Input[str]`)
          * `stepfunctions` (`pulumi.Input[str]`)
          * `storagegateway` (`pulumi.Input[str]`)
          * `sts` (`pulumi.Input[str]`)
          * `swf` (`pulumi.Input[str]`)
          * `transfer` (`pulumi.Input[str]`)
          * `waf` (`pulumi.Input[str]`)
          * `wafregional` (`pulumi.Input[str]`)
          * `worklink` (`pulumi.Input[str]`)
          * `workspaces` (`pulumi.Input[str]`)
          * `xray` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/index.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['access_key'] = access_key
            __props__['allowed_account_ids'] = pulumi.Output.from_input(allowed_account_ids).apply(json.dumps) if allowed_account_ids is not None else None
            __props__['assume_role'] = pulumi.Output.from_input(assume_role).apply(json.dumps) if assume_role is not None else None
            __props__['endpoints'] = pulumi.Output.from_input(endpoints).apply(json.dumps) if endpoints is not None else None
            __props__['forbidden_account_ids'] = pulumi.Output.from_input(forbidden_account_ids).apply(json.dumps) if forbidden_account_ids is not None else None
            __props__['insecure'] = pulumi.Output.from_input(insecure).apply(json.dumps) if insecure is not None else None
            __props__['max_retries'] = pulumi.Output.from_input(max_retries).apply(json.dumps) if max_retries is not None else None
            if profile is None:
                profile = utilities.get_env('AWS_PROFILE')
            __props__['profile'] = profile
            if region is None:
                region = utilities.get_env('AWS_REGION', 'AWS_DEFAULT_REGION')
            __props__['region'] = region
            __props__['s3_force_path_style'] = pulumi.Output.from_input(s3_force_path_style).apply(json.dumps) if s3_force_path_style is not None else None
            __props__['secret_key'] = secret_key
            __props__['shared_credentials_file'] = shared_credentials_file
            __props__['skip_credentials_validation'] = pulumi.Output.from_input(skip_credentials_validation).apply(json.dumps) if skip_credentials_validation is not None else None
            __props__['skip_get_ec2_platforms'] = pulumi.Output.from_input(skip_get_ec2_platforms).apply(json.dumps) if skip_get_ec2_platforms is not None else None
            __props__['skip_metadata_api_check'] = pulumi.Output.from_input(skip_metadata_api_check).apply(json.dumps) if skip_metadata_api_check is not None else None
            __props__['skip_region_validation'] = pulumi.Output.from_input(skip_region_validation).apply(json.dumps) if skip_region_validation is not None else None
            __props__['skip_requesting_account_id'] = pulumi.Output.from_input(skip_requesting_account_id).apply(json.dumps) if skip_requesting_account_id is not None else None
            __props__['token'] = token
        super(Provider, __self__).__init__(
            'aws',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None):
        """
        Get an existing Provider resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/index.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        return Provider(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

