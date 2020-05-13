// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a CloudFormation StackSet Instance. Instances are managed in the account and region of the StackSet after the target account permissions have been configured. Additional information about StackSets can be found in the [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html).
 *
 * > **NOTE:** All target accounts must have an IAM Role created that matches the name of the execution role configured in the StackSet (the `executionRoleName` argument in the `aws.cloudformation.StackSet` resource) in a trust relationship with the administrative account or administration IAM Role. The execution role must have appropriate permissions to manage resources defined in the template along with those required for StackSets to operate. See the [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html) for more details.
 *
 * > **NOTE:** To retain the Stack during resource destroy, ensure `retainStack` has been set to `true` in the state first. This must be completed _before_ a deployment that would destroy the resource.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.cloudformation.StackSetInstance("example", {
 *     accountId: "123456789012",
 *     region: "us-east-1",
 *     stackSetName: aws_cloudformation_stack_set_example.name,
 * });
 * ```
 *
 * ### Example IAM Setup in Target Account
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const aWSCloudFormationStackSetExecutionRoleAssumeRolePolicy = aws_iam_role_AWSCloudFormationStackSetAdministrationRole.arn.apply(arn => aws.iam.getPolicyDocument({
 *     statements: [{
 *         actions: ["sts:AssumeRole"],
 *         effect: "Allow",
 *         principals: [{
 *             identifiers: [arn],
 *             type: "AWS",
 *         }],
 *     }],
 * }, { async: true }));
 * const aWSCloudFormationStackSetExecutionRole = new aws.iam.Role("AWSCloudFormationStackSetExecutionRole", {
 *     assumeRolePolicy: aWSCloudFormationStackSetExecutionRoleAssumeRolePolicy.json,
 * });
 * // Documentation: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html
 * // Additional IAM permissions necessary depend on the resources defined in the StackSet template
 * const aWSCloudFormationStackSetExecutionRoleMinimumExecutionPolicyPolicyDocument = pulumi.output(aws.iam.getPolicyDocument({
 *     statements: [{
 *         actions: [
 *             "cloudformation:*",
 *             "s3:*",
 *             "sns:*",
 *         ],
 *         effect: "Allow",
 *         resources: ["*"],
 *     }],
 * }, { async: true }));
 * const aWSCloudFormationStackSetExecutionRoleMinimumExecutionPolicyRolePolicy = new aws.iam.RolePolicy("AWSCloudFormationStackSetExecutionRole_MinimumExecutionPolicy", {
 *     policy: aWSCloudFormationStackSetExecutionRoleMinimumExecutionPolicyPolicyDocument.json,
 *     role: aWSCloudFormationStackSetExecutionRole.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudformation_stack_set_instance.html.markdown.
 */
export class StackSetInstance extends pulumi.CustomResource {
    /**
     * Get an existing StackSetInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StackSetInstanceState, opts?: pulumi.CustomResourceOptions): StackSetInstance {
        return new StackSetInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:cloudformation/stackSetInstance:StackSetInstance';

    /**
     * Returns true if the given object is an instance of StackSetInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StackSetInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StackSetInstance.__pulumiType;
    }

    /**
     * Target AWS Account ID to create a Stack based on the StackSet. Defaults to current account.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * Key-value map of input parameters to override from the StackSet for this Instance.
     */
    public readonly parameterOverrides!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Target AWS Region to create a Stack based on the StackSet. Defaults to current region.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * During resource destroy, remove Instance from StackSet while keeping the Stack and its associated resources. Must be enabled in the state _before_ destroy operation to take effect. You cannot reassociate a retained Stack or add an existing, saved Stack to a new StackSet. Defaults to `false`.
     */
    public readonly retainStack!: pulumi.Output<boolean | undefined>;
    /**
     * Stack identifier
     */
    public /*out*/ readonly stackId!: pulumi.Output<string>;
    /**
     * Name of the StackSet.
     */
    public readonly stackSetName!: pulumi.Output<string>;

    /**
     * Create a StackSetInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StackSetInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StackSetInstanceArgs | StackSetInstanceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as StackSetInstanceState | undefined;
            inputs["accountId"] = state ? state.accountId : undefined;
            inputs["parameterOverrides"] = state ? state.parameterOverrides : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["retainStack"] = state ? state.retainStack : undefined;
            inputs["stackId"] = state ? state.stackId : undefined;
            inputs["stackSetName"] = state ? state.stackSetName : undefined;
        } else {
            const args = argsOrState as StackSetInstanceArgs | undefined;
            if (!args || args.stackSetName === undefined) {
                throw new Error("Missing required property 'stackSetName'");
            }
            inputs["accountId"] = args ? args.accountId : undefined;
            inputs["parameterOverrides"] = args ? args.parameterOverrides : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["retainStack"] = args ? args.retainStack : undefined;
            inputs["stackSetName"] = args ? args.stackSetName : undefined;
            inputs["stackId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(StackSetInstance.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering StackSetInstance resources.
 */
export interface StackSetInstanceState {
    /**
     * Target AWS Account ID to create a Stack based on the StackSet. Defaults to current account.
     */
    readonly accountId?: pulumi.Input<string>;
    /**
     * Key-value map of input parameters to override from the StackSet for this Instance.
     */
    readonly parameterOverrides?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Target AWS Region to create a Stack based on the StackSet. Defaults to current region.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * During resource destroy, remove Instance from StackSet while keeping the Stack and its associated resources. Must be enabled in the state _before_ destroy operation to take effect. You cannot reassociate a retained Stack or add an existing, saved Stack to a new StackSet. Defaults to `false`.
     */
    readonly retainStack?: pulumi.Input<boolean>;
    /**
     * Stack identifier
     */
    readonly stackId?: pulumi.Input<string>;
    /**
     * Name of the StackSet.
     */
    readonly stackSetName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a StackSetInstance resource.
 */
export interface StackSetInstanceArgs {
    /**
     * Target AWS Account ID to create a Stack based on the StackSet. Defaults to current account.
     */
    readonly accountId?: pulumi.Input<string>;
    /**
     * Key-value map of input parameters to override from the StackSet for this Instance.
     */
    readonly parameterOverrides?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Target AWS Region to create a Stack based on the StackSet. Defaults to current region.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * During resource destroy, remove Instance from StackSet while keeping the Stack and its associated resources. Must be enabled in the state _before_ destroy operation to take effect. You cannot reassociate a retained Stack or add an existing, saved Stack to a new StackSet. Defaults to `false`.
     */
    readonly retainStack?: pulumi.Input<boolean>;
    /**
     * Name of the StackSet.
     */
    readonly stackSetName: pulumi.Input<string>;
}
