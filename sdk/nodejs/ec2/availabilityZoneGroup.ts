// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an EC2 Availability Zone Group, such as updating its opt-in status.
 *
 * > **NOTE:** This is an advanced resource. The provider will automatically assume management of the EC2 Availability Zone Group without import and perform no actions on removal from configuration.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.ec2.AvailabilityZoneGroup("example", {
 *     groupName: "us-west-2-lax-1",
 *     optInStatus: "opted-in",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ec2_availability_zone_group.html.markdown.
 */
export class AvailabilityZoneGroup extends pulumi.CustomResource {
    /**
     * Get an existing AvailabilityZoneGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AvailabilityZoneGroupState, opts?: pulumi.CustomResourceOptions): AvailabilityZoneGroup {
        return new AvailabilityZoneGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/availabilityZoneGroup:AvailabilityZoneGroup';

    /**
     * Returns true if the given object is an instance of AvailabilityZoneGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AvailabilityZoneGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AvailabilityZoneGroup.__pulumiType;
    }

    /**
     * Name of the Availability Zone Group.
     */
    public readonly groupName!: pulumi.Output<string>;
    /**
     * Indicates whether to enable or disable Availability Zone Group. Valid values: `opted-in` or `not-opted-in`.
     */
    public readonly optInStatus!: pulumi.Output<string>;

    /**
     * Create a AvailabilityZoneGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AvailabilityZoneGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AvailabilityZoneGroupArgs | AvailabilityZoneGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AvailabilityZoneGroupState | undefined;
            inputs["groupName"] = state ? state.groupName : undefined;
            inputs["optInStatus"] = state ? state.optInStatus : undefined;
        } else {
            const args = argsOrState as AvailabilityZoneGroupArgs | undefined;
            if (!args || args.groupName === undefined) {
                throw new Error("Missing required property 'groupName'");
            }
            if (!args || args.optInStatus === undefined) {
                throw new Error("Missing required property 'optInStatus'");
            }
            inputs["groupName"] = args ? args.groupName : undefined;
            inputs["optInStatus"] = args ? args.optInStatus : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(AvailabilityZoneGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AvailabilityZoneGroup resources.
 */
export interface AvailabilityZoneGroupState {
    /**
     * Name of the Availability Zone Group.
     */
    readonly groupName?: pulumi.Input<string>;
    /**
     * Indicates whether to enable or disable Availability Zone Group. Valid values: `opted-in` or `not-opted-in`.
     */
    readonly optInStatus?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AvailabilityZoneGroup resource.
 */
export interface AvailabilityZoneGroupArgs {
    /**
     * Name of the Availability Zone Group.
     */
    readonly groupName: pulumi.Input<string>;
    /**
     * Indicates whether to enable or disable Availability Zone Group. Valid values: `opted-in` or `not-opted-in`.
     */
    readonly optInStatus: pulumi.Input<string>;
}
