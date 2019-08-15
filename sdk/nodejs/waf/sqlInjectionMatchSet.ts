// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a WAF SQL Injection Match Set Resource
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/waf_sql_injection_match_set.html.markdown.
 */
export class SqlInjectionMatchSet extends pulumi.CustomResource {
    /**
     * Get an existing SqlInjectionMatchSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlInjectionMatchSetState, opts?: pulumi.CustomResourceOptions): SqlInjectionMatchSet {
        return new SqlInjectionMatchSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:waf/sqlInjectionMatchSet:SqlInjectionMatchSet';

    /**
     * Returns true if the given object is an instance of SqlInjectionMatchSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlInjectionMatchSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlInjectionMatchSet.__pulumiType;
    }

    /**
     * The name or description of the SQL Injection Match Set.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
     */
    public readonly sqlInjectionMatchTuples!: pulumi.Output<outputApi.waf.SqlInjectionMatchSetSqlInjectionMatchTuple[] | undefined>;

    /**
     * Create a SqlInjectionMatchSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SqlInjectionMatchSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SqlInjectionMatchSetArgs | SqlInjectionMatchSetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SqlInjectionMatchSetState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["sqlInjectionMatchTuples"] = state ? state.sqlInjectionMatchTuples : undefined;
        } else {
            const args = argsOrState as SqlInjectionMatchSetArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["sqlInjectionMatchTuples"] = args ? args.sqlInjectionMatchTuples : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SqlInjectionMatchSet.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SqlInjectionMatchSet resources.
 */
export interface SqlInjectionMatchSetState {
    /**
     * The name or description of the SQL Injection Match Set.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
     */
    readonly sqlInjectionMatchTuples?: pulumi.Input<pulumi.Input<inputApi.waf.SqlInjectionMatchSetSqlInjectionMatchTuple>[]>;
}

/**
 * The set of arguments for constructing a SqlInjectionMatchSet resource.
 */
export interface SqlInjectionMatchSetArgs {
    /**
     * The name or description of the SQL Injection Match Set.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
     */
    readonly sqlInjectionMatchTuples?: pulumi.Input<pulumi.Input<inputApi.waf.SqlInjectionMatchSetSqlInjectionMatchTuple>[]>;
}
