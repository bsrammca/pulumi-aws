// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a CloudFormation StackSet. StackSets allow CloudFormation templates to be easily deployed across multiple accounts and regions via StackSet Instances ([`aws.cloudformation.StackSetInstance` resource](https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html)). Additional information about StackSets can be found in the [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html).
 *
 * > **NOTE:** All template parameters, including those with a `Default`, must be configured or ignored with the `lifecycle` configuration block `ignoreChanges` argument.
 *
 * > **NOTE:** All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignoreChanges` argument.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const aWSCloudFormationStackSetAdministrationRoleAssumeRolePolicy = pulumi.output(aws.iam.getPolicyDocument({
 *     statements: [{
 *         actions: ["sts:AssumeRole"],
 *         effect: "Allow",
 *         principals: [{
 *             identifiers: ["cloudformation.amazonaws.com"],
 *             type: "Service",
 *         }],
 *     }],
 * }, { async: true }));
 * const aWSCloudFormationStackSetAdministrationRole = new aws.iam.Role("AWSCloudFormationStackSetAdministrationRole", {
 *     assumeRolePolicy: aWSCloudFormationStackSetAdministrationRoleAssumeRolePolicy.json,
 * });
 * const example = new aws.cloudformation.StackSet("example", {
 *     administrationRoleArn: aWSCloudFormationStackSetAdministrationRole.arn,
 *     parameters: {
 *         VPCCidr: "10.0.0.0/16",
 *     },
 *     templateBody: `{
 *   "Parameters" : {
 *     "VPCCidr" : {
 *       "Type" : "String",
 *       "Default" : "10.0.0.0/16",
 *       "Description" : "Enter the CIDR block for the VPC. Default is 10.0.0.0/16."
 *     }
 *   },
 *   "Resources" : {
 *     "myVpc": {
 *       "Type" : "AWS::EC2::VPC",
 *       "Properties" : {
 *         "CidrBlock" : { "Ref" : "VPCCidr" },
 *         "Tags" : [
 *           {"Key": "Name", "Value": "Primary_CF_VPC"}
 *         ]
 *       }
 *     }
 *   }
 * }
 * `,
 * });
 * const aWSCloudFormationStackSetAdministrationRoleExecutionPolicyPolicyDocument = example.executionRoleName.apply(executionRoleName => aws.iam.getPolicyDocument({
 *     statements: [{
 *         actions: ["sts:AssumeRole"],
 *         effect: "Allow",
 *         resources: [`arn:aws:iam::*:role/${executionRoleName}`],
 *     }],
 * }, { async: true }));
 * const aWSCloudFormationStackSetAdministrationRoleExecutionPolicyRolePolicy = new aws.iam.RolePolicy("AWSCloudFormationStackSetAdministrationRole_ExecutionPolicy", {
 *     policy: aWSCloudFormationStackSetAdministrationRoleExecutionPolicyPolicyDocument.json,
 *     role: aWSCloudFormationStackSetAdministrationRole.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudformation_stack_set.html.markdown.
 */
export class StackSet extends pulumi.CustomResource {
    /**
     * Get an existing StackSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StackSetState, opts?: pulumi.CustomResourceOptions): StackSet {
        return new StackSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:cloudformation/stackSet:StackSet';

    /**
     * Returns true if the given object is an instance of StackSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StackSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StackSet.__pulumiType;
    }

    /**
     * Amazon Resource Number (ARN) of the IAM Role in the administrator account.
     */
    public readonly administrationRoleArn!: pulumi.Output<string>;
    /**
     * Amazon Resource Name (ARN) of the StackSet.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * A list of capabilities. Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`.
     */
    public readonly capabilities!: pulumi.Output<string[] | undefined>;
    /**
     * Description of the StackSet.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the IAM Role in all target accounts for StackSet operations. Defaults to `AWSCloudFormationStackSetExecutionRole`.
     */
    public readonly executionRoleName!: pulumi.Output<string | undefined>;
    /**
     * Name of the StackSet. The name must be unique in the region where you create your StackSet. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Key-value map of input parameters for the StackSet template. All template parameters, including those with a `Default`, must be configured or ignored with `lifecycle` configuration block `ignoreChanges` argument. All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignoreChanges` argument.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Unique identifier of the StackSet.
     */
    public /*out*/ readonly stackSetId!: pulumi.Output<string>;
    /**
     * Key-value map of tags to associate with this StackSet and the Stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the Stacks. A maximum number of 50 tags can be specified.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * String containing the CloudFormation template body. Maximum size: 51,200 bytes. Conflicts with `templateUrl`.
     */
    public readonly templateBody!: pulumi.Output<string>;
    /**
     * String containing the location of a file containing the CloudFormation template body. The URL must point to a template that is located in an Amazon S3 bucket. Maximum location file size: 460,800 bytes. Conflicts with `templateBody`.
     */
    public readonly templateUrl!: pulumi.Output<string | undefined>;

    /**
     * Create a StackSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StackSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StackSetArgs | StackSetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as StackSetState | undefined;
            inputs["administrationRoleArn"] = state ? state.administrationRoleArn : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["capabilities"] = state ? state.capabilities : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["executionRoleName"] = state ? state.executionRoleName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["stackSetId"] = state ? state.stackSetId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["templateBody"] = state ? state.templateBody : undefined;
            inputs["templateUrl"] = state ? state.templateUrl : undefined;
        } else {
            const args = argsOrState as StackSetArgs | undefined;
            if (!args || args.administrationRoleArn === undefined) {
                throw new Error("Missing required property 'administrationRoleArn'");
            }
            inputs["administrationRoleArn"] = args ? args.administrationRoleArn : undefined;
            inputs["capabilities"] = args ? args.capabilities : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["executionRoleName"] = args ? args.executionRoleName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["templateBody"] = args ? args.templateBody : undefined;
            inputs["templateUrl"] = args ? args.templateUrl : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["stackSetId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(StackSet.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering StackSet resources.
 */
