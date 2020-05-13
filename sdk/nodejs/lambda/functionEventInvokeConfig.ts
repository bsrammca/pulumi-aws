// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an asynchronous invocation configuration for a Lambda Function or Alias. More information about asynchronous invocations and the configurable values can be found in the [Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html).
 *
 * ## Example Usage
 *
 * ### Destination Configuration
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.lambda.FunctionEventInvokeConfig("example", {
 *     functionName: aws_lambda_alias.example.function_name,
 *     destination_config: {
 *         on_failure: {
 *             destination: aws_sqs_queue.example.arn,
 *         },
 *         on_success: {
 *             destination: aws_sns_topic.example.arn,
 *         },
 *     },
 * });
 * ```
 *
 * ### Error Handling Configuration
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.lambda.FunctionEventInvokeConfig("example", {
 *     functionName: aws_lambda_alias.example.function_name,
 *     maximumEventAgeInSeconds: 60,
 *     maximumRetryAttempts: 0,
 * });
 * ```
 *
 * ### Configuration for Alias Name
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.lambda.FunctionEventInvokeConfig("example", {
 *     functionName: aws_lambda_alias.example.function_name,
 *     qualifier: aws_lambda_alias.example.name,
 * });
 * // ... other configuration ...
 * ```
 *
 * ### Configuration for Function Latest Unpublished Version
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.lambda.FunctionEventInvokeConfig("example", {
 *     functionName: aws_lambda_function.example.function_name,
 *     qualifier: `$LATEST`,
 * });
 * // ... other configuration ...
 * ```
 *
 * ### Configuration for Function Published Version
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.lambda.FunctionEventInvokeConfig("example", {
 *     functionName: aws_lambda_function.example.function_name,
 *     qualifier: aws_lambda_function.example.version,
 * });
 * // ... other configuration ...
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lambda_function_event_invoke_config.html.markdown.
 */
export class FunctionEventInvokeConfig extends pulumi.CustomResource {
    /**
     * Get an existing FunctionEventInvokeConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FunctionEventInvokeConfigState, opts?: pulumi.CustomResourceOptions): FunctionEventInvokeConfig {
        return new FunctionEventInvokeConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:lambda/functionEventInvokeConfig:FunctionEventInvokeConfig';

    /**
     * Returns true if the given object is an instance of FunctionEventInvokeConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FunctionEventInvokeConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FunctionEventInvokeConfig.__pulumiType;
    }

    /**
     * Configuration block with destination configuration. See below for details.
     */
    public readonly destinationConfig!: pulumi.Output<outputs.lambda.FunctionEventInvokeConfigDestinationConfig | undefined>;
    /**
     * Name or Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier.
     */
    public readonly functionName!: pulumi.Output<string>;
    /**
     * Maximum age of a request that Lambda sends to a function for processing in seconds. Valid values between 60 and 21600.
     */
    public readonly maximumEventAgeInSeconds!: pulumi.Output<number | undefined>;
    /**
     * Maximum number of times to retry when the function returns an error. Valid values between 0 and 2. Defaults to 2.
     */
    public readonly maximumRetryAttempts!: pulumi.Output<number | undefined>;
    /**
     * Lambda Function published version, `$LATEST`, or Lambda Alias name.
     */
    public readonly qualifier!: pulumi.Output<string | undefined>;

    /**
     * Create a FunctionEventInvokeConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FunctionEventInvokeConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FunctionEventInvokeConfigArgs | FunctionEventInvokeConfigState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FunctionEventInvokeConfigState | undefined;
            inputs["destinationConfig"] = state ? state.destinationConfig : undefined;
            inputs["functionName"] = state ? state.functionName : undefined;
            inputs["maximumEventAgeInSeconds"] = state ? state.maximumEventAgeInSeconds : undefined;
            inputs["maximumRetryAttempts"] = state ? state.maximumRetryAttempts : undefined;
            inputs["qualifier"] = state ? state.qualifier : undefined;
        } else {
            const args = argsOrState as FunctionEventInvokeConfigArgs | undefined;
            if (!args || args.functionName === undefined) {
                throw new Error("Missing required property 'functionName'");
            }
            inputs["destinationConfig"] = args ? args.destinationConfig : undefined;
            inputs["functionName"] = args ? args.functionName : undefined;
            inputs["maximumEventAgeInSeconds"] = args ? args.maximumEventAgeInSeconds : undefined;
            inputs["maximumRetryAttempts"] = args ? args.maximumRetryAttempts : undefined;
            inputs["qualifier"] = args ? args.qualifier : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(FunctionEventInvokeConfig.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FunctionEventInvokeConfig resources.
 */
export interface FunctionEventInvokeConfigState {
    /**
     * Configuration block with destination configuration. See below for details.
     */
    readonly destinationConfig?: pulumi.Input<inputs.lambda.FunctionEventInvokeConfigDestinationConfig>;
    /**
     * Name or Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier.
     */
    readonly functionName?: pulumi.Input<string>;
    /**
     * Maximum age of a request that Lambda sends to a function for processing in seconds. Valid values between 60 and 21600.
     */
    readonly maximumEventAgeInSeconds?: pulumi.Input<number>;
    /**
     * Maximum number of times to retry when the function returns an error. Valid values between 0 and 2. Defaults to 2.
     */
    readonly maximumRetryAttempts?: pulumi.Input<number>;
    /**
     * Lambda Function published version, `$LATEST`, or Lambda Alias name.
     */
    readonly qualifier?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FunctionEventInvokeConfig resource.
 */
export interface FunctionEventInvokeConfigArgs {
    /**
     * Configuration block with destination configuration. See below for details.
     */
    readonly destinationConfig?: pulumi.Input<inputs.lambda.FunctionEventInvokeConfigDestinationConfig>;
    /**
     * Name or Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier.
     */
    readonly functionName: pulumi.Input<string>;
    /**
     * Maximum age of a request that Lambda sends to a function for processing in seconds. Valid values between 60 and 21600.
     */
    readonly maximumEventAgeInSeconds?: pulumi.Input<number>;
    /**
     * Maximum number of times to retry when the function returns an error. Valid values between 0 and 2. Defaults to 2.
     */
    readonly maximumRetryAttempts?: pulumi.Input<number>;
    /**
     * Lambda Function published version, `$LATEST`, or Lambda Alias name.
     */
    readonly qualifier?: pulumi.Input<string>;
}
