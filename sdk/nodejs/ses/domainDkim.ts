// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides an SES domain DKIM generation resource.
 * 
 * Domain ownership needs to be confirmed first using [sesDomainIdentity Resource](https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html)
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ses_domain_dkim.html.markdown.
 */
export class DomainDkim extends pulumi.CustomResource {
    /**
     * Get an existing DomainDkim resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainDkimState, opts?: pulumi.CustomResourceOptions): DomainDkim {
        return new DomainDkim(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ses/domainDkim:DomainDkim';

    /**
     * Returns true if the given object is an instance of DomainDkim.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DomainDkim {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DomainDkim.__pulumiType;
    }

    /**
     * DKIM tokens generated by SES.
     * These tokens should be used to create CNAME records used to verify SES Easy DKIM.
     * See below for an example of how this might be achieved
     * when the domain is hosted in Route 53 and managed by this provider.
     * Find out more about verifying domains in Amazon SES
     * in the [AWS SES docs](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html).
     */
    public /*out*/ readonly dkimTokens!: pulumi.Output<string[]>;
    /**
     * Verified domain name to generate DKIM tokens for.
     */
    public readonly domain!: pulumi.Output<string>;

    /**
     * Create a DomainDkim resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainDkimArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DomainDkimArgs | DomainDkimState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DomainDkimState | undefined;
            inputs["dkimTokens"] = state ? state.dkimTokens : undefined;
            inputs["domain"] = state ? state.domain : undefined;
        } else {
            const args = argsOrState as DomainDkimArgs | undefined;
            if (!args || args.domain === undefined) {
                throw new Error("Missing required property 'domain'");
            }
            inputs["domain"] = args ? args.domain : undefined;
            inputs["dkimTokens"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DomainDkim.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DomainDkim resources.
 */
export interface DomainDkimState {
    /**
     * DKIM tokens generated by SES.
     * These tokens should be used to create CNAME records used to verify SES Easy DKIM.
     * See below for an example of how this might be achieved
     * when the domain is hosted in Route 53 and managed by this provider.
     * Find out more about verifying domains in Amazon SES
     * in the [AWS SES docs](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html).
     */
    readonly dkimTokens?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Verified domain name to generate DKIM tokens for.
     */
    readonly domain?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DomainDkim resource.
 */
export interface DomainDkimArgs {
    /**
     * Verified domain name to generate DKIM tokens for.
     */
    readonly domain: pulumi.Input<string>;
}
