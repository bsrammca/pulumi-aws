// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a Pinpoint ADM (Amazon Device Messaging) Channel resource.
 * 
 * > **Note:** All arguments including the Client ID and Client Secret will be stored in the raw state as plain-text.
 * [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/pinpoint_adm_channel.html.markdown.
 */
export class AdmChannel extends pulumi.CustomResource {
    /**
     * Get an existing AdmChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AdmChannelState, opts?: pulumi.CustomResourceOptions): AdmChannel {
        return new AdmChannel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:pinpoint/admChannel:AdmChannel';

    /**
     * Returns true if the given object is an instance of AdmChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AdmChannel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdmChannel.__pulumiType;
    }

    /**
     * The application ID.
     */
    public readonly applicationId!: pulumi.Output<string>;
    /**
     * Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.
     */
    public readonly clientId!: pulumi.Output<string>;
    /**
     * Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.
     */
    public readonly clientSecret!: pulumi.Output<string>;
    /**
     * Specifies whether to enable the channel. Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a AdmChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdmChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AdmChannelArgs | AdmChannelState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AdmChannelState | undefined;
            inputs["applicationId"] = state ? state.applicationId : undefined;
            inputs["clientId"] = state ? state.clientId : undefined;
            inputs["clientSecret"] = state ? state.clientSecret : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
        } else {
            const args = argsOrState as AdmChannelArgs | undefined;
            if (!args || args.applicationId === undefined) {
                throw new Error("Missing required property 'applicationId'");
            }
            if (!args || args.clientId === undefined) {
                throw new Error("Missing required property 'clientId'");
            }
            if (!args || args.clientSecret === undefined) {
                throw new Error("Missing required property 'clientSecret'");
            }
            inputs["applicationId"] = args ? args.applicationId : undefined;
            inputs["clientId"] = args ? args.clientId : undefined;
            inputs["clientSecret"] = args ? args.clientSecret : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(AdmChannel.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AdmChannel resources.
 */
export interface AdmChannelState {
    /**
     * The application ID.
     */
    readonly applicationId?: pulumi.Input<string>;
    /**
     * Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.
     */
    readonly clientId?: pulumi.Input<string>;
    /**
     * Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.
     */
    readonly clientSecret?: pulumi.Input<string>;
    /**
     * Specifies whether to enable the channel. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a AdmChannel resource.
 */
export interface AdmChannelArgs {
    /**
     * The application ID.
     */
    readonly applicationId: pulumi.Input<string>;
    /**
     * Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.
     */
    readonly clientId: pulumi.Input<string>;
    /**
     * Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.
     */
    readonly clientSecret: pulumi.Input<string>;
    /**
     * Specifies whether to enable the channel. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
}
