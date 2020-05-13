// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a resource to manage the accepter's side of a VPC Peering Connection.
 *
 * When a cross-account (requester's AWS account differs from the accepter's AWS account) or an inter-region
 * VPC Peering Connection is created, a VPC Peering Connection resource is automatically created in the
 * accepter's account.
 * The requester can use the `aws.ec2.VpcPeeringConnection` resource to manage its side of the connection
 * and the accepter can use the `aws.ec2.VpcPeeringConnectionAccepter` resource to "adopt" its side of the
 * connection into management.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const peer = new aws.Provider("peer", {
 *     region: "us-west-2",
 * });
 * const main = new aws.ec2.Vpc("main", {
 *     cidrBlock: "10.0.0.0/16",
 * });
 * const peerVpc = new aws.ec2.Vpc("peer", {
 *     cidrBlock: "10.1.0.0/16",
 * }, { provider: peer });
 * const peerCallerIdentity = pulumi.output(aws.getCallerIdentity({ provider: peer, async: true }));
 * // Requester's side of the connection.
 * const peerVpcPeeringConnection = new aws.ec2.VpcPeeringConnection("peer", {
 *     autoAccept: false,
 *     peerOwnerId: peerCallerIdentity.accountId,
 *     peerRegion: "us-west-2",
 *     peerVpcId: peerVpc.id,
 *     tags: {
 *         Side: "Requester",
 *     },
 *     vpcId: main.id,
 * });
 * // Accepter's side of the connection.
 * const peerVpcPeeringConnectionAccepter = new aws.ec2.VpcPeeringConnectionAccepter("peer", {
 *     autoAccept: true,
 *     tags: {
 *         Side: "Accepter",
 *     },
 *     vpcPeeringConnectionId: peerVpcPeeringConnection.id,
 * }, { provider: peer });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/vpc_peering_connection_accepter.html.markdown.
 */
export class VpcPeeringConnectionAccepter extends pulumi.CustomResource {
    /**
     * Get an existing VpcPeeringConnectionAccepter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcPeeringConnectionAccepterState, opts?: pulumi.CustomResourceOptions): VpcPeeringConnectionAccepter {
        return new VpcPeeringConnectionAccepter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/vpcPeeringConnectionAccepter:VpcPeeringConnectionAccepter';

    /**
     * Returns true if the given object is an instance of VpcPeeringConnectionAccepter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcPeeringConnectionAccepter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcPeeringConnectionAccepter.__pulumiType;
    }

    /**
     * The status of the VPC Peering Connection request.
     */
    public /*out*/ readonly acceptStatus!: pulumi.Output<string>;
    /**
     * A configuration block that describes [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the accepter VPC.
     */
    public readonly accepter!: pulumi.Output<outputs.ec2.VpcPeeringConnectionAccepterAccepter>;
    /**
     * Whether or not to accept the peering request. Defaults to `false`.
     */
    public readonly autoAccept!: pulumi.Output<boolean | undefined>;
    /**
     * The AWS account ID of the owner of the requester VPC.
     */
    public /*out*/ readonly peerOwnerId!: pulumi.Output<string>;
    /**
     * The region of the accepter VPC.
     */
    public /*out*/ readonly peerRegion!: pulumi.Output<string>;
    /**
     * The ID of the requester VPC.
     */
    public /*out*/ readonly peerVpcId!: pulumi.Output<string>;
    /**
     * A configuration block that describes [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the requester VPC.
     */
    public readonly requester!: pulumi.Output<outputs.ec2.VpcPeeringConnectionAccepterRequester>;
    /**
     * A map of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The ID of the accepter VPC.
     */
    public /*out*/ readonly vpcId!: pulumi.Output<string>;
    /**
     * The VPC Peering Connection ID to manage.
     */
    public readonly vpcPeeringConnectionId!: pulumi.Output<string>;

    /**
     * Create a VpcPeeringConnectionAccepter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcPeeringConnectionAccepterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcPeeringConnectionAccepterArgs | VpcPeeringConnectionAccepterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as VpcPeeringConnectionAccepterState | undefined;
            inputs["acceptStatus"] = state ? state.acceptStatus : undefined;
            inputs["accepter"] = state ? state.accepter : undefined;
            inputs["autoAccept"] = state ? state.autoAccept : undefined;
            inputs["peerOwnerId"] = state ? state.peerOwnerId : undefined;
            inputs["peerRegion"] = state ? state.peerRegion : undefined;
            inputs["peerVpcId"] = state ? state.peerVpcId : undefined;
            inputs["requester"] = state ? state.requester : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
            inputs["vpcPeeringConnectionId"] = state ? state.vpcPeeringConnectionId : undefined;
        } else {
            const args = argsOrState as VpcPeeringConnectionAccepterArgs | undefined;
            if (!args || args.vpcPeeringConnectionId === undefined) {
                throw new Error("Missing required property 'vpcPeeringConnectionId'");
            }
            inputs["accepter"] = args ? args.accepter : undefined;
            inputs["autoAccept"] = args ? args.autoAccept : undefined;
            inputs["requester"] = args ? args.requester : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpcPeeringConnectionId"] = args ? args.vpcPeeringConnectionId : undefined;
            inputs["acceptStatus"] = undefined /*out*/;
            inputs["peerOwnerId"] = undefined /*out*/;
            inputs["peerRegion"] = undefined /*out*/;
            inputs["peerVpcId"] = undefined /*out*/;
            inputs["vpcId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(VpcPeeringConnectionAccepter.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VpcPeeringConnectionAccepter resources.
 */
export interface VpcPeeringConnectionAccepterState {
    /**
     * The status of the VPC Peering Connection request.
     */
    readonly acceptStatus?: pulumi.Input<string>;
    /**
     * A configuration block that describes [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the accepter VPC.
     */
    readonly accepter?: pulumi.Input<inputs.ec2.VpcPeeringConnectionAccepterAccepter>;
    /**
     * Whether or not to accept the peering request. Defaults to `false`.
     */
    readonly autoAccept?: pulumi.Input<boolean>;
    /**
     * The AWS account ID of the owner of the requester VPC.
     */
    readonly peerOwnerId?: pulumi.Input<string>;
    /**
     * The region of the accepter VPC.
     */
    readonly peerRegion?: pulumi.Input<string>;
    /**
     * The ID of the requester VPC.
     */
    readonly peerVpcId?: pulumi.Input<string>;
    /**
     * A configuration block that describes [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the requester VPC.
     */
    readonly requester?: pulumi.Input<inputs.ec2.VpcPeeringConnectionAccepterRequester>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The ID of the accepter VPC.
     */
    readonly vpcId?: pulumi.Input<string>;
    /**
     * The VPC Peering Connection ID to manage.
     */
    readonly vpcPeeringConnectionId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpcPeeringConnectionAccepter resource.
 */
export interface VpcPeeringConnectionAccepterArgs {
    /**
     * A configuration block that describes [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the accepter VPC.
     */
    readonly accepter?: pulumi.Input<inputs.ec2.VpcPeeringConnectionAccepterAccepter>;
    /**
     * Whether or not to accept the peering request. Defaults to `false`.
     */
    readonly autoAccept?: pulumi.Input<boolean>;
    /**
     * A configuration block that describes [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options set for the requester VPC.
     */
    readonly requester?: pulumi.Input<inputs.ec2.VpcPeeringConnectionAccepterRequester>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The VPC Peering Connection ID to manage.
     */
    readonly vpcPeeringConnectionId: pulumi.Input<string>;
}
