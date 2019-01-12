// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class EventStream extends pulumi.CustomResource {
    /**
     * Get an existing EventStream resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventStreamState, opts?: pulumi.CustomResourceOptions): EventStream {
        return new EventStream(name, <any>state, { ...opts, id: id });
    }

    public readonly applicationId: pulumi.Output<string>;
    public readonly destinationStreamArn: pulumi.Output<string>;
    public readonly roleArn: pulumi.Output<string>;

    /**
     * Create a EventStream resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventStreamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventStreamArgs | EventStreamState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: EventStreamState = argsOrState as EventStreamState | undefined;
            inputs["applicationId"] = state ? state.applicationId : undefined;
            inputs["destinationStreamArn"] = state ? state.destinationStreamArn : undefined;
            inputs["roleArn"] = state ? state.roleArn : undefined;
        } else {
            const args = argsOrState as EventStreamArgs | undefined;
            if (!args || args.applicationId === undefined) {
                throw new Error("Missing required property 'applicationId'");
            }
            if (!args || args.destinationStreamArn === undefined) {
                throw new Error("Missing required property 'destinationStreamArn'");
            }
            if (!args || args.roleArn === undefined) {
                throw new Error("Missing required property 'roleArn'");
            }
            inputs["applicationId"] = args ? args.applicationId : undefined;
            inputs["destinationStreamArn"] = args ? args.destinationStreamArn : undefined;
            inputs["roleArn"] = args ? args.roleArn : undefined;
        }
        super("aws:pinpoint/eventStream:EventStream", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventStream resources.
 */
export interface EventStreamState {
    readonly applicationId?: pulumi.Input<string>;
    readonly destinationStreamArn?: pulumi.Input<string>;
    readonly roleArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EventStream resource.
 */
export interface EventStreamArgs {
    readonly applicationId: pulumi.Input<string>;
    readonly destinationStreamArn: pulumi.Input<string>;
    readonly roleArn: pulumi.Input<string>;
}
