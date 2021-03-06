# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetSitesResult:
    """
    A collection of values returned by getSites.
    """
    def __init__(__self__, id=None, ids=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if ids and not isinstance(ids, list):
            raise TypeError("Expected argument 'ids' to be a list")
        __self__.ids = ids
        """
        Set of Outposts Site identifiers.
        """
class AwaitableGetSitesResult(GetSitesResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetSitesResult(
            id=self.id,
            ids=self.ids)

def get_sites(opts=None):
    """
    Provides details about multiple Outposts Sites.

    ## Example Usage

    ```python
    import pulumi
    import pulumi_aws as aws

    all = aws.outposts.get_sites()
    ```
    """
    __args__ = dict()


    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('aws:outposts/getSites:getSites', __args__, opts=opts).value

    return AwaitableGetSitesResult(
        id=__ret__.get('id'),
        ids=__ret__.get('ids'))
