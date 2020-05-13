// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides an Gamelift Build resource.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const test = new aws.gamelift.Build("test", {
 *     operatingSystem: "WINDOWS_2012",
 *     storage_location: {
 *         bucket: aws_s3_bucket.test.bucket,
 *         key: aws_s3_bucket_object.test.key,
 *         roleArn: aws_iam_role.test.arn,
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/gamelift_build.html.markdown.
 */
export class Build extends pulumi.CustomResource {
    /**
     * Get an existing Build resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BuildState, opts?: pulumi.CustomResourceOptions): Build {
        return new Build(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:gamelift/build:Build';

    /**
     * Returns true if the given object is an instance of Build.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Build {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Build.__pulumiType;
    }

    /**
     * Gamelift Build ARN.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Name of the build
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Operating system that the game server binaries are built to run on. e.g. `WINDOWS_2012` or `AMAZON_LINUX`.
     */
    public readonly operatingSystem!: pulumi.Output<string>;
    /**
     * Information indicating where your game build files are stored. See below.
     */
    public readonly storageLocation!: pulumi.Output<outputs.gamelift.BuildStorageLocation>;
    /**
     * Key-value map of resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Version that is associated with this build.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Build resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BuildArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BuildArgs | BuildState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as BuildState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["operatingSystem"] = state ? state.operatingSystem : undefined;
            inputs["storageLocation"] = state ? state.storageLocation : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as BuildArgs | undefined;
            if (!args || args.operatingSystem === undefined) {
                throw new Error("Missing required property 'operatingSystem'");
            }
            if (!args || args.storageLocation === undefined) {
                throw new Error("Missing required property 'storageLocation'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["operatingSystem"] = args ? args.operatingSystem : undefined;
            inputs["storageLocation"] = args ? args.storageLocation : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["version"] = args ? args.version : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Build.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Build resources.
 */
export interface BuildState {
    /**
     * Gamelift Build ARN.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Name of the build
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Operating system that the game server binaries are built to run on. e.g. `WINDOWS_2012` or `AMAZON_LINUX`.
     */
    readonly operatingSystem?: pulumi.Input<string>;
    /**
     * Information indicating where your game build files are stored. See below.
     */
    readonly storageLocation?: pulumi.Input<inputs.gamelift.BuildStorageLocation>;
    /**
     * Key-value map of resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Version that is associated with this build.
     */
    readonly version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Build resource.
 */
export interface BuildArgs {
    /**
     * Name of the build
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Operating system that the game server binaries are built to run on. e.g. `WINDOWS_2012` or `AMAZON_LINUX`.
     */
    readonly operatingSystem: pulumi.Input<string>;
    /**
     * Information indicating where your game build files are stored. See below.
     */
    readonly storageLocation: pulumi.Input<inputs.gamelift.BuildStorageLocation>;
    /**
     * Key-value map of resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Version that is associated with this build.
     */
    readonly version?: pulumi.Input<string>;
}
