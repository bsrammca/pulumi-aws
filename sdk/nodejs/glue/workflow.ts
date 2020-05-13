// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a Glue Workflow resource.
 * The workflow graph (DAG) can be build using the `aws.glue.Trigger` resource. 
 * See the example below for creating a graph with four nodes (two triggers and two jobs). 
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.glue.Workflow("example", {});
 * const exampleStart = new aws.glue.Trigger("example-start", {
 *     actions: [{
 *         jobName: "example-job",
 *     }],
 *     type: "ON_DEMAND",
 *     workflowName: example.name,
 * });
 * const exampleInner = new aws.glue.Trigger("example-inner", {
 *     actions: [{
 *         jobName: "another-example-job",
 *     }],
 *     predicate: {
 *         conditions: [{
 *             jobName: "example-job",
 *             state: "SUCCEEDED",
 *         }],
 *     },
 *     type: "CONDITIONAL",
 *     workflowName: example.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/glue_workflow.html.markdown.
 */
export class Workflow extends pulumi.CustomResource {
    /**
     * Get an existing Workflow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkflowState, opts?: pulumi.CustomResourceOptions): Workflow {
        return new Workflow(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:glue/workflow:Workflow';

    /**
     * Returns true if the given object is an instance of Workflow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Workflow {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Workflow.__pulumiType;
    }

    /**
     * A map of default run properties for this workflow. These properties are passed to all jobs associated to the workflow.
     */
    public readonly defaultRunProperties!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Description of the workflow.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name you assign to this workflow.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a Workflow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WorkflowArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkflowArgs | WorkflowState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as WorkflowState | undefined;
            inputs["defaultRunProperties"] = state ? state.defaultRunProperties : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as WorkflowArgs | undefined;
            inputs["defaultRunProperties"] = args ? args.defaultRunProperties : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Workflow.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Workflow resources.
 */
export interface WorkflowState {
    /**
     * A map of default run properties for this workflow. These properties are passed to all jobs associated to the workflow.
     */
    readonly defaultRunProperties?: pulumi.Input<{[key: string]: any}>;
    /**
     * Description of the workflow.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name you assign to this workflow.
     */
    readonly name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Workflow resource.
 */
export interface WorkflowArgs {
    /**
     * A map of default run properties for this workflow. These properties are passed to all jobs associated to the workflow.
     */
    readonly defaultRunProperties?: pulumi.Input<{[key: string]: any}>;
    /**
     * Description of the workflow.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name you assign to this workflow.
     */
    readonly name?: pulumi.Input<string>;
}
