// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Retrieve information about an EC2 DHCP Options configuration.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/vpc_dhcp_options.html.markdown.
 */
export function getVpcDhcpOptions(args?: GetVpcDhcpOptionsArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcDhcpOptionsResult> & GetVpcDhcpOptionsResult {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetVpcDhcpOptionsResult> = pulumi.runtime.invoke("aws:ec2/getVpcDhcpOptions:getVpcDhcpOptions", {
        "dhcpOptionsId": args.dhcpOptionsId,
        "filters": args.filters,
        "tags": args.tags,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getVpcDhcpOptions.
 */
export interface GetVpcDhcpOptionsArgs {
    /**
     * The EC2 DHCP Options ID.
     */
    readonly dhcpOptionsId?: string;
    /**
     * List of custom filters as described below.
     */
    readonly filters?: inputApi.ec2.GetVpcDhcpOptionsFilter[];
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getVpcDhcpOptions.
 */
export interface GetVpcDhcpOptionsResult {
    /**
     * EC2 DHCP Options ID
     */
    readonly dhcpOptionsId: string;
    /**
     * The suffix domain name to used when resolving non Fully Qualified Domain Names. e.g. the `search` value in the `/etc/resolv.conf` file.
     */
    readonly domainName: string;
    /**
     * List of name servers.
     */
    readonly domainNameServers: string[];
    readonly filters?: outputApi.ec2.GetVpcDhcpOptionsFilter[];
    /**
     * List of NETBIOS name servers.
     */
    readonly netbiosNameServers: string[];
    /**
     * The NetBIOS node type (1, 2, 4, or 8). For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
     */
    readonly netbiosNodeType: string;
    /**
     * List of NTP servers.
     */
    readonly ntpServers: string[];
    /**
     * The ID of the AWS account that owns the DHCP options set.
     */
    readonly ownerId: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {[key: string]: any};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
