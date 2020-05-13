// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource to manage whether default EBS encryption is enabled for your AWS account in the current AWS region. To manage the default KMS key for the region, see the [`aws.ebs.DefaultKmsKey` resource](https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html).
 *
 * > **NOTE:** Removing this resource disables default EBS encryption.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.ebs.EncryptionByDefault("example", {
 *     enabled: true,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ebs_encryption_by_default.html.markdown.
 */
export class EncryptionByDefault extends pulumi.CustomResource {
    /**
     * Get an existing EncryptionByDefault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EncryptionByDefaultState, opts?: pulumi.CustomResourceOptions): EncryptionByDefault {
        return new EncryptionByDefault(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ebs/encryptionByDefault:EncryptionByDefault';

    /**
     * Returns true if the given object is an instance of EncryptionByDefault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EncryptionByDefault {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EncryptionByDefault.__pulumiType;
    }

    /**
     * Whether or not default EBS encryption is enabled. Valid values are `true` or `false`. Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a EncryptionByDefault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: EncryptionByDefaultArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EncryptionByDefaultArgs | EncryptionByDefaultState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EncryptionByDefaultState | undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
        } else {
            const args = argsOrState as EncryptionByDefaultArgs | undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(EncryptionByDefault.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EncryptionByDefault resources.
 */
export interface EncryptionByDefaultState {
    /**
     * Whether or not default EBS encryption is enabled. Valid values are `true` or `false`. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a EncryptionByDefault resource.
 */
export interface EncryptionByDefaultArgs {
    /**
     * Whether or not default EBS encryption is enabled. Valid values are `true` or `false`. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
}
