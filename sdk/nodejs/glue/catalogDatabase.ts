// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a Glue Catalog Database Resource. You can refer to the [Glue Developer Guide](http://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) for a full explanation of the Glue Data Catalog functionality
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/glue_catalog_database.html.markdown.
 */
export class CatalogDatabase extends pulumi.CustomResource {
    /**
     * Get an existing CatalogDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CatalogDatabaseState, opts?: pulumi.CustomResourceOptions): CatalogDatabase {
        return new CatalogDatabase(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:glue/catalogDatabase:CatalogDatabase';

    /**
     * Returns true if the given object is an instance of CatalogDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CatalogDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CatalogDatabase.__pulumiType;
    }

    /**
     * ID of the Glue Catalog to create the database in. If omitted, this defaults to the AWS Account ID.
     */
    public readonly catalogId!: pulumi.Output<string>;
    /**
     * Description of the database.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The location of the database (for example, an HDFS path).
     */
    public readonly locationUri!: pulumi.Output<string | undefined>;
    /**
     * The name of the database.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list of key-value pairs that define parameters and properties of the database.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a CatalogDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CatalogDatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CatalogDatabaseArgs | CatalogDatabaseState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CatalogDatabaseState | undefined;
            inputs["catalogId"] = state ? state.catalogId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["locationUri"] = state ? state.locationUri : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
        } else {
            const args = argsOrState as CatalogDatabaseArgs | undefined;
            inputs["catalogId"] = args ? args.catalogId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["locationUri"] = args ? args.locationUri : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(CatalogDatabase.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering CatalogDatabase resources.
 */
export interface CatalogDatabaseState {
    /**
     * ID of the Glue Catalog to create the database in. If omitted, this defaults to the AWS Account ID.
     */
    readonly catalogId?: pulumi.Input<string>;
    /**
     * Description of the database.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The location of the database (for example, an HDFS path).
     */
    readonly locationUri?: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of key-value pairs that define parameters and properties of the database.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a CatalogDatabase resource.
 */
export interface CatalogDatabaseArgs {
    /**
     * ID of the Glue Catalog to create the database in. If omitted, this defaults to the AWS Account ID.
     */
    readonly catalogId?: pulumi.Input<string>;
    /**
     * Description of the database.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The location of the database (for example, an HDFS path).
     */
    readonly locationUri?: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of key-value pairs that define parameters and properties of the database.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
