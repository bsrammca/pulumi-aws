# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class PeeringConnectionOptions(pulumi.CustomResource):
    accepter: pulumi.Output[dict]
    """
    An optional configuration block that allows for [VPC Peering Connection]
    (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
    the peering connection (a maximum of one).
    
      * `allowClassicLinkToRemoteVpc` (`bool`) - Allow a local linked EC2-Classic instance to communicate
        with instances in a peer VPC. This enables an outbound communication from the local ClassicLink connection
        to the remote VPC. This option is not supported for inter-region VPC peering.
      * `allowRemoteVpcDnsResolution` (`bool`) - Allow a local VPC to resolve public DNS hostnames to
        private IP addresses when queried from instances in the peer VPC.
      * `allowVpcToRemoteClassicLink` (`bool`) - Allow a local VPC to communicate with a linked EC2-Classic
        instance in a peer VPC. This enables an outbound communication from the local VPC to the remote ClassicLink
        connection. This option is not supported for inter-region VPC peering.
    """
    requester: pulumi.Output[dict]
    """
    A optional configuration block that allows for [VPC Peering Connection]
    (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
    the peering connection (a maximum of one).
    
      * `allowClassicLinkToRemoteVpc` (`bool`) - Allow a local linked EC2-Classic instance to communicate
        with instances in a peer VPC. This enables an outbound communication from the local ClassicLink connection
        to the remote VPC. This option is not supported for inter-region VPC peering.
      * `allowRemoteVpcDnsResolution` (`bool`) - Allow a local VPC to resolve public DNS hostnames to
        private IP addresses when queried from instances in the peer VPC.
      * `allowVpcToRemoteClassicLink` (`bool`) - Allow a local VPC to communicate with a linked EC2-Classic
        instance in a peer VPC. This enables an outbound communication from the local VPC to the remote ClassicLink
        connection. This option is not supported for inter-region VPC peering.
    """
    vpc_peering_connection_id: pulumi.Output[str]
    """
    The ID of the requester VPC peering connection.
    """
    def __init__(__self__, resource_name, opts=None, accepter=None, requester=None, vpc_peering_connection_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a resource to manage VPC peering connection options.
        
        > **NOTE on VPC Peering Connections and VPC Peering Connection Options:** This provider provides
        both a standalone VPC Peering Connection Options and a VPC Peering Connection
        resource with `accepter` and `requester` attributes. Do not manage options for the same VPC peering
        connection in both a VPC Peering Connection resource and a VPC Peering Connection Options resource.
        Doing so will cause a conflict of options and will overwrite the options.
        Using a VPC Peering Connection Options resource decouples management of the connection options from
        management of the VPC Peering Connection and allows options to be set correctly in cross-region and
        cross-account scenarios.
        
        Basic usage:
        
        
        Basic cross-account usage:
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] accepter: An optional configuration block that allows for [VPC Peering Connection]
               (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
               the peering connection (a maximum of one).
        :param pulumi.Input[dict] requester: A optional configuration block that allows for [VPC Peering Connection]
               (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
               the peering connection (a maximum of one).
        :param pulumi.Input[str] vpc_peering_connection_id: The ID of the requester VPC peering connection.
        
        The **accepter** object supports the following:
        
          * `allowClassicLinkToRemoteVpc` (`pulumi.Input[bool]`) - Allow a local linked EC2-Classic instance to communicate
            with instances in a peer VPC. This enables an outbound communication from the local ClassicLink connection
            to the remote VPC. This option is not supported for inter-region VPC peering.
          * `allowRemoteVpcDnsResolution` (`pulumi.Input[bool]`) - Allow a local VPC to resolve public DNS hostnames to
            private IP addresses when queried from instances in the peer VPC.
          * `allowVpcToRemoteClassicLink` (`pulumi.Input[bool]`) - Allow a local VPC to communicate with a linked EC2-Classic
            instance in a peer VPC. This enables an outbound communication from the local VPC to the remote ClassicLink
            connection. This option is not supported for inter-region VPC peering.
        
        The **requester** object supports the following:
        
          * `allowClassicLinkToRemoteVpc` (`pulumi.Input[bool]`) - Allow a local linked EC2-Classic instance to communicate
            with instances in a peer VPC. This enables an outbound communication from the local ClassicLink connection
            to the remote VPC. This option is not supported for inter-region VPC peering.
          * `allowRemoteVpcDnsResolution` (`pulumi.Input[bool]`) - Allow a local VPC to resolve public DNS hostnames to
            private IP addresses when queried from instances in the peer VPC.
          * `allowVpcToRemoteClassicLink` (`pulumi.Input[bool]`) - Allow a local VPC to communicate with a linked EC2-Classic
            instance in a peer VPC. This enables an outbound communication from the local VPC to the remote ClassicLink
            connection. This option is not supported for inter-region VPC peering.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/vpc_peering_connection_options.html.markdown.
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

            __props__['accepter'] = accepter
            __props__['requester'] = requester
            if vpc_peering_connection_id is None:
                raise TypeError("Missing required property 'vpc_peering_connection_id'")
            __props__['vpc_peering_connection_id'] = vpc_peering_connection_id
        super(PeeringConnectionOptions, __self__).__init__(
            'aws:ec2/peeringConnectionOptions:PeeringConnectionOptions',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, accepter=None, requester=None, vpc_peering_connection_id=None):
        """
        Get an existing PeeringConnectionOptions resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] accepter: An optional configuration block that allows for [VPC Peering Connection]
               (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
               the peering connection (a maximum of one).
        :param pulumi.Input[dict] requester: A optional configuration block that allows for [VPC Peering Connection]
               (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
               the peering connection (a maximum of one).
        :param pulumi.Input[str] vpc_peering_connection_id: The ID of the requester VPC peering connection.
        
        The **accepter** object supports the following:
        
          * `allowClassicLinkToRemoteVpc` (`pulumi.Input[bool]`) - Allow a local linked EC2-Classic instance to communicate
            with instances in a peer VPC. This enables an outbound communication from the local ClassicLink connection
            to the remote VPC. This option is not supported for inter-region VPC peering.
          * `allowRemoteVpcDnsResolution` (`pulumi.Input[bool]`) - Allow a local VPC to resolve public DNS hostnames to
            private IP addresses when queried from instances in the peer VPC.
          * `allowVpcToRemoteClassicLink` (`pulumi.Input[bool]`) - Allow a local VPC to communicate with a linked EC2-Classic
            instance in a peer VPC. This enables an outbound communication from the local VPC to the remote ClassicLink
            connection. This option is not supported for inter-region VPC peering.
        
        The **requester** object supports the following:
        
          * `allowClassicLinkToRemoteVpc` (`pulumi.Input[bool]`) - Allow a local linked EC2-Classic instance to communicate
            with instances in a peer VPC. This enables an outbound communication from the local ClassicLink connection
            to the remote VPC. This option is not supported for inter-region VPC peering.
          * `allowRemoteVpcDnsResolution` (`pulumi.Input[bool]`) - Allow a local VPC to resolve public DNS hostnames to
            private IP addresses when queried from instances in the peer VPC.
          * `allowVpcToRemoteClassicLink` (`pulumi.Input[bool]`) - Allow a local VPC to communicate with a linked EC2-Classic
            instance in a peer VPC. This enables an outbound communication from the local VPC to the remote ClassicLink
            connection. This option is not supported for inter-region VPC peering.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/vpc_peering_connection_options.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["accepter"] = accepter
        __props__["requester"] = requester
        __props__["vpc_peering_connection_id"] = vpc_peering_connection_id
        return PeeringConnectionOptions(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

