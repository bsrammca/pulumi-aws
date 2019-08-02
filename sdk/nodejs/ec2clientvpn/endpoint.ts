// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ec2_client_vpn_endpoint.html.markdown.
 */
export class Endpoint extends pulumi.CustomResource {
    /**
     * Get an existing Endpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointState, opts?: pulumi.CustomResourceOptions): Endpoint {
        return new Endpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2clientvpn/endpoint:Endpoint';

    /**
     * Returns true if the given object is an instance of Endpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Endpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Endpoint.__pulumiType;
    }

    /**
     * Information about the authentication method to be used to authenticate clients.
     */
    public readonly authenticationOptions!: pulumi.Output<{ activeDirectoryId?: string, rootCertificateChainArn?: string, type: string }>;
    /**
     * The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater.
     */
    public readonly clientCidrBlock!: pulumi.Output<string>;
    /**
     * Information about the client connection logging options.
     */
    public readonly connectionLogOptions!: pulumi.Output<{ cloudwatchLogGroup?: string, cloudwatchLogStream?: string, enabled: boolean }>;
    /**
     * Name of the repository.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The DNS name to be used by clients when establishing their VPN session.
     */
    public /*out*/ readonly dnsName!: pulumi.Output<string>;
    /**
     * Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address of the VPC that is to be associated with Client VPN endpoint is used as the DNS server.
     */
    public readonly dnsServers!: pulumi.Output<string[] | undefined>;
    /**
     * The ARN of the ACM server certificate.
     */
    public readonly serverCertificateArn!: pulumi.Output<string>;
    /**
     * Indicates whether split-tunnel is enabled on VPN endpoint. Default value is `false`.
     */
    public readonly splitTunnel!: pulumi.Output<boolean | undefined>;
    /**
     * The current state of the Client VPN endpoint.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The transport protocol to be used by the VPN session. Default value is `udp`.
     */
    public readonly transportProtocol!: pulumi.Output<string | undefined>;

    /**
     * Create a Endpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EndpointArgs | EndpointState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EndpointState | undefined;
            inputs["authenticationOptions"] = state ? state.authenticationOptions : undefined;
            inputs["clientCidrBlock"] = state ? state.clientCidrBlock : undefined;
            inputs["connectionLogOptions"] = state ? state.connectionLogOptions : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["dnsName"] = state ? state.dnsName : undefined;
            inputs["dnsServers"] = state ? state.dnsServers : undefined;
            inputs["serverCertificateArn"] = state ? state.serverCertificateArn : undefined;
            inputs["splitTunnel"] = state ? state.splitTunnel : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["transportProtocol"] = state ? state.transportProtocol : undefined;
        } else {
            const args = argsOrState as EndpointArgs | undefined;
            if (!args || args.authenticationOptions === undefined) {
                throw new Error("Missing required property 'authenticationOptions'");
            }
            if (!args || args.clientCidrBlock === undefined) {
                throw new Error("Missing required property 'clientCidrBlock'");
            }
            if (!args || args.connectionLogOptions === undefined) {
                throw new Error("Missing required property 'connectionLogOptions'");
            }
            if (!args || args.serverCertificateArn === undefined) {
                throw new Error("Missing required property 'serverCertificateArn'");
            }
            inputs["authenticationOptions"] = args ? args.authenticationOptions : undefined;
            inputs["clientCidrBlock"] = args ? args.clientCidrBlock : undefined;
            inputs["connectionLogOptions"] = args ? args.connectionLogOptions : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["dnsServers"] = args ? args.dnsServers : undefined;
            inputs["serverCertificateArn"] = args ? args.serverCertificateArn : undefined;
            inputs["splitTunnel"] = args ? args.splitTunnel : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["transportProtocol"] = args ? args.transportProtocol : undefined;
            inputs["dnsName"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Endpoint.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Endpoint resources.
 */
export interface EndpointState {
    /**
     * Information about the authentication method to be used to authenticate clients.
     */
    readonly authenticationOptions?: pulumi.Input<{ activeDirectoryId?: pulumi.Input<string>, rootCertificateChainArn?: pulumi.Input<string>, type: pulumi.Input<string> }>;
    /**
     * The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater.
     */
    readonly clientCidrBlock?: pulumi.Input<string>;
    /**
     * Information about the client connection logging options.
     */
    readonly connectionLogOptions?: pulumi.Input<{ cloudwatchLogGroup?: pulumi.Input<string>, cloudwatchLogStream?: pulumi.Input<string>, enabled: pulumi.Input<boolean> }>;
    /**
     * Name of the repository.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The DNS name to be used by clients when establishing their VPN session.
     */
    readonly dnsName?: pulumi.Input<string>;
    /**
     * Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address of the VPC that is to be associated with Client VPN endpoint is used as the DNS server.
     */
    readonly dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN of the ACM server certificate.
     */
    readonly serverCertificateArn?: pulumi.Input<string>;
    /**
     * Indicates whether split-tunnel is enabled on VPN endpoint. Default value is `false`.
     */
    readonly splitTunnel?: pulumi.Input<boolean>;
    /**
     * The current state of the Client VPN endpoint.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The transport protocol to be used by the VPN session. Default value is `udp`.
     */
    readonly transportProtocol?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Endpoint resource.
 */
export interface EndpointArgs {
    /**
     * Information about the authentication method to be used to authenticate clients.
     */
    readonly authenticationOptions: pulumi.Input<{ activeDirectoryId?: pulumi.Input<string>, rootCertificateChainArn?: pulumi.Input<string>, type: pulumi.Input<string> }>;
    /**
     * The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater.
     */
    readonly clientCidrBlock: pulumi.Input<string>;
    /**
     * Information about the client connection logging options.
     */
    readonly connectionLogOptions: pulumi.Input<{ cloudwatchLogGroup?: pulumi.Input<string>, cloudwatchLogStream?: pulumi.Input<string>, enabled: pulumi.Input<boolean> }>;
    /**
     * Name of the repository.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address of the VPC that is to be associated with Client VPN endpoint is used as the DNS server.
     */
    readonly dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN of the ACM server certificate.
     */
    readonly serverCertificateArn: pulumi.Input<string>;
    /**
     * Indicates whether split-tunnel is enabled on VPN endpoint. Default value is `false`.
     */
    readonly splitTunnel?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The transport protocol to be used by the VPN session. Default value is `udp`.
     */
    readonly transportProtocol?: pulumi.Input<string>;
}
