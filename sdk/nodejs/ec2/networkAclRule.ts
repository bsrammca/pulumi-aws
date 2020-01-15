// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Creates an entry (a rule) in a network ACL with the specified rule number.
 * 
 * > **NOTE on Network ACLs and Network ACL Rules:** This provider currently
 * provides both a standalone Network ACL Rule resource and a Network ACL resource with rules
 * defined in-line. At this time you cannot use a Network ACL with in-line rules
 * in conjunction with any Network ACL Rule resources. Doing so will cause
 * a conflict of rule settings and will overwrite rules.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const barNetworkAcl = new aws.ec2.NetworkAcl("bar", {
 *     vpcId: aws_vpc_foo.id,
 * });
 * const barNetworkAclRule = new aws.ec2.NetworkAclRule("bar", {
 *     // Opening to 0.0.0.0/0 can lead to security vulnerabilities.
 *     cidrBlock: "", // add a CIDR block here
 *     egress: false,
 *     fromPort: 22,
 *     networkAclId: barNetworkAcl.id,
 *     protocol: "tcp",
 *     ruleAction: "allow",
 *     ruleNumber: 200,
 *     toPort: 22,
 * });
 * ```
 * 
 * > **Note:** One of either `cidrBlock` or `ipv6CidrBlock` is required.
 * 
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/network_acl_rule.html.markdown.
 */
export class NetworkAclRule extends pulumi.CustomResource {
    /**
     * Get an existing NetworkAclRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkAclRuleState, opts?: pulumi.CustomResourceOptions): NetworkAclRule {
        return new NetworkAclRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/networkAclRule:NetworkAclRule';

    /**
     * Returns true if the given object is an instance of NetworkAclRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkAclRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkAclRule.__pulumiType;
    }

    /**
     * The network range to allow or deny, in CIDR notation (for example 172.16.0.0/24 ).
     */
    public readonly cidrBlock!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet). Default `false`.
     */
    public readonly egress!: pulumi.Output<boolean | undefined>;
    /**
     * The from port to match.
     */
    public readonly fromPort!: pulumi.Output<number | undefined>;
    /**
     * ICMP protocol: The ICMP code. Required if specifying ICMP for the protocol. e.g. -1
     */
    public readonly icmpCode!: pulumi.Output<string | undefined>;
    /**
     * ICMP protocol: The ICMP type. Required if specifying ICMP for the protocol. e.g. -1
     */
    public readonly icmpType!: pulumi.Output<string | undefined>;
    /**
     * The IPv6 CIDR block to allow or deny.
     */
    public readonly ipv6CidrBlock!: pulumi.Output<string | undefined>;
    /**
     * The ID of the network ACL.
     */
    public readonly networkAclId!: pulumi.Output<string>;
    /**
     * The protocol. A value of -1 means all protocols.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Indicates whether to allow or deny the traffic that matches the rule. Accepted values: `allow` | `deny`
     */
    public readonly ruleAction!: pulumi.Output<string>;
    /**
     * The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.
     */
    public readonly ruleNumber!: pulumi.Output<number>;
    /**
     * The to port to match.
     */
    public readonly toPort!: pulumi.Output<number | undefined>;

    /**
     * Create a NetworkAclRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkAclRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkAclRuleArgs | NetworkAclRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NetworkAclRuleState | undefined;
            inputs["cidrBlock"] = state ? state.cidrBlock : undefined;
            inputs["egress"] = state ? state.egress : undefined;
            inputs["fromPort"] = state ? state.fromPort : undefined;
            inputs["icmpCode"] = state ? state.icmpCode : undefined;
            inputs["icmpType"] = state ? state.icmpType : undefined;
            inputs["ipv6CidrBlock"] = state ? state.ipv6CidrBlock : undefined;
            inputs["networkAclId"] = state ? state.networkAclId : undefined;
            inputs["protocol"] = state ? state.protocol : undefined;
            inputs["ruleAction"] = state ? state.ruleAction : undefined;
            inputs["ruleNumber"] = state ? state.ruleNumber : undefined;
            inputs["toPort"] = state ? state.toPort : undefined;
        } else {
            const args = argsOrState as NetworkAclRuleArgs | undefined;
            if (!args || args.networkAclId === undefined) {
                throw new Error("Missing required property 'networkAclId'");
            }
            if (!args || args.protocol === undefined) {
                throw new Error("Missing required property 'protocol'");
            }
            if (!args || args.ruleAction === undefined) {
                throw new Error("Missing required property 'ruleAction'");
            }
            if (!args || args.ruleNumber === undefined) {
                throw new Error("Missing required property 'ruleNumber'");
            }
            inputs["cidrBlock"] = args ? args.cidrBlock : undefined;
            inputs["egress"] = args ? args.egress : undefined;
            inputs["fromPort"] = args ? args.fromPort : undefined;
            inputs["icmpCode"] = args ? args.icmpCode : undefined;
            inputs["icmpType"] = args ? args.icmpType : undefined;
            inputs["ipv6CidrBlock"] = args ? args.ipv6CidrBlock : undefined;
            inputs["networkAclId"] = args ? args.networkAclId : undefined;
            inputs["protocol"] = args ? args.protocol : undefined;
            inputs["ruleAction"] = args ? args.ruleAction : undefined;
            inputs["ruleNumber"] = args ? args.ruleNumber : undefined;
            inputs["toPort"] = args ? args.toPort : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(NetworkAclRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NetworkAclRule resources.
 */
export interface NetworkAclRuleState {
    /**
     * The network range to allow or deny, in CIDR notation (for example 172.16.0.0/24 ).
     */
    readonly cidrBlock?: pulumi.Input<string>;
    /**
     * Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet). Default `false`.
     */
    readonly egress?: pulumi.Input<boolean>;
    /**
     * The from port to match.
     */
    readonly fromPort?: pulumi.Input<number>;
    /**
     * ICMP protocol: The ICMP code. Required if specifying ICMP for the protocol. e.g. -1
     */
    readonly icmpCode?: pulumi.Input<string>;
    /**
     * ICMP protocol: The ICMP type. Required if specifying ICMP for the protocol. e.g. -1
     */
    readonly icmpType?: pulumi.Input<string>;
    /**
     * The IPv6 CIDR block to allow or deny.
     */
    readonly ipv6CidrBlock?: pulumi.Input<string>;
    /**
     * The ID of the network ACL.
     */
    readonly networkAclId?: pulumi.Input<string>;
    /**
     * The protocol. A value of -1 means all protocols.
     */
    readonly protocol?: pulumi.Input<string>;
    /**
     * Indicates whether to allow or deny the traffic that matches the rule. Accepted values: `allow` | `deny`
     */
    readonly ruleAction?: pulumi.Input<string>;
    /**
     * The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.
     */
    readonly ruleNumber?: pulumi.Input<number>;
    /**
     * The to port to match.
     */
    readonly toPort?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a NetworkAclRule resource.
 */
export interface NetworkAclRuleArgs {
    /**
     * The network range to allow or deny, in CIDR notation (for example 172.16.0.0/24 ).
     */
    readonly cidrBlock?: pulumi.Input<string>;
    /**
     * Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet). Default `false`.
     */
    readonly egress?: pulumi.Input<boolean>;
    /**
     * The from port to match.
     */
    readonly fromPort?: pulumi.Input<number>;
    /**
     * ICMP protocol: The ICMP code. Required if specifying ICMP for the protocol. e.g. -1
     */
    readonly icmpCode?: pulumi.Input<string>;
    /**
     * ICMP protocol: The ICMP type. Required if specifying ICMP for the protocol. e.g. -1
     */
    readonly icmpType?: pulumi.Input<string>;
    /**
     * The IPv6 CIDR block to allow or deny.
     */
    readonly ipv6CidrBlock?: pulumi.Input<string>;
    /**
     * The ID of the network ACL.
     */
    readonly networkAclId: pulumi.Input<string>;
    /**
     * The protocol. A value of -1 means all protocols.
     */
    readonly protocol: pulumi.Input<string>;
    /**
     * Indicates whether to allow or deny the traffic that matches the rule. Accepted values: `allow` | `deny`
     */
    readonly ruleAction: pulumi.Input<string>;
    /**
     * The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.
     */
    readonly ruleNumber: pulumi.Input<number>;
    /**
     * The to port to match.
     */
    readonly toPort?: pulumi.Input<number>;
}
