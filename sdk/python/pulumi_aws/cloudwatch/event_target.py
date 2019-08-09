# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class EventTarget(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) associated of the target.
    """
    batch_target: pulumi.Output[dict]
    """
    Parameters used when you are using the rule to invoke an Amazon Batch Job. Documented below. A maximum of 1 are allowed.
    """
    ecs_target: pulumi.Output[dict]
    """
    Parameters used when you are using the rule to invoke Amazon ECS Task. Documented below. A maximum of 1 are allowed.
    """
    input: pulumi.Output[str]
    """
    Valid JSON text passed to the target.
    """
    input_path: pulumi.Output[str]
    """
    The value of the [JSONPath](http://goessner.net/articles/JsonPath/)
    that is used for extracting part of the matched event when passing it to the target.
    """
    input_transformer: pulumi.Output[dict]
    """
    Parameters used when you are providing a custom input to a target based on certain event data.
    """
    kinesis_target: pulumi.Output[dict]
    """
    Parameters used when you are using the rule to invoke an Amazon Kinesis Stream. Documented below. A maximum of 1 are allowed.
    """
    role_arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. Required if `ecs_target` is used.
    """
    rule: pulumi.Output[str]
    """
    The name of the rule you want to add targets to.
    """
    run_command_targets: pulumi.Output[list]
    """
    Parameters used when you are using the rule to invoke Amazon EC2 Run Command. Documented below. A maximum of 5 are allowed.
    """
    sqs_target: pulumi.Output[dict]
    """
    Parameters used when you are using the rule to invoke an Amazon SQS Queue. Documented below. A maximum of 1 are allowed.
    """
    target_id: pulumi.Output[str]
    """
    The unique target assignment ID.  If missing, will generate a random, unique id.
    """
    def __init__(__self__, resource_name, opts=None, arn=None, batch_target=None, ecs_target=None, input=None, input_path=None, input_transformer=None, kinesis_target=None, role_arn=None, rule=None, run_command_targets=None, sqs_target=None, target_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a CloudWatch Event Target resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: The Amazon Resource Name (ARN) associated of the target.
        :param pulumi.Input[dict] batch_target: Parameters used when you are using the rule to invoke an Amazon Batch Job. Documented below. A maximum of 1 are allowed.
        :param pulumi.Input[dict] ecs_target: Parameters used when you are using the rule to invoke Amazon ECS Task. Documented below. A maximum of 1 are allowed.
        :param pulumi.Input[str] input: Valid JSON text passed to the target.
        :param pulumi.Input[str] input_path: The value of the [JSONPath](http://goessner.net/articles/JsonPath/)
               that is used for extracting part of the matched event when passing it to the target.
        :param pulumi.Input[dict] input_transformer: Parameters used when you are providing a custom input to a target based on certain event data.
        :param pulumi.Input[dict] kinesis_target: Parameters used when you are using the rule to invoke an Amazon Kinesis Stream. Documented below. A maximum of 1 are allowed.
        :param pulumi.Input[str] role_arn: The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. Required if `ecs_target` is used.
        :param pulumi.Input[str] rule: The name of the rule you want to add targets to.
        :param pulumi.Input[list] run_command_targets: Parameters used when you are using the rule to invoke Amazon EC2 Run Command. Documented below. A maximum of 5 are allowed.
        :param pulumi.Input[dict] sqs_target: Parameters used when you are using the rule to invoke an Amazon SQS Queue. Documented below. A maximum of 1 are allowed.
        :param pulumi.Input[str] target_id: The unique target assignment ID.  If missing, will generate a random, unique id.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudwatch_event_target.html.markdown.
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

            if arn is None:
                raise TypeError("Missing required property 'arn'")
            __props__['arn'] = arn
            __props__['batch_target'] = batch_target
            __props__['ecs_target'] = ecs_target
            __props__['input'] = input
            __props__['input_path'] = input_path
            __props__['input_transformer'] = input_transformer
            __props__['kinesis_target'] = kinesis_target
            __props__['role_arn'] = role_arn
            if rule is None:
                raise TypeError("Missing required property 'rule'")
            __props__['rule'] = rule
            __props__['run_command_targets'] = run_command_targets
            __props__['sqs_target'] = sqs_target
            __props__['target_id'] = target_id
        super(EventTarget, __self__).__init__(
            'aws:cloudwatch/eventTarget:EventTarget',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, arn=None, batch_target=None, ecs_target=None, input=None, input_path=None, input_transformer=None, kinesis_target=None, role_arn=None, rule=None, run_command_targets=None, sqs_target=None, target_id=None):
        """
        Get an existing EventTarget resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: The Amazon Resource Name (ARN) associated of the target.
        :param pulumi.Input[dict] batch_target: Parameters used when you are using the rule to invoke an Amazon Batch Job. Documented below. A maximum of 1 are allowed.
        :param pulumi.Input[dict] ecs_target: Parameters used when you are using the rule to invoke Amazon ECS Task. Documented below. A maximum of 1 are allowed.
        :param pulumi.Input[str] input: Valid JSON text passed to the target.
        :param pulumi.Input[str] input_path: The value of the [JSONPath](http://goessner.net/articles/JsonPath/)
               that is used for extracting part of the matched event when passing it to the target.
        :param pulumi.Input[dict] input_transformer: Parameters used when you are providing a custom input to a target based on certain event data.
        :param pulumi.Input[dict] kinesis_target: Parameters used when you are using the rule to invoke an Amazon Kinesis Stream. Documented below. A maximum of 1 are allowed.
        :param pulumi.Input[str] role_arn: The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. Required if `ecs_target` is used.
        :param pulumi.Input[str] rule: The name of the rule you want to add targets to.
        :param pulumi.Input[list] run_command_targets: Parameters used when you are using the rule to invoke Amazon EC2 Run Command. Documented below. A maximum of 5 are allowed.
        :param pulumi.Input[dict] sqs_target: Parameters used when you are using the rule to invoke an Amazon SQS Queue. Documented below. A maximum of 1 are allowed.
        :param pulumi.Input[str] target_id: The unique target assignment ID.  If missing, will generate a random, unique id.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudwatch_event_target.html.markdown.
        """
        opts = pulumi.ResourceOptions(id=id) if opts is None else opts.merge(pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["arn"] = arn
        __props__["batch_target"] = batch_target
        __props__["ecs_target"] = ecs_target
        __props__["input"] = input
        __props__["input_path"] = input_path
        __props__["input_transformer"] = input_transformer
        __props__["kinesis_target"] = kinesis_target
        __props__["role_arn"] = role_arn
        __props__["rule"] = rule
        __props__["run_command_targets"] = run_command_targets
        __props__["sqs_target"] = sqs_target
        __props__["target_id"] = target_id
        return EventTarget(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

