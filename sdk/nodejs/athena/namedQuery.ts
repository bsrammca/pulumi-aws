// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an Athena Named Query resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const hogeBucket = new aws.s3.Bucket("hoge", {});
 * const testKey = new aws.kms.Key("test", {
 *     deletionWindowInDays: 7,
 *     description: "Athena KMS Key",
 * });
 * const testWorkgroup = new aws.athena.Workgroup("test", {
 *     configuration: {
 *         resultConfiguration: {
 *             encryptionConfiguration: {
 *                 encryptionOption: "SSE_KMS",
 *                 kmsKeyArn: testKey.arn,
 *             },
 *         },
 *     },
 * });
 * const hogeDatabase = new aws.athena.Database("hoge", {
 *     bucket: hogeBucket.id,
 *     name: "users",
 * });
 * const foo = new aws.athena.NamedQuery("foo", {
 *     database: hogeDatabase.name,
 *     query: pulumi.interpolate`SELECT * FROM ${hogeDatabase.name} limit 10;`,
 *     workgroup: testWorkgroup.id,
 * });
 * ```
 * 
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/athena_named_query.html.markdown.
 */
export class NamedQuery extends pulumi.CustomResource {
    /**
     * Get an existing NamedQuery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamedQueryState, opts?: pulumi.CustomResourceOptions): NamedQuery {
        return new NamedQuery(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:athena/namedQuery:NamedQuery';

    /**
     * Returns true if the given object is an instance of NamedQuery.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamedQuery {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamedQuery.__pulumiType;
    }

    /**
     * The database to which the query belongs.
     */
    public readonly database!: pulumi.Output<string>;
    /**
     * A brief explanation of the query. Maximum length of 1024.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The plain language name for the query. Maximum length of 128.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The text of the query itself. In other words, all query statements. Maximum length of 262144.
     */
    public readonly query!: pulumi.Output<string>;
    /**
     * The workgroup to which the query belongs. Defaults to `primary`
     */
    public readonly workgroup!: pulumi.Output<string | undefined>;

    /**
     * Create a NamedQuery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamedQueryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NamedQueryArgs | NamedQueryState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NamedQueryState | undefined;
            inputs["database"] = state ? state.database : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["query"] = state ? state.query : undefined;
            inputs["workgroup"] = state ? state.workgroup : undefined;
        } else {
            const args = argsOrState as NamedQueryArgs | undefined;
            if (!args || args.database === undefined) {
                throw new Error("Missing required property 'database'");
            }
            if (!args || args.query === undefined) {
                throw new Error("Missing required property 'query'");
            }
            inputs["database"] = args ? args.database : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["query"] = args ? args.query : undefined;
            inputs["workgroup"] = args ? args.workgroup : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(NamedQuery.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NamedQuery resources.
 */
export interface NamedQueryState {
    /**
     * The database to which the query belongs.
     */
    readonly database?: pulumi.Input<string>;
    /**
     * A brief explanation of the query. Maximum length of 1024.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The plain language name for the query. Maximum length of 128.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The text of the query itself. In other words, all query statements. Maximum length of 262144.
     */
    readonly query?: pulumi.Input<string>;
    /**
     * The workgroup to which the query belongs. Defaults to `primary`
     */
    readonly workgroup?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NamedQuery resource.
 */
export interface NamedQueryArgs {
    /**
     * The database to which the query belongs.
     */
    readonly database: pulumi.Input<string>;
    /**
     * A brief explanation of the query. Maximum length of 1024.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The plain language name for the query. Maximum length of 128.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The text of the query itself. In other words, all query statements. Maximum length of 262144.
     */
    readonly query: pulumi.Input<string>;
    /**
     * The workgroup to which the query belongs. Defaults to `primary`
     */
    readonly workgroup?: pulumi.Input<string>;
}
