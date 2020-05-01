// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a load balancer cookie stickiness policy, which allows an ELB to control the sticky session lifetime of the browser.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const lb = new aws.elb.LoadBalancer("lb", {
 *     availabilityZones: ["us-east-1a"],
 *     listeners: [{
 *         instancePort: 8000,
 *         instanceProtocol: "http",
 *         lbPort: 80,
 *         lbProtocol: "http",
 *     }],
 * });
 * const foo = new aws.elb.LoadBalancerCookieStickinessPolicy("foo", {
 *     cookieExpirationPeriod: 600,
 *     lbPort: 80,
 *     loadBalancer: lb.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lb_cookie_stickiness_policy.html.markdown.
 */
/** @deprecated aws.elasticloadbalancing.LoadBalancerCookieStickinessPolicy has been deprecated in favour of aws.elb.LoadBalancerCookieStickinessPolicy */
export class LoadBalancerCookieStickinessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancerCookieStickinessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalancerCookieStickinessPolicyState, opts?: pulumi.CustomResourceOptions): LoadBalancerCookieStickinessPolicy {
        pulumi.log.warn("LoadBalancerCookieStickinessPolicy is deprecated: aws.elasticloadbalancing.LoadBalancerCookieStickinessPolicy has been deprecated in favour of aws.elb.LoadBalancerCookieStickinessPolicy")
        return new LoadBalancerCookieStickinessPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:elasticloadbalancing/loadBalancerCookieStickinessPolicy:LoadBalancerCookieStickinessPolicy';

    /**
     * Returns true if the given object is an instance of LoadBalancerCookieStickinessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalancerCookieStickinessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalancerCookieStickinessPolicy.__pulumiType;
    }

    /**
     * The time period after which
     * the session cookie should be considered stale, expressed in seconds.
     */
    public readonly cookieExpirationPeriod!: pulumi.Output<number | undefined>;
    /**
     * The load balancer port to which the policy
     * should be applied. This must be an active listener on the load
     * balancer.
     */
    public readonly lbPort!: pulumi.Output<number>;
    /**
     * The load balancer to which the policy
     * should be attached.
     */
    public readonly loadBalancer!: pulumi.Output<string>;
    /**
     * The name of the stickiness policy.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a LoadBalancerCookieStickinessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated aws.elasticloadbalancing.LoadBalancerCookieStickinessPolicy has been deprecated in favour of aws.elb.LoadBalancerCookieStickinessPolicy */
    constructor(name: string, args: LoadBalancerCookieStickinessPolicyArgs, opts?: pulumi.CustomResourceOptions)
    /** @deprecated aws.elasticloadbalancing.LoadBalancerCookieStickinessPolicy has been deprecated in favour of aws.elb.LoadBalancerCookieStickinessPolicy */
    constructor(name: string, argsOrState?: LoadBalancerCookieStickinessPolicyArgs | LoadBalancerCookieStickinessPolicyState, opts?: pulumi.CustomResourceOptions) {
        pulumi.log.warn("LoadBalancerCookieStickinessPolicy is deprecated: aws.elasticloadbalancing.LoadBalancerCookieStickinessPolicy has been deprecated in favour of aws.elb.LoadBalancerCookieStickinessPolicy")
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LoadBalancerCookieStickinessPolicyState | undefined;
            inputs["cookieExpirationPeriod"] = state ? state.cookieExpirationPeriod : undefined;
            inputs["lbPort"] = state ? state.lbPort : undefined;
            inputs["loadBalancer"] = state ? state.loadBalancer : undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as LoadBalancerCookieStickinessPolicyArgs | undefined;
            if (!args || args.lbPort === undefined) {
                throw new Error("Missing required property 'lbPort'");
            }
            if (!args || args.loadBalancer === undefined) {
                throw new Error("Missing required property 'loadBalancer'");
            }
            inputs["cookieExpirationPeriod"] = args ? args.cookieExpirationPeriod : undefined;
            inputs["lbPort"] = args ? args.lbPort : undefined;
            inputs["loadBalancer"] = args ? args.loadBalancer : undefined;
            inputs["name"] = args ? args.name : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(LoadBalancerCookieStickinessPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LoadBalancerCookieStickinessPolicy resources.
 */
export interface LoadBalancerCookieStickinessPolicyState {
    /**
     * The time period after which
     * the session cookie should be considered stale, expressed in seconds.
     */
    readonly cookieExpirationPeriod?: pulumi.Input<number>;
    /**
     * The load balancer port to which the policy
     * should be applied. This must be an active listener on the load
     * balancer.
     */
    readonly lbPort?: pulumi.Input<number>;
    /**
     * The load balancer to which the policy
     * should be attached.
     */
    readonly loadBalancer?: pulumi.Input<string>;
    /**
     * The name of the stickiness policy.
     */
    readonly name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadBalancerCookieStickinessPolicy resource.
 */
export interface LoadBalancerCookieStickinessPolicyArgs {
    /**
     * The time period after which
     * the session cookie should be considered stale, expressed in seconds.
     */
    readonly cookieExpirationPeriod?: pulumi.Input<number>;
    /**
     * The load balancer port to which the policy
     * should be applied. This must be an active listener on the load
     * balancer.
     */
    readonly lbPort: pulumi.Input<number>;
    /**
     * The load balancer to which the policy
     * should be attached.
     */
    readonly loadBalancer: pulumi.Input<string>;
    /**
     * The name of the stickiness policy.
     */
    readonly name?: pulumi.Input<string>;
}
