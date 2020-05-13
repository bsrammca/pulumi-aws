// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides an API Gateway Usage Plan Key.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const test = new aws.apigateway.RestApi("test", {});
 * const myusageplan = new aws.apigateway.UsagePlan("myusageplan", {
 *     apiStages: [{
 *         apiId: test.id,
 *         stage: aws_api_gateway_deployment_foo.stageName,
 *     }],
 * });
 * const mykey = new aws.apigateway.ApiKey("mykey", {});
 * const main = new aws.apigateway.UsagePlanKey("main", {
 *     keyId: mykey.id,
 *     keyType: "API_KEY",
 *     usagePlanId: myusageplan.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/api_gateway_usage_plan_key.html.markdown.
 */
export class UsagePlanKey extends pulumi.CustomResource {
    /**
     * Get an existing UsagePlanKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UsagePlanKeyState, opts?: pulumi.CustomResourceOptions): UsagePlanKey {
        return new UsagePlanKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:apigateway/usagePlanKey:UsagePlanKey';

    /**
     * Returns true if the given object is an instance of UsagePlanKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UsagePlanKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UsagePlanKey.__pulumiType;
    }

    /**
     * The identifier of the API key resource.
     */
    public readonly keyId!: pulumi.Output<string>;
    /**
     * The type of the API key resource. Currently, the valid key type is API_KEY.
     */
    public readonly keyType!: pulumi.Output<string>;
    /**
     * The name of a usage plan key.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Id of the usage plan resource representing to associate the key to.
     */
    public readonly usagePlanId!: pulumi.Output<string>;
    /**
     * The value of a usage plan key.
     */
    public /*out*/ readonly value!: pulumi.Output<string>;

    /**
     * Create a UsagePlanKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UsagePlanKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UsagePlanKeyArgs | UsagePlanKeyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as UsagePlanKeyState | undefined;
            inputs["keyId"] = state ? state.keyId : undefined;
            inputs["keyType"] = state ? state.keyType : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["usagePlanId"] = state ? state.usagePlanId : undefined;
            inputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as UsagePlanKeyArgs | undefined;
            if (!args || args.keyId === undefined) {
                throw new Error("Missing required property 'keyId'");
            }
            if (!args || args.keyType === undefined) {
                throw new Error("Missing required property 'keyType'");
            }
            if (!args || args.usagePlanId === undefined) {
                throw new Error("Missing required property 'usagePlanId'");
            }
            inputs["keyId"] = args ? args.keyId : undefined;
            inputs["keyType"] = args ? args.keyType : undefined;
            inputs["usagePlanId"] = args ? args.usagePlanId : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["value"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(UsagePlanKey.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering UsagePlanKey resources.
 */
export interface UsagePlanKeyState {
    /**
     * The identifier of the API key resource.
     */
    readonly keyId?: pulumi.Input<string>;
    /**
     * The type of the API key resource. Currently, the valid key type is API_KEY.
     */
    readonly keyType?: pulumi.Input<string>;
    /**
     * The name of a usage plan key.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The Id of the usage plan resource representing to associate the key to.
     */
    readonly usagePlanId?: pulumi.Input<string>;
    /**
     * The value of a usage plan key.
     */
    readonly value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UsagePlanKey resource.
 */
export interface UsagePlanKeyArgs {
    /**
     * The identifier of the API key resource.
     */
    readonly keyId: pulumi.Input<string>;
    /**
     * The type of the API key resource. Currently, the valid key type is API_KEY.
     */
    readonly keyType: pulumi.Input<string>;
    /**
     * The Id of the usage plan resource representing to associate the key to.
     */
    readonly usagePlanId: pulumi.Input<string>;
}
