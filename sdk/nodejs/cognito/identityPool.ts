// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides an AWS Cognito Identity Pool.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cognito_identity_pool.html.markdown.
 */
export class IdentityPool extends pulumi.CustomResource {
    /**
     * Get an existing IdentityPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityPoolState, opts?: pulumi.CustomResourceOptions): IdentityPool {
        return new IdentityPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:cognito/identityPool:IdentityPool';

    /**
     * Returns true if the given object is an instance of IdentityPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityPool.__pulumiType;
    }

    /**
     * Whether the identity pool supports unauthenticated logins or not.
     */
    public readonly allowUnauthenticatedIdentities!: pulumi.Output<boolean | undefined>;
    /**
     * The ARN of the identity pool.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * An array of Amazon Cognito Identity user pools and their client IDs.
     */
    public readonly cognitoIdentityProviders!: pulumi.Output<outputApi.cognito.IdentityPoolCognitoIdentityProvider[] | undefined>;
    /**
     * The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your
     * backend and the Cognito service to communicate about the developer provider.
     */
    public readonly developerProviderName!: pulumi.Output<string | undefined>;
    /**
     * The Cognito Identity Pool name.
     */
    public readonly identityPoolName!: pulumi.Output<string>;
    /**
     * A list of OpendID Connect provider ARNs.
     */
    public readonly openidConnectProviderArns!: pulumi.Output<string[] | undefined>;
    /**
     * An array of Amazon Resource Names (ARNs) of the SAML provider for your identity.
     */
    public readonly samlProviderArns!: pulumi.Output<string[] | undefined>;
    /**
     * Key-Value pairs mapping provider names to provider app IDs.
     */
    public readonly supportedLoginProviders!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A mapping of tags to assign to the Identity Pool.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a IdentityPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityPoolArgs | IdentityPoolState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as IdentityPoolState | undefined;
            inputs["allowUnauthenticatedIdentities"] = state ? state.allowUnauthenticatedIdentities : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["cognitoIdentityProviders"] = state ? state.cognitoIdentityProviders : undefined;
            inputs["developerProviderName"] = state ? state.developerProviderName : undefined;
            inputs["identityPoolName"] = state ? state.identityPoolName : undefined;
            inputs["openidConnectProviderArns"] = state ? state.openidConnectProviderArns : undefined;
            inputs["samlProviderArns"] = state ? state.samlProviderArns : undefined;
            inputs["supportedLoginProviders"] = state ? state.supportedLoginProviders : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as IdentityPoolArgs | undefined;
            if (!args || args.identityPoolName === undefined) {
                throw new Error("Missing required property 'identityPoolName'");
            }
            inputs["allowUnauthenticatedIdentities"] = args ? args.allowUnauthenticatedIdentities : undefined;
            inputs["cognitoIdentityProviders"] = args ? args.cognitoIdentityProviders : undefined;
            inputs["developerProviderName"] = args ? args.developerProviderName : undefined;
            inputs["identityPoolName"] = args ? args.identityPoolName : undefined;
            inputs["openidConnectProviderArns"] = args ? args.openidConnectProviderArns : undefined;
            inputs["samlProviderArns"] = args ? args.samlProviderArns : undefined;
            inputs["supportedLoginProviders"] = args ? args.supportedLoginProviders : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(IdentityPool.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IdentityPool resources.
 */
export interface IdentityPoolState {
    /**
     * Whether the identity pool supports unauthenticated logins or not.
     */
    readonly allowUnauthenticatedIdentities?: pulumi.Input<boolean>;
    /**
     * The ARN of the identity pool.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * An array of Amazon Cognito Identity user pools and their client IDs.
     */
    readonly cognitoIdentityProviders?: pulumi.Input<pulumi.Input<inputApi.cognito.IdentityPoolCognitoIdentityProvider>[]>;
    /**
     * The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your
     * backend and the Cognito service to communicate about the developer provider.
     */
    readonly developerProviderName?: pulumi.Input<string>;
    /**
     * The Cognito Identity Pool name.
     */
    readonly identityPoolName?: pulumi.Input<string>;
    /**
     * A list of OpendID Connect provider ARNs.
     */
    readonly openidConnectProviderArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An array of Amazon Resource Names (ARNs) of the SAML provider for your identity.
     */
    readonly samlProviderArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Key-Value pairs mapping provider names to provider app IDs.
     */
    readonly supportedLoginProviders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A mapping of tags to assign to the Identity Pool.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a IdentityPool resource.
 */
export interface IdentityPoolArgs {
    /**
     * Whether the identity pool supports unauthenticated logins or not.
     */
    readonly allowUnauthenticatedIdentities?: pulumi.Input<boolean>;
    /**
     * An array of Amazon Cognito Identity user pools and their client IDs.
     */
    readonly cognitoIdentityProviders?: pulumi.Input<pulumi.Input<inputApi.cognito.IdentityPoolCognitoIdentityProvider>[]>;
    /**
     * The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your
     * backend and the Cognito service to communicate about the developer provider.
     */
    readonly developerProviderName?: pulumi.Input<string>;
    /**
     * The Cognito Identity Pool name.
     */
    readonly identityPoolName: pulumi.Input<string>;
    /**
     * A list of OpendID Connect provider ARNs.
     */
    readonly openidConnectProviderArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An array of Amazon Resource Names (ARNs) of the SAML provider for your identity.
     */
    readonly samlProviderArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Key-Value pairs mapping provider names to provider app IDs.
     */
    readonly supportedLoginProviders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A mapping of tags to assign to the Identity Pool.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
