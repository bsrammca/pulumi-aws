// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * > **Note:** `aws.alb.Listener` is known as `aws.lb.Listener`. The functionality is identical.
 *
 * Provides information about a Load Balancer Listener.
 *
 * This data source can prove useful when a module accepts an LB Listener as an
 * input variable and needs to know the LB it is attached to, or other
 * information specific to the listener in question.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const config = new pulumi.Config();
 * const listenerArn = config.require("listenerArn");
 *
 * const listener = pulumi.output(aws.lb.getListener({
 *     arn: listenerArn,
 * }, { async: true }));
 * const selected = pulumi.output(aws.lb.getLoadBalancer({
 *     name: "default-public",
 * }, { async: true }));
 * const selected443 = selected.apply(selected => aws.lb.getListener({
 *     loadBalancerArn: selected.arn!,
 *     port: 443,
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/lb_listener.html.markdown.
 */
export function getListener(args?: GetListenerArgs, opts?: pulumi.InvokeOptions): Promise<GetListenerResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:alb/getListener:getListener", {
        "arn": args.arn,
        "loadBalancerArn": args.loadBalancerArn,
        "port": args.port,
    }, opts);
}

/**
 * A collection of arguments for invoking getListener.
 */
export interface GetListenerArgs {
    /**
     * The arn of the listener. Required if `loadBalancerArn` and `port` is not set.
     */
    readonly arn?: string;
    /**
     * The arn of the load balancer. Required if `arn` is not set.
     */
    readonly loadBalancerArn?: string;
    /**
     * The port of the listener. Required if `arn` is not set.
     */
    readonly port?: number;
}

/**
 * A collection of values returned by getListener.
 */
export interface GetListenerResult {
    readonly arn: string;
    readonly certificateArn: string;
    readonly defaultActions: outputs.alb.GetListenerDefaultAction[];
    readonly loadBalancerArn: string;
    readonly port: number;
    readonly protocol: string;
    readonly sslPolicy: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
