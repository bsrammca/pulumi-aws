// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * ## Example Usage
 * 
 * The following example below creates a CloudFront public key.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * import * as fs from "fs";
 * 
 * const example = new aws.cloudfront.PublicKey("example", {
 *     comment: "test public key",
 *     encodedKey: fs.readFileSync("public_key.pem", "utf-8"),
 * });
 * ```
 * 
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudfront_public_key.html.markdown.
 */
export class PublicKey extends pulumi.CustomResource {
    /**
     * Get an existing PublicKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicKeyState, opts?: pulumi.CustomResourceOptions): PublicKey {
        return new PublicKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:cloudfront/publicKey:PublicKey';

    /**
     * Returns true if the given object is an instance of PublicKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PublicKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PublicKey.__pulumiType;
    }

    /**
     * Internal value used by CloudFront to allow future updates to the public key configuration.
     */
    public /*out*/ readonly callerReference!: pulumi.Output<string>;
    /**
     * An optional comment about the public key.
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * The encoded public key that you want to add to CloudFront to use with features like field-level encryption.
     */
    public readonly encodedKey!: pulumi.Output<string>;
    /**
     * The current version of the public key. For example: `E2QWRUHAPOMQZL`.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name for the public key. By default generated by this provider.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name for the public key. Conflicts with `name`.
     */
    public readonly namePrefix!: pulumi.Output<string>;

    /**
     * Create a PublicKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PublicKeyArgs | PublicKeyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PublicKeyState | undefined;
            inputs["callerReference"] = state ? state.callerReference : undefined;
            inputs["comment"] = state ? state.comment : undefined;
            inputs["encodedKey"] = state ? state.encodedKey : undefined;
            inputs["etag"] = state ? state.etag : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
        } else {
            const args = argsOrState as PublicKeyArgs | undefined;
            if (!args || args.encodedKey === undefined) {
                throw new Error("Missing required property 'encodedKey'");
            }
            inputs["comment"] = args ? args.comment : undefined;
            inputs["encodedKey"] = args ? args.encodedKey : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["callerReference"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(PublicKey.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PublicKey resources.
 */
export interface PublicKeyState {
    /**
     * Internal value used by CloudFront to allow future updates to the public key configuration.
     */
    readonly callerReference?: pulumi.Input<string>;
    /**
     * An optional comment about the public key.
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * The encoded public key that you want to add to CloudFront to use with features like field-level encryption.
     */
    readonly encodedKey?: pulumi.Input<string>;
    /**
     * The current version of the public key. For example: `E2QWRUHAPOMQZL`.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The name for the public key. By default generated by this provider.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name for the public key. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PublicKey resource.
 */
export interface PublicKeyArgs {
    /**
     * An optional comment about the public key.
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * The encoded public key that you want to add to CloudFront to use with features like field-level encryption.
     */
    readonly encodedKey: pulumi.Input<string>;
    /**
     * The name for the public key. By default generated by this provider.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name for the public key. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
}
