// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an IAM access key. This is a set of credentials that allow API requests to be made as an IAM user.
 */
export class AccessKey extends pulumi.CustomResource {
    /**
     * Get an existing AccessKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessKeyState, opts?: pulumi.CustomResourceOptions): AccessKey {
        return new AccessKey(name, <any>state, { ...opts, id: id });
    }

    /**
     * The encrypted secret, base64 encoded.
     * > **NOTE:** The encrypted secret may be decrypted using the command line,
     * for example: `terraform output encrypted_secret | base64 --decode | keybase pgp decrypt`.
     */
    public /*out*/ readonly encryptedSecret: pulumi.Output<string>;
    /**
     * The fingerprint of the PGP key used to encrypt
     * the secret
     */
    public /*out*/ readonly keyFingerprint: pulumi.Output<string>;
    /**
     * Either a base-64 encoded PGP public key, or a
     * keybase username in the form `keybase:some_person_that_exists`.
     */
    public readonly pgpKey: pulumi.Output<string | undefined>;
    /**
     * The secret access key. Note that this will be written
     * to the state file. Please supply a `pgp_key` instead, which will prevent the
     * secret from being stored in plain text
     */
    public /*out*/ readonly secret: pulumi.Output<string>;
    /**
     * The secret access key converted into an SES SMTP
     * password by applying [AWS's documented conversion
     * algorithm](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-credentials.html#smtp-credentials-convert).
     */
    public /*out*/ readonly sesSmtpPassword: pulumi.Output<string>;
    /**
     * "Active" or "Inactive". Keys are initially active, but can be made
     * inactive by other means.
     */
    public /*out*/ readonly status: pulumi.Output<string>;
    /**
     * The IAM user to associate with this access key.
     */
    public readonly user: pulumi.Output<string>;

    /**
     * Create a AccessKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessKeyArgs | AccessKeyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: AccessKeyState = argsOrState as AccessKeyState | undefined;
            inputs["encryptedSecret"] = state ? state.encryptedSecret : undefined;
            inputs["keyFingerprint"] = state ? state.keyFingerprint : undefined;
            inputs["pgpKey"] = state ? state.pgpKey : undefined;
            inputs["secret"] = state ? state.secret : undefined;
            inputs["sesSmtpPassword"] = state ? state.sesSmtpPassword : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as AccessKeyArgs | undefined;
            if (!args || args.user === undefined) {
                throw new Error("Missing required property 'user'");
            }
            inputs["pgpKey"] = args ? args.pgpKey : undefined;
            inputs["user"] = args ? args.user : undefined;
            inputs["encryptedSecret"] = undefined /*out*/;
            inputs["keyFingerprint"] = undefined /*out*/;
            inputs["secret"] = undefined /*out*/;
            inputs["sesSmtpPassword"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
        }
        super("aws:iam/accessKey:AccessKey", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AccessKey resources.
 */
export interface AccessKeyState {
    /**
     * The encrypted secret, base64 encoded.
     * > **NOTE:** The encrypted secret may be decrypted using the command line,
     * for example: `terraform output encrypted_secret | base64 --decode | keybase pgp decrypt`.
     */
    readonly encryptedSecret?: pulumi.Input<string>;
    /**
     * The fingerprint of the PGP key used to encrypt
     * the secret
     */
    readonly keyFingerprint?: pulumi.Input<string>;
    /**
     * Either a base-64 encoded PGP public key, or a
     * keybase username in the form `keybase:some_person_that_exists`.
     */
    readonly pgpKey?: pulumi.Input<string>;
    /**
     * The secret access key. Note that this will be written
     * to the state file. Please supply a `pgp_key` instead, which will prevent the
     * secret from being stored in plain text
     */
    readonly secret?: pulumi.Input<string>;
    /**
     * The secret access key converted into an SES SMTP
     * password by applying [AWS's documented conversion
     * algorithm](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-credentials.html#smtp-credentials-convert).
     */
    readonly sesSmtpPassword?: pulumi.Input<string>;
    /**
     * "Active" or "Inactive". Keys are initially active, but can be made
     * inactive by other means.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The IAM user to associate with this access key.
     */
    readonly user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AccessKey resource.
 */
export interface AccessKeyArgs {
    /**
     * Either a base-64 encoded PGP public key, or a
     * keybase username in the form `keybase:some_person_that_exists`.
     */
    readonly pgpKey?: pulumi.Input<string>;
    /**
     * The IAM user to associate with this access key.
     */
    readonly user: pulumi.Input<string>;
}
