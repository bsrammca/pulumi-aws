// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Get an existing AWS Customer Gateway.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/customer_gateway.html.markdown.
 */
export function getCustomerGateway(args?: GetCustomerGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomerGatewayResult> & GetCustomerGatewayResult {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetCustomerGatewayResult> = pulumi.runtime.invoke("aws:ec2/getCustomerGateway:getCustomerGateway", {
        "filters": args.filters,
        "id": args.id,
        "tags": args.tags,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getCustomerGateway.
 */
export interface GetCustomerGatewayArgs {
    /**
     * One or more [name-value pairs][dcg-filters] to filter by.
     */
    readonly filters?: inputApi.ec2.GetCustomerGatewayFilter[];
    /**
     * The ID of the gateway.
     */
    readonly id?: string;
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getCustomerGateway.
 */
export interface GetCustomerGatewayResult {
    /**
     * (Optional) The gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).
     */
    readonly bgpAsn: number;
    readonly filters?: outputApi.ec2.GetCustomerGatewayFilter[];
    readonly id?: string;
    /**
     * (Optional) The IP address of the gateway's Internet-routable external interface.
     */
    readonly ipAddress: string;
    /**
     * Map of key-value pairs assigned to the gateway.
     */
    readonly tags: {[key: string]: any};
    /**
     * (Optional) The type of customer gateway. The only type AWS supports at this time is "ipsec.1".
     */
    readonly type: string;
}
