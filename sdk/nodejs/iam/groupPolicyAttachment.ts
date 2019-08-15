// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

import {ARN} from "../index";
import {Group} from "./group";

/**
 * Attaches a Managed IAM Policy to an IAM group
 * 
 * > **NOTE:** The usage of this resource conflicts with the `aws.iam.PolicyAttachment` resource and will permanently show a difference if both are defined.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/iam_group_policy_attachment.html.markdown.
 */
export class GroupPolicyAttachment extends pulumi.CustomResource {
    /**
     * Get an existing GroupPolicyAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupPolicyAttachmentState, opts?: pulumi.CustomResourceOptions): GroupPolicyAttachment {
        return new GroupPolicyAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:iam/groupPolicyAttachment:GroupPolicyAttachment';

    /**
     * Returns true if the given object is an instance of GroupPolicyAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupPolicyAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupPolicyAttachment.__pulumiType;
    }

    /**
     * The group the policy should be applied to
     */
    public readonly group!: pulumi.Output<Group>;
    /**
     * The ARN of the policy you want to apply
     */
    public readonly policyArn!: pulumi.Output<ARN>;

    /**
     * Create a GroupPolicyAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupPolicyAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupPolicyAttachmentArgs | GroupPolicyAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as GroupPolicyAttachmentState | undefined;
            inputs["group"] = state ? state.group : undefined;
            inputs["policyArn"] = state ? state.policyArn : undefined;
        } else {
            const args = argsOrState as GroupPolicyAttachmentArgs | undefined;
            if (!args || args.group === undefined) {
                throw new Error("Missing required property 'group'");
            }
            if (!args || args.policyArn === undefined) {
                throw new Error("Missing required property 'policyArn'");
            }
            inputs["group"] = args ? args.group : undefined;
            inputs["policyArn"] = args ? args.policyArn : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(GroupPolicyAttachment.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering GroupPolicyAttachment resources.
 */
export interface GroupPolicyAttachmentState {
    /**
     * The group the policy should be applied to
     */
    readonly group?: pulumi.Input<Group>;
    /**
     * The ARN of the policy you want to apply
     */
    readonly policyArn?: pulumi.Input<ARN>;
}

/**
 * The set of arguments for constructing a GroupPolicyAttachment resource.
 */
export interface GroupPolicyAttachmentArgs {
    /**
     * The group the policy should be applied to
     */
    readonly group: pulumi.Input<Group>;
    /**
     * The ARN of the policy you want to apply
     */
    readonly policyArn: pulumi.Input<ARN>;
}
