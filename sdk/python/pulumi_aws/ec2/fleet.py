# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Fleet(pulumi.CustomResource):
    excess_capacity_termination_policy: pulumi.Output[str]
    """
    Whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2. Valid values: `no-termination`, `termination`. Defaults to `termination`.
    """
    launch_template_config: pulumi.Output[dict]
    """
    Nested argument containing EC2 Launch Template configurations. Defined below.
    """
    on_demand_options: pulumi.Output[dict]
    """
    Nested argument containing On-Demand configurations. Defined below.
    """
    replace_unhealthy_instances: pulumi.Output[bool]
    """
    Whether EC2 Fleet should replace unhealthy instances. Defaults to `false`.
    """
    spot_options: pulumi.Output[dict]
    """
    Nested argument containing Spot configurations. Defined below.
    """
    tags: pulumi.Output[dict]
    """
    Map of Fleet tags. To tag instances at launch, specify the tags in the Launch Template.
    """
    target_capacity_specification: pulumi.Output[dict]
    """
    Nested argument containing target capacity configurations. Defined below.
    """
    terminate_instances: pulumi.Output[bool]
    """
    Whether to terminate instances for an EC2 Fleet if it is deleted successfully. Defaults to `false`.
    """
    terminate_instances_with_expiration: pulumi.Output[bool]
    """
    Whether running instances should be terminated when the EC2 Fleet expires. Defaults to `false`.
    """
    type: pulumi.Output[str]
    """
    The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. Valid values: `maintain`, `request`. Defaults to `maintain`.
    """
    def __init__(__self__, resource_name, opts=None, excess_capacity_termination_policy=None, launch_template_config=None, on_demand_options=None, replace_unhealthy_instances=None, spot_options=None, tags=None, target_capacity_specification=None, terminate_instances=None, terminate_instances_with_expiration=None, type=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a resource to manage EC2 Fleets.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] excess_capacity_termination_policy: Whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2. Valid values: `no-termination`, `termination`. Defaults to `termination`.
        :param pulumi.Input[dict] launch_template_config: Nested argument containing EC2 Launch Template configurations. Defined below.
        :param pulumi.Input[dict] on_demand_options: Nested argument containing On-Demand configurations. Defined below.
        :param pulumi.Input[bool] replace_unhealthy_instances: Whether EC2 Fleet should replace unhealthy instances. Defaults to `false`.
        :param pulumi.Input[dict] spot_options: Nested argument containing Spot configurations. Defined below.
        :param pulumi.Input[dict] tags: Map of Fleet tags. To tag instances at launch, specify the tags in the Launch Template.
        :param pulumi.Input[dict] target_capacity_specification: Nested argument containing target capacity configurations. Defined below.
        :param pulumi.Input[bool] terminate_instances: Whether to terminate instances for an EC2 Fleet if it is deleted successfully. Defaults to `false`.
        :param pulumi.Input[bool] terminate_instances_with_expiration: Whether running instances should be terminated when the EC2 Fleet expires. Defaults to `false`.
        :param pulumi.Input[str] type: The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. Valid values: `maintain`, `request`. Defaults to `maintain`.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ec2_fleet.html.markdown.
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

            __props__['excess_capacity_termination_policy'] = excess_capacity_termination_policy
            if launch_template_config is None:
                raise TypeError("Missing required property 'launch_template_config'")
            __props__['launch_template_config'] = launch_template_config
            __props__['on_demand_options'] = on_demand_options
            __props__['replace_unhealthy_instances'] = replace_unhealthy_instances
            __props__['spot_options'] = spot_options
            __props__['tags'] = tags
            if target_capacity_specification is None:
                raise TypeError("Missing required property 'target_capacity_specification'")
            __props__['target_capacity_specification'] = target_capacity_specification
            __props__['terminate_instances'] = terminate_instances
            __props__['terminate_instances_with_expiration'] = terminate_instances_with_expiration
            __props__['type'] = type
        super(Fleet, __self__).__init__(
            'aws:ec2/fleet:Fleet',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, excess_capacity_termination_policy=None, launch_template_config=None, on_demand_options=None, replace_unhealthy_instances=None, spot_options=None, tags=None, target_capacity_specification=None, terminate_instances=None, terminate_instances_with_expiration=None, type=None):
        """
        Get an existing Fleet resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] excess_capacity_termination_policy: Whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2. Valid values: `no-termination`, `termination`. Defaults to `termination`.
        :param pulumi.Input[dict] launch_template_config: Nested argument containing EC2 Launch Template configurations. Defined below.
        :param pulumi.Input[dict] on_demand_options: Nested argument containing On-Demand configurations. Defined below.
        :param pulumi.Input[bool] replace_unhealthy_instances: Whether EC2 Fleet should replace unhealthy instances. Defaults to `false`.
        :param pulumi.Input[dict] spot_options: Nested argument containing Spot configurations. Defined below.
        :param pulumi.Input[dict] tags: Map of Fleet tags. To tag instances at launch, specify the tags in the Launch Template.
        :param pulumi.Input[dict] target_capacity_specification: Nested argument containing target capacity configurations. Defined below.
        :param pulumi.Input[bool] terminate_instances: Whether to terminate instances for an EC2 Fleet if it is deleted successfully. Defaults to `false`.
        :param pulumi.Input[bool] terminate_instances_with_expiration: Whether running instances should be terminated when the EC2 Fleet expires. Defaults to `false`.
        :param pulumi.Input[str] type: The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. Valid values: `maintain`, `request`. Defaults to `maintain`.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ec2_fleet.html.markdown.
        """
        opts = pulumi.ResourceOptions(id=id) if opts is None else opts.merge(pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["excess_capacity_termination_policy"] = excess_capacity_termination_policy
        __props__["launch_template_config"] = launch_template_config
        __props__["on_demand_options"] = on_demand_options
        __props__["replace_unhealthy_instances"] = replace_unhealthy_instances
        __props__["spot_options"] = spot_options
        __props__["tags"] = tags
        __props__["target_capacity_specification"] = target_capacity_specification
        __props__["terminate_instances"] = terminate_instances
        __props__["terminate_instances_with_expiration"] = terminate_instances_with_expiration
        __props__["type"] = type
        return Fleet(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

