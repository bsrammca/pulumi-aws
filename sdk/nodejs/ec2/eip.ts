// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides an Elastic IP resource.
 * 
 * > **Note:** EIP may require IGW to exist prior to association. Use `dependsOn` to set an explicit dependency on the IGW.
 * 
 * > **Note:** Do not use `networkInterface` to associate the EIP to `aws.lb.LoadBalancer` or `aws.ec2.NatGateway` resources. Instead use the `allocationId` available in those resources to allow AWS to manage the association, otherwise you will see `AuthFailure` errors.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/eip.html.markdown.
 */
export class Eip extends pulumi.CustomResource {
    /**
     * Get an existing Eip resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EipState, opts?: pulumi.CustomResourceOptions): Eip {
        return new Eip(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/eip:Eip';

    /**
     * Returns true if the given object is an instance of Eip.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Eip {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Eip.__pulumiType;
    }

    public /*out*/ readonly allocationId!: pulumi.Output<string>;
    /**
     * A user specified primary or secondary private IP address to
     * associate with the Elastic IP address. If no private IP address is specified,
     * the Elastic IP address is associated with the primary private IP address.
     */
    public readonly associateWithPrivateIp!: pulumi.Output<string | undefined>;
    public /*out*/ readonly associationId!: pulumi.Output<string>;
    public /*out*/ readonly domain!: pulumi.Output<string>;
    /**
     * EC2 instance ID.
     */
    public readonly instance!: pulumi.Output<string>;
    /**
     * Network interface ID to associate with.
     */
    public readonly networkInterface!: pulumi.Output<string>;
    /**
     * The Private DNS associated with the Elastic IP address (if in VPC).
     */
    public /*out*/ readonly privateDns!: pulumi.Output<string>;
    /**
     * Contains the private IP address (if in VPC).
     */
    public /*out*/ readonly privateIp!: pulumi.Output<string>;
    /**
     * Public DNS associated with the Elastic IP address.
     */
    public /*out*/ readonly publicDns!: pulumi.Output<string>;
    /**
     * Contains the public IP address.
     */
    public /*out*/ readonly publicIp!: pulumi.Output<string>;
    /**
     * EC2 IPv4 address pool identifier or `amazon`. This option is only available for VPC EIPs.
     */
    public readonly publicIpv4Pool!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Boolean if the EIP is in a VPC or not.
     */
    public readonly vpc!: pulumi.Output<boolean>;

    /**
     * Create a Eip resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: EipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EipArgs | EipState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EipState | undefined;
            inputs["allocationId"] = state ? state.allocationId : undefined;
            inputs["associateWithPrivateIp"] = state ? state.associateWithPrivateIp : undefined;
            inputs["associationId"] = state ? state.associationId : undefined;
            inputs["domain"] = state ? state.domain : undefined;
            inputs["instance"] = state ? state.instance : undefined;
            inputs["networkInterface"] = state ? state.networkInterface : undefined;
            inputs["privateDns"] = state ? state.privateDns : undefined;
            inputs["privateIp"] = state ? state.privateIp : undefined;
            inputs["publicDns"] = state ? state.publicDns : undefined;
            inputs["publicIp"] = state ? state.publicIp : undefined;
            inputs["publicIpv4Pool"] = state ? state.publicIpv4Pool : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpc"] = state ? state.vpc : undefined;
        } else {
            const args = argsOrState as EipArgs | undefined;
            inputs["associateWithPrivateIp"] = args ? args.associateWithPrivateIp : undefined;
            inputs["instance"] = args ? args.instance : undefined;
            inputs["networkInterface"] = args ? args.networkInterface : undefined;
            inputs["publicIpv4Pool"] = args ? args.publicIpv4Pool : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpc"] = args ? args.vpc : undefined;
            inputs["allocationId"] = undefined /*out*/;
            inputs["associationId"] = undefined /*out*/;
            inputs["domain"] = undefined /*out*/;
            inputs["privateDns"] = undefined /*out*/;
            inputs["privateIp"] = undefined /*out*/;
            inputs["publicDns"] = undefined /*out*/;
            inputs["publicIp"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Eip.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Eip resources.
 */
export interface EipState {
    readonly allocationId?: pulumi.Input<string>;
    /**
     * A user specified primary or secondary private IP address to
     * associate with the Elastic IP address. If no private IP address is specified,
     * the Elastic IP address is associated with the primary private IP address.
     */
    readonly associateWithPrivateIp?: pulumi.Input<string>;
    readonly associationId?: pulumi.Input<string>;
    readonly domain?: pulumi.Input<string>;
    /**
     * EC2 instance ID.
     */
    readonly instance?: pulumi.Input<string>;
    /**
     * Network interface ID to associate with.
     */
    readonly networkInterface?: pulumi.Input<string>;
    /**
     * The Private DNS associated with the Elastic IP address (if in VPC).
     */
    readonly privateDns?: pulumi.Input<string>;
    /**
     * Contains the private IP address (if in VPC).
     */
    readonly privateIp?: pulumi.Input<string>;
    /**
     * Public DNS associated with the Elastic IP address.
     */
    readonly publicDns?: pulumi.Input<string>;
    /**
     * Contains the public IP address.
     */
    readonly publicIp?: pulumi.Input<string>;
    /**
     * EC2 IPv4 address pool identifier or `amazon`. This option is only available for VPC EIPs.
     */
    readonly publicIpv4Pool?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Boolean if the EIP is in a VPC or not.
     */
    readonly vpc?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Eip resource.
 */
export interface EipArgs {
    /**
     * A user specified primary or secondary private IP address to
     * associate with the Elastic IP address. If no private IP address is specified,
     * the Elastic IP address is associated with the primary private IP address.
     */
    readonly associateWithPrivateIp?: pulumi.Input<string>;
    /**
     * EC2 instance ID.
     */
    readonly instance?: pulumi.Input<string>;
    /**
     * Network interface ID to associate with.
     */
    readonly networkInterface?: pulumi.Input<string>;
    /**
     * EC2 IPv4 address pool identifier or `amazon`. This option is only available for VPC EIPs.
     */
    readonly publicIpv4Pool?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Boolean if the EIP is in a VPC or not.
     */
    readonly vpc?: pulumi.Input<boolean>;
}
