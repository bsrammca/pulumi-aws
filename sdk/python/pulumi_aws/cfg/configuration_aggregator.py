# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class ConfigurationAggregator(pulumi.CustomResource):
    account_aggregation_source: pulumi.Output[dict]
    """
    The account(s) to aggregate config data from as documented below.
    """
    arn: pulumi.Output[str]
    """
    The ARN of the aggregator
    """
    name: pulumi.Output[str]
    """
    The name of the configuration aggregator.
    """
    organization_aggregation_source: pulumi.Output[dict]
    """
    The organization to aggregate config data from as documented below.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, account_aggregation_source=None, name=None, organization_aggregation_source=None, tags=None, __name__=None, __opts__=None):
        """
        Manages an AWS Config Configuration Aggregator
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] account_aggregation_source: The account(s) to aggregate config data from as documented below.
        :param pulumi.Input[str] name: The name of the configuration aggregator.
        :param pulumi.Input[dict] organization_aggregation_source: The organization to aggregate config data from as documented below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/config_configuration_aggregator.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['account_aggregation_source'] = account_aggregation_source

        __props__['name'] = name

        __props__['organization_aggregation_source'] = organization_aggregation_source

        __props__['tags'] = tags

        __props__['arn'] = None

        super(ConfigurationAggregator, __self__).__init__(
            'aws:cfg/configurationAggregator:ConfigurationAggregator',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

