// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides an API Gateway Client Certificate.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/api_gateway_client_certificate.html.markdown.
 */
export class ClientCertificate extends pulumi.CustomResource {
    /**
     * Get an existing ClientCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClientCertificateState, opts?: pulumi.CustomResourceOptions): ClientCertificate {
        return new ClientCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:apigateway/clientCertificate:ClientCertificate';

    /**
     * Returns true if the given object is an instance of ClientCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClientCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClientCertificate.__pulumiType;
    }

    /**
     * The date when the client certificate was created.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * The description of the client certificate.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The date when the client certificate will expire.
     */
    public /*out*/ readonly expirationDate!: pulumi.Output<string>;
    /**
     * The PEM-encoded public key of the client certificate.
     */
    public /*out*/ readonly pemEncodedCertificate!: pulumi.Output<string>;

    /**
     * Create a ClientCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ClientCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClientCertificateArgs | ClientCertificateState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ClientCertificateState | undefined;
            inputs["createdDate"] = state ? state.createdDate : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["expirationDate"] = state ? state.expirationDate : undefined;
            inputs["pemEncodedCertificate"] = state ? state.pemEncodedCertificate : undefined;
        } else {
            const args = argsOrState as ClientCertificateArgs | undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["createdDate"] = undefined /*out*/;
            inputs["expirationDate"] = undefined /*out*/;
            inputs["pemEncodedCertificate"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ClientCertificate.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ClientCertificate resources.
 */
export interface ClientCertificateState {
    /**
     * The date when the client certificate was created.
     */
    readonly createdDate?: pulumi.Input<string>;
    /**
     * The description of the client certificate.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The date when the client certificate will expire.
     */
    readonly expirationDate?: pulumi.Input<string>;
    /**
     * The PEM-encoded public key of the client certificate.
     */
    readonly pemEncodedCertificate?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ClientCertificate resource.
 */
export interface ClientCertificateArgs {
    /**
     * The description of the client certificate.
     */
    readonly description?: pulumi.Input<string>;
}
