// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2.Inputs
{

    public sealed class FleetLaunchTemplateConfigOverrideGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Availability Zone in which to launch the instances.
        /// </summary>
        [Input("availabilityZone")]
        public Input<string>? AvailabilityZone { get; set; }

        /// <summary>
        /// Instance type.
        /// </summary>
        [Input("instanceType")]
        public Input<string>? InstanceType { get; set; }

        /// <summary>
        /// Maximum price per unit hour that you are willing to pay for a Spot Instance.
        /// </summary>
        [Input("maxPrice")]
        public Input<string>? MaxPrice { get; set; }

        /// <summary>
        /// Priority for the launch template override. If `on_demand_options` `allocation_strategy` is set to `prioritized`, EC2 Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity. The highest priority is launched first. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority. Valid values are whole numbers starting at 0.
        /// </summary>
        [Input("priority")]
        public Input<double>? Priority { get; set; }

        /// <summary>
        /// ID of the subnet in which to launch the instances.
        /// </summary>
        [Input("subnetId")]
        public Input<string>? SubnetId { get; set; }

        /// <summary>
        /// Number of units provided by the specified instance type.
        /// </summary>
        [Input("weightedCapacity")]
        public Input<double>? WeightedCapacity { get; set; }

        public FleetLaunchTemplateConfigOverrideGetArgs()
        {
        }
    }
}
