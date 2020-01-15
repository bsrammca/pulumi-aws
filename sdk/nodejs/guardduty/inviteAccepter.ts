// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource to accept a pending GuardDuty invite on creation, ensure the detector has the correct master account on read, and disassociate with the master account upon removal.
 * 
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/guardduty_invite_accepter.html.markdown.
 */
export class InviteAccepter extends pulumi.CustomResource {
    /**
     * Get an existing InviteAccepter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InviteAccepterState, opts?: pulumi.CustomResourceOptions): InviteAccepter {
        return new InviteAccepter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:guardduty/inviteAccepter:InviteAccepter';

    /**
     * Returns true if the given object is an instance of InviteAccepter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InviteAccepter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InviteAccepter.__pulumiType;
    }

    /**
     * The detector ID of the member GuardDuty account.
     */
    public readonly detectorId!: pulumi.Output<string>;
    /**
     * AWS account ID for master account.
     */
    public readonly masterAccountId!: pulumi.Output<string>;

    /**
     * Create a InviteAccepter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InviteAccepterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InviteAccepterArgs | InviteAccepterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as InviteAccepterState | undefined;
            inputs["detectorId"] = state ? state.detectorId : undefined;
            inputs["masterAccountId"] = state ? state.masterAccountId : undefined;
        } else {
            const args = argsOrState as InviteAccepterArgs | undefined;
            if (!args || args.detectorId === undefined) {
                throw new Error("Missing required property 'detectorId'");
            }
            if (!args || args.masterAccountId === undefined) {
                throw new Error("Missing required property 'masterAccountId'");
            }
            inputs["detectorId"] = args ? args.detectorId : undefined;
            inputs["masterAccountId"] = args ? args.masterAccountId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(InviteAccepter.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering InviteAccepter resources.
 */
export interface InviteAccepterState {
    /**
     * The detector ID of the member GuardDuty account.
     */
    readonly detectorId?: pulumi.Input<string>;
    /**
     * AWS account ID for master account.
     */
    readonly masterAccountId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InviteAccepter resource.
 */
export interface InviteAccepterArgs {
    /**
     * The detector ID of the member GuardDuty account.
     */
    readonly detectorId: pulumi.Input<string>;
    /**
     * AWS account ID for master account.
     */
    readonly masterAccountId: pulumi.Input<string>;
}