export interface StackSetState {
    /**
     * Amazon Resource Number (ARN) of the IAM Role in the administrator account.
     */
    readonly administrationRoleArn?: pulumi.Input<string>;
    /**
     * Amazon Resource Name (ARN) of the StackSet.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * A list of capabilities. Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`.
     */
    readonly capabilities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of the StackSet.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Name of the IAM Role in all target accounts for StackSet operations. Defaults to `AWSCloudFormationStackSetExecutionRole`.
     */
    readonly executionRoleName?: pulumi.Input<string>;
    /**
     * Name of the StackSet. The name must be unique in the region where you create your StackSet. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Key-value map of input parameters for the StackSet template. All template parameters, including those with a `Default`, must be configured or ignored with `lifecycle` configuration block `ignoreChanges` argument. All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignoreChanges` argument.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Unique identifier of the StackSet.
     */
    readonly stackSetId?: pulumi.Input<string>;
    /**
     * Key-value map of tags to associate with this StackSet and the Stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the Stacks. A maximum number of 50 tags can be specified.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * String containing the CloudFormation template body. Maximum size: 51,200 bytes. Conflicts with `templateUrl`.
     */
    readonly templateBody?: pulumi.Input<string>;
    /**
     * String containing the location of a file containing the CloudFormation template body. The URL must point to a template that is located in an Amazon S3 bucket. Maximum location file size: 460,800 bytes. Conflicts with `templateBody`.
     */
    readonly templateUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a StackSet resource.
 */
export interface StackSetArgs {
    /**
     * Amazon Resource Number (ARN) of the IAM Role in the administrator account.
     */
    readonly administrationRoleArn: pulumi.Input<string>;
    /**
     * A list of capabilities. Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`.
     */
    readonly capabilities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of the StackSet.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Name of the IAM Role in all target accounts for StackSet operations. Defaults to `AWSCloudFormationStackSetExecutionRole`.
     */
    readonly executionRoleName?: pulumi.Input<string>;
    /**
     * Name of the StackSet. The name must be unique in the region where you create your StackSet. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Key-value map of input parameters for the StackSet template. All template parameters, including those with a `Default`, must be configured or ignored with `lifecycle` configuration block `ignoreChanges` argument. All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignoreChanges` argument.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Key-value map of tags to associate with this StackSet and the Stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the Stacks. A maximum number of 50 tags can be specified.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * String containing the CloudFormation template body. Maximum size: 51,200 bytes. Conflicts with `templateUrl`.
     */
    readonly templateBody?: pulumi.Input<string>;
    /**
     * String containing the location of a file containing the CloudFormation template body. The URL must point to a template that is located in an Amazon S3 bucket. Maximum location file size: 460,800 bytes. Conflicts with `templateBody`.
     */
    readonly templateUrl?: pulumi.Input<string>;
}
