// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource to manage an [AWS Organizations policy](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.organizations.Policy("example", {
 *     content: `{
 *   "Version": "2012-10-17",
 *   "Statement": {
 *     "Effect": "Allow",
 *     "Action": "*",
 *     "Resource": "*"
 *   }
 * }
 * `,
 * });
 * ```
 * 
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/organizations_policy.html.markdown.
 */
export class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyState, opts?: pulumi.CustomResourceOptions): Policy {
        return new Policy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:organizations/policy:Policy';

    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Policy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Policy.__pulumiType;
    }

    /**
     * Amazon Resource Name (ARN) of the policy.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The policy content to add to the new policy. For example, if you create a [service control policy (SCP)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html), this string must be JSON text that specifies the permissions that admins in attached accounts can delegate to their users, groups, and roles. For more information about the SCP syntax, see the [Service Control Policy Syntax documentation](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html).
     */
    public readonly content!: pulumi.Output<string>;
    /**
     * A description to assign to the policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The friendly name to assign to the policy.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The type of policy to create. Currently, the only valid value is `SERVICE_CONTROL_POLICY` (SCP).
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyArgs | PolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PolicyState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["content"] = state ? state.content : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as PolicyArgs | undefined;
            if (!args || args.content === undefined) {
                throw new Error("Missing required property 'content'");
            }
            inputs["content"] = args ? args.content : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Policy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Policy resources.
 */
export interface PolicyState {
    /**
     * Amazon Resource Name (ARN) of the policy.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The policy content to add to the new policy. For example, if you create a [service control policy (SCP)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html), this string must be JSON text that specifies the permissions that admins in attached accounts can delegate to their users, groups, and roles. For more information about the SCP syntax, see the [Service Control Policy Syntax documentation](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html).
     */
    readonly content?: pulumi.Input<string>;
    /**
     * A description to assign to the policy.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The friendly name to assign to the policy.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The type of policy to create. Currently, the only valid value is `SERVICE_CONTROL_POLICY` (SCP).
     */
    readonly type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * The policy content to add to the new policy. For example, if you create a [service control policy (SCP)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html), this string must be JSON text that specifies the permissions that admins in attached accounts can delegate to their users, groups, and roles. For more information about the SCP syntax, see the [Service Control Policy Syntax documentation](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html).
     */
    readonly content: pulumi.Input<string>;
    /**
     * A description to assign to the policy.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The friendly name to assign to the policy.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The type of policy to create. Currently, the only valid value is `SERVICE_CONTROL_POLICY` (SCP).
     */
    readonly type?: pulumi.Input<string>;
}
