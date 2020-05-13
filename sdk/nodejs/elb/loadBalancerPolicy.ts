// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a load balancer policy, which can be attached to an ELB listener or backend server.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * import * as fs from "fs";
 *
 * const wuTang = new aws.elb.LoadBalancer("wu-tang", {
 *     availabilityZones: ["us-east-1a"],
 *     listeners: [{
 *         instancePort: 443,
 *         instanceProtocol: "http",
 *         lbPort: 443,
 *         lbProtocol: "https",
 *         sslCertificateId: "arn:aws:iam::000000000000:server-certificate/wu-tang.net",
 *     }],
 *     tags: {
 *         Name: "wu-tang",
 *     },
 * });
 * const wuTangCaPubkeyPolicy = new aws.elb.LoadBalancerPolicy("wu-tang-ca-pubkey-policy", {
 *     loadBalancerName: wu_tang.name,
 *     policyAttributes: [{
 *         name: "PublicKey",
 *         value: fs.readFileSync("wu-tang-pubkey", "utf-8"),
 *     }],
 *     policyName: "wu-tang-ca-pubkey-policy",
 *     policyTypeName: "PublicKeyPolicyType",
 * });
 * const wuTangRootCaBackendAuthPolicy = new aws.elb.LoadBalancerPolicy("wu-tang-root-ca-backend-auth-policy", {
 *     loadBalancerName: wu_tang.name,
 *     policyAttributes: [{
 *         name: "PublicKeyPolicyName",
 *         value: aws_load_balancer_policy_wu_tang_root_ca_pubkey_policy.policyName,
 *     }],
 *     policyName: "wu-tang-root-ca-backend-auth-policy",
 *     policyTypeName: "BackendServerAuthenticationPolicyType",
 * });
 * const wuTangSsl = new aws.elb.LoadBalancerPolicy("wu-tang-ssl", {
 *     loadBalancerName: wu_tang.name,
 *     policyAttributes: [
 *         {
 *             name: "ECDHE-ECDSA-AES128-GCM-SHA256",
 *             value: "true",
 *         },
 *         {
 *             name: "Protocol-TLSv1.2",
 *             value: "true",
 *         },
 *     ],
 *     policyName: "wu-tang-ssl",
 *     policyTypeName: "SSLNegotiationPolicyType",
 * });
 * const wuTangSslTls11 = new aws.elb.LoadBalancerPolicy("wu-tang-ssl-tls-1-1", {
 *     loadBalancerName: wu_tang.name,
 *     policyAttributes: [{
 *         name: "Reference-Security-Policy",
 *         value: "ELBSecurityPolicy-TLS-1-1-2017-01",
 *     }],
 *     policyName: "wu-tang-ssl",
 *     policyTypeName: "SSLNegotiationPolicyType",
 * });
 * const wuTangBackendAuthPolicies443 = new aws.elb.LoadBalancerBackendServerPolicy("wu-tang-backend-auth-policies-443", {
 *     instancePort: 443,
 *     loadBalancerName: wu_tang.name,
 *     policyNames: [wu_tang_root_ca_backend_auth_policy.policyName],
 * });
 * const wuTangListenerPolicies443 = new aws.elb.ListenerPolicy("wu-tang-listener-policies-443", {
 *     loadBalancerName: wu_tang.name,
 *     loadBalancerPort: 443,
 *     policyNames: [wu_tang_ssl.policyName],
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/load_balancer_policy.html.markdown.
 */
export class LoadBalancerPolicy extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancerPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalancerPolicyState, opts?: pulumi.CustomResourceOptions): LoadBalancerPolicy {
        return new LoadBalancerPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:elb/loadBalancerPolicy:LoadBalancerPolicy';

    /**
     * Returns true if the given object is an instance of LoadBalancerPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalancerPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalancerPolicy.__pulumiType;
    }

    /**
     * The load balancer on which the policy is defined.
     */
    public readonly loadBalancerName!: pulumi.Output<string>;
    /**
     * Policy attribute to apply to the policy.
     */
    public readonly policyAttributes!: pulumi.Output<outputs.elb.LoadBalancerPolicyPolicyAttribute[] | undefined>;
    /**
     * The name of the load balancer policy.
     */
    public readonly policyName!: pulumi.Output<string>;
    /**
     * The policy type.
     */
    public readonly policyTypeName!: pulumi.Output<string>;

    /**
     * Create a LoadBalancerPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadBalancerPolicyArgs | LoadBalancerPolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LoadBalancerPolicyState | undefined;
            inputs["loadBalancerName"] = state ? state.loadBalancerName : undefined;
            inputs["policyAttributes"] = state ? state.policyAttributes : undefined;
            inputs["policyName"] = state ? state.policyName : undefined;
            inputs["policyTypeName"] = state ? state.policyTypeName : undefined;
        } else {
            const args = argsOrState as LoadBalancerPolicyArgs | undefined;
            if (!args || args.loadBalancerName === undefined) {
                throw new Error("Missing required property 'loadBalancerName'");
            }
            if (!args || args.policyName === undefined) {
                throw new Error("Missing required property 'policyName'");
            }
            if (!args || args.policyTypeName === undefined) {
                throw new Error("Missing required property 'policyTypeName'");
            }
            inputs["loadBalancerName"] = args ? args.loadBalancerName : undefined;
            inputs["policyAttributes"] = args ? args.policyAttributes : undefined;
            inputs["policyName"] = args ? args.policyName : undefined;
            inputs["policyTypeName"] = args ? args.policyTypeName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "aws:elasticloadbalancing/loadBalancerPolicy:LoadBalancerPolicy" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(LoadBalancerPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LoadBalancerPolicy resources.
 */
export interface LoadBalancerPolicyState {
    /**
     * The load balancer on which the policy is defined.
     */
    readonly loadBalancerName?: pulumi.Input<string>;
    /**
     * Policy attribute to apply to the policy.
     */
    readonly policyAttributes?: pulumi.Input<pulumi.Input<inputs.elb.LoadBalancerPolicyPolicyAttribute>[]>;
    /**
     * The name of the load balancer policy.
     */
    readonly policyName?: pulumi.Input<string>;
    /**
     * The policy type.
     */
    readonly policyTypeName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadBalancerPolicy resource.
 */
export interface LoadBalancerPolicyArgs {
    /**
     * The load balancer on which the policy is defined.
     */
    readonly loadBalancerName: pulumi.Input<string>;
    /**
     * Policy attribute to apply to the policy.
     */
    readonly policyAttributes?: pulumi.Input<pulumi.Input<inputs.elb.LoadBalancerPolicyPolicyAttribute>[]>;
    /**
     * The name of the load balancer policy.
     */
    readonly policyName: pulumi.Input<string>;
    /**
     * The policy type.
     */
    readonly policyTypeName: pulumi.Input<string>;
}
