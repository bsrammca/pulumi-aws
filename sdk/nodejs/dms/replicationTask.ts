// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a DMS (Data Migration Service) replication task resource. DMS replication tasks can be created, updated, deleted, and imported.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/dms_replication_task.html.markdown.
 */
export class ReplicationTask extends pulumi.CustomResource {
    /**
     * Get an existing ReplicationTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReplicationTaskState, opts?: pulumi.CustomResourceOptions): ReplicationTask {
        return new ReplicationTask(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:dms/replicationTask:ReplicationTask';

    /**
     * Returns true if the given object is an instance of ReplicationTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReplicationTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReplicationTask.__pulumiType;
    }

    /**
     * The Unix timestamp integer for the start of the Change Data Capture (CDC) operation.
     */
    public readonly cdcStartTime!: pulumi.Output<string | undefined>;
    /**
     * The migration type. Can be one of `full-load | cdc | full-load-and-cdc`.
     */
    public readonly migrationType!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    public readonly replicationInstanceArn!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) for the replication task.
     */
    public /*out*/ readonly replicationTaskArn!: pulumi.Output<string>;
    /**
     * The replication task identifier.
     */
    public readonly replicationTaskId!: pulumi.Output<string>;
    /**
     * An escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html).
     */
    public readonly replicationTaskSettings!: pulumi.Output<string | undefined>;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint.
     */
    public readonly sourceEndpointArn!: pulumi.Output<string>;
    /**
     * An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)
     */
    public readonly tableMappings!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint.
     */
    public readonly targetEndpointArn!: pulumi.Output<string>;

    /**
     * Create a ReplicationTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicationTaskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReplicationTaskArgs | ReplicationTaskState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ReplicationTaskState | undefined;
            inputs["cdcStartTime"] = state ? state.cdcStartTime : undefined;
            inputs["migrationType"] = state ? state.migrationType : undefined;
            inputs["replicationInstanceArn"] = state ? state.replicationInstanceArn : undefined;
            inputs["replicationTaskArn"] = state ? state.replicationTaskArn : undefined;
            inputs["replicationTaskId"] = state ? state.replicationTaskId : undefined;
            inputs["replicationTaskSettings"] = state ? state.replicationTaskSettings : undefined;
            inputs["sourceEndpointArn"] = state ? state.sourceEndpointArn : undefined;
            inputs["tableMappings"] = state ? state.tableMappings : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["targetEndpointArn"] = state ? state.targetEndpointArn : undefined;
        } else {
            const args = argsOrState as ReplicationTaskArgs | undefined;
            if (!args || args.migrationType === undefined) {
                throw new Error("Missing required property 'migrationType'");
            }
            if (!args || args.replicationInstanceArn === undefined) {
                throw new Error("Missing required property 'replicationInstanceArn'");
            }
            if (!args || args.replicationTaskId === undefined) {
                throw new Error("Missing required property 'replicationTaskId'");
            }
            if (!args || args.sourceEndpointArn === undefined) {
                throw new Error("Missing required property 'sourceEndpointArn'");
            }
            if (!args || args.tableMappings === undefined) {
                throw new Error("Missing required property 'tableMappings'");
            }
            if (!args || args.targetEndpointArn === undefined) {
                throw new Error("Missing required property 'targetEndpointArn'");
            }
            inputs["cdcStartTime"] = args ? args.cdcStartTime : undefined;
            inputs["migrationType"] = args ? args.migrationType : undefined;
            inputs["replicationInstanceArn"] = args ? args.replicationInstanceArn : undefined;
            inputs["replicationTaskId"] = args ? args.replicationTaskId : undefined;
            inputs["replicationTaskSettings"] = args ? args.replicationTaskSettings : undefined;
            inputs["sourceEndpointArn"] = args ? args.sourceEndpointArn : undefined;
            inputs["tableMappings"] = args ? args.tableMappings : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["targetEndpointArn"] = args ? args.targetEndpointArn : undefined;
            inputs["replicationTaskArn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ReplicationTask.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ReplicationTask resources.
 */
export interface ReplicationTaskState {
    /**
     * The Unix timestamp integer for the start of the Change Data Capture (CDC) operation.
     */
    readonly cdcStartTime?: pulumi.Input<string>;
    /**
     * The migration type. Can be one of `full-load | cdc | full-load-and-cdc`.
     */
    readonly migrationType?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    readonly replicationInstanceArn?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) for the replication task.
     */
    readonly replicationTaskArn?: pulumi.Input<string>;
    /**
     * The replication task identifier.
     */
    readonly replicationTaskId?: pulumi.Input<string>;
    /**
     * An escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html).
     */
    readonly replicationTaskSettings?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint.
     */
    readonly sourceEndpointArn?: pulumi.Input<string>;
    /**
     * An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)
     */
    readonly tableMappings?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint.
     */
    readonly targetEndpointArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ReplicationTask resource.
 */
export interface ReplicationTaskArgs {
    /**
     * The Unix timestamp integer for the start of the Change Data Capture (CDC) operation.
     */
    readonly cdcStartTime?: pulumi.Input<string>;
    /**
     * The migration type. Can be one of `full-load | cdc | full-load-and-cdc`.
     */
    readonly migrationType: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    readonly replicationInstanceArn: pulumi.Input<string>;
    /**
     * The replication task identifier.
     */
    readonly replicationTaskId: pulumi.Input<string>;
    /**
     * An escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html).
     */
    readonly replicationTaskSettings?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint.
     */
    readonly sourceEndpointArn: pulumi.Input<string>;
    /**
     * An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)
     */
    readonly tableMappings: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint.
     */
    readonly targetEndpointArn: pulumi.Input<string>;
}
