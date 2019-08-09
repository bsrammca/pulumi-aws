# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class KeyPair(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the Lightsail key pair
    """
    encrypted_fingerprint: pulumi.Output[str]
    """
    The MD5 public key fingerprint for the encrypted
    private key
    """
    encrypted_private_key: pulumi.Output[str]
    """
    the private key material, base 64 encoded and
    encrypted with the given `pgp_key`. This is only populated when creating a new
    key and `pgp_key` is supplied
    """
    fingerprint: pulumi.Output[str]
    """
    The MD5 public key fingerprint as specified in section 4 of RFC 4716.
    """
    name: pulumi.Output[str]
    """
    The name of the Lightsail Key Pair. If omitted, a unique
    name will be generated by this provider
    """
    name_prefix: pulumi.Output[str]
    pgp_key: pulumi.Output[str]
    """
    An optional PGP key to encrypt the resulting private
    key material. Only used when creating a new key pair
    """
    private_key: pulumi.Output[str]
    """
    the private key, base64 encoded. This is only populated
    when creating a new key, and when no `pgp_key` is provided
    """
    public_key: pulumi.Output[str]
    """
    The public key material. This public key will be
    imported into Lightsail
    """
    def __init__(__self__, resource_name, opts=None, name=None, name_prefix=None, pgp_key=None, public_key=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a Lightsail Key Pair, for use with Lightsail Instances. These key pairs
        are separate from EC2 Key Pairs, and must be created or imported for use with
        Lightsail.
        
        > **Note:** Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail) for more details
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name of the Lightsail Key Pair. If omitted, a unique
               name will be generated by this provider
        :param pulumi.Input[str] pgp_key: An optional PGP key to encrypt the resulting private
               key material. Only used when creating a new key pair
        :param pulumi.Input[str] public_key: The public key material. This public key will be
               imported into Lightsail

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lightsail_key_pair.html.markdown.
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

            __props__['name'] = name
            __props__['name_prefix'] = name_prefix
            __props__['pgp_key'] = pgp_key
            __props__['public_key'] = public_key
            __props__['arn'] = None
            __props__['encrypted_fingerprint'] = None
            __props__['encrypted_private_key'] = None
            __props__['fingerprint'] = None
            __props__['private_key'] = None
        super(KeyPair, __self__).__init__(
            'aws:lightsail/keyPair:KeyPair',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, arn=None, encrypted_fingerprint=None, encrypted_private_key=None, fingerprint=None, name=None, name_prefix=None, pgp_key=None, private_key=None, public_key=None):
        """
        Get an existing KeyPair resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: The ARN of the Lightsail key pair
        :param pulumi.Input[str] encrypted_fingerprint: The MD5 public key fingerprint for the encrypted
               private key
        :param pulumi.Input[str] encrypted_private_key: the private key material, base 64 encoded and
               encrypted with the given `pgp_key`. This is only populated when creating a new
               key and `pgp_key` is supplied
        :param pulumi.Input[str] fingerprint: The MD5 public key fingerprint as specified in section 4 of RFC 4716.
        :param pulumi.Input[str] name: The name of the Lightsail Key Pair. If omitted, a unique
               name will be generated by this provider
        :param pulumi.Input[str] pgp_key: An optional PGP key to encrypt the resulting private
               key material. Only used when creating a new key pair
        :param pulumi.Input[str] private_key: the private key, base64 encoded. This is only populated
               when creating a new key, and when no `pgp_key` is provided
        :param pulumi.Input[str] public_key: The public key material. This public key will be
               imported into Lightsail

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lightsail_key_pair.html.markdown.
        """
        opts = pulumi.ResourceOptions(id=id) if opts is None else opts.merge(pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["arn"] = arn
        __props__["encrypted_fingerprint"] = encrypted_fingerprint
        __props__["encrypted_private_key"] = encrypted_private_key
        __props__["fingerprint"] = fingerprint
        __props__["name"] = name
        __props__["name_prefix"] = name_prefix
        __props__["pgp_key"] = pgp_key
        __props__["private_key"] = private_key
        __props__["public_key"] = public_key
        return KeyPair(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

