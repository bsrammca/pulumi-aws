# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class ServerCertificate(pulumi.CustomResource):
    """
    Provides an IAM Server Certificate resource to upload Server Certificates.
    Certs uploaded to IAM can easily work with other AWS services such as:
    
    - AWS Elastic Beanstalk
    - Elastic Load Balancing
    - CloudFront
    - AWS OpsWorks
    
    For information about server certificates in IAM, see [Managing Server
    Certificates][2] in AWS Documentation.
    
    ~> **Note:** All arguments including the private key will be stored in the raw state as plain-text.
    [Read more about sensitive data in state](/docs/state/sensitive-data.html).
    """
    def __init__(__self__, __name__, __opts__=None, arn=None, certificate_body=None, certificate_chain=None, name=None, name_prefix=None, path=None, private_key=None):
        """Create a ServerCertificate resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if arn and not isinstance(arn, basestring):
            raise TypeError('Expected property arn to be a basestring')
        __self__.arn = arn
        """
        The Amazon Resource Name (ARN) specifying the server certificate.
        """
        __props__['arn'] = arn

        if not certificate_body:
            raise TypeError('Missing required property certificate_body')
        elif not isinstance(certificate_body, basestring):
            raise TypeError('Expected property certificate_body to be a basestring')
        __self__.certificate_body = certificate_body
        """
        The contents of the public key certificate in
        PEM-encoded format.
        """
        __props__['certificateBody'] = certificate_body

        if certificate_chain and not isinstance(certificate_chain, basestring):
            raise TypeError('Expected property certificate_chain to be a basestring')
        __self__.certificate_chain = certificate_chain
        """
        The contents of the certificate chain.
        This is typically a concatenation of the PEM-encoded public key certificates
        of the chain.
        """
        __props__['certificateChain'] = certificate_chain

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the Server Certificate. Do not include the
        path in this value. If omitted, Terraform will assign a random, unique name.
        """
        __props__['name'] = name

        if name_prefix and not isinstance(name_prefix, basestring):
            raise TypeError('Expected property name_prefix to be a basestring')
        __self__.name_prefix = name_prefix
        """
        Creates a unique name beginning with the specified
        prefix. Conflicts with `name`.
        """
        __props__['namePrefix'] = name_prefix

        if path and not isinstance(path, basestring):
            raise TypeError('Expected property path to be a basestring')
        __self__.path = path
        """
        The IAM path for the server certificate.  If it is not
        included, it defaults to a slash (/). If this certificate is for use with
        AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
        See [IAM Identifiers][1] for more details on IAM Paths.
        """
        __props__['path'] = path

        if not private_key:
            raise TypeError('Missing required property private_key')
        elif not isinstance(private_key, basestring):
            raise TypeError('Expected property private_key to be a basestring')
        __self__.private_key = private_key
        """
        The contents of the private key in PEM-encoded format.
        """
        __props__['privateKey'] = private_key

        super(ServerCertificate, __self__).__init__(
            'aws:iam/serverCertificate:ServerCertificate',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'certificateBody' in outs:
            self.certificate_body = outs['certificateBody']
        if 'certificateChain' in outs:
            self.certificate_chain = outs['certificateChain']
        if 'name' in outs:
            self.name = outs['name']
        if 'namePrefix' in outs:
            self.name_prefix = outs['namePrefix']
        if 'path' in outs:
            self.path = outs['path']
        if 'privateKey' in outs:
            self.private_key = outs['privateKey']