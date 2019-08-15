// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides an SSM Maintenance Window Target resource
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ssm_maintenance_window_target.html.markdown.
 */
export class MaintenanceWindowTarget extends pulumi.CustomResource {
    /**
     * Get an existing MaintenanceWindowTarget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MaintenanceWindowTargetState, opts?: pulumi.CustomResourceOptions): MaintenanceWindowTarget {
        return new MaintenanceWindowTarget(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ssm/maintenanceWindowTarget:MaintenanceWindowTarget';

    /**
     * Returns true if the given object is an instance of MaintenanceWindowTarget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MaintenanceWindowTarget {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MaintenanceWindowTarget.__pulumiType;
    }

    /**
     * The description of the maintenance window target.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the maintenance window target.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.
     */
    public readonly ownerInformation!: pulumi.Output<string | undefined>;
    /**
     * The type of target being registered with the Maintenance Window. Possible values `INSTANCE`.
     */
    public readonly resourceType!: pulumi.Output<string>;
    /**
     * The targets (either instances or tags). Instances are specified using Key=InstanceIds,Values=InstanceId1,InstanceId2. Tags are specified using Key=tag name,Values=tag value.
     */
    public readonly targets!: pulumi.Output<outputApi.ssm.MaintenanceWindowTargetTarget[]>;
    /**
     * The Id of the maintenance window to register the target with.
     */
    public readonly windowId!: pulumi.Output<string>;

    /**
     * Create a MaintenanceWindowTarget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MaintenanceWindowTargetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MaintenanceWindowTargetArgs | MaintenanceWindowTargetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as MaintenanceWindowTargetState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["ownerInformation"] = state ? state.ownerInformation : undefined;
            inputs["resourceType"] = state ? state.resourceType : undefined;
            inputs["targets"] = state ? state.targets : undefined;
            inputs["windowId"] = state ? state.windowId : undefined;
        } else {
            const args = argsOrState as MaintenanceWindowTargetArgs | undefined;
            if (!args || args.resourceType === undefined) {
                throw new Error("Missing required property 'resourceType'");
            }
            if (!args || args.targets === undefined) {
                throw new Error("Missing required property 'targets'");
            }
            if (!args || args.windowId === undefined) {
                throw new Error("Missing required property 'windowId'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["ownerInformation"] = args ? args.ownerInformation : undefined;
            inputs["resourceType"] = args ? args.resourceType : undefined;
            inputs["targets"] = args ? args.targets : undefined;
            inputs["windowId"] = args ? args.windowId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(MaintenanceWindowTarget.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering MaintenanceWindowTarget resources.
 */
export interface MaintenanceWindowTargetState {
    /**
     * The description of the maintenance window target.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the maintenance window target.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.
     */
    readonly ownerInformation?: pulumi.Input<string>;
    /**
     * The type of target being registered with the Maintenance Window. Possible values `INSTANCE`.
     */
    readonly resourceType?: pulumi.Input<string>;
    /**
     * The targets (either instances or tags). Instances are specified using Key=InstanceIds,Values=InstanceId1,InstanceId2. Tags are specified using Key=tag name,Values=tag value.
     */
    readonly targets?: pulumi.Input<pulumi.Input<inputApi.ssm.MaintenanceWindowTargetTarget>[]>;
    /**
     * The Id of the maintenance window to register the target with.
     */
    readonly windowId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MaintenanceWindowTarget resource.
 */
export interface MaintenanceWindowTargetArgs {
    /**
     * The description of the maintenance window target.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the maintenance window target.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.
     */
    readonly ownerInformation?: pulumi.Input<string>;
    /**
     * The type of target being registered with the Maintenance Window. Possible values `INSTANCE`.
     */
    readonly resourceType: pulumi.Input<string>;
    /**
     * The targets (either instances or tags). Instances are specified using Key=InstanceIds,Values=InstanceId1,InstanceId2. Tags are specified using Key=tag name,Values=tag value.
     */
    readonly targets: pulumi.Input<pulumi.Input<inputApi.ssm.MaintenanceWindowTargetTarget>[]>;
    /**
     * The Id of the maintenance window to register the target with.
     */
    readonly windowId: pulumi.Input<string>;
}
