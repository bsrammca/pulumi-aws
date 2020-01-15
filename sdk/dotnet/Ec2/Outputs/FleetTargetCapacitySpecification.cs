// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2.Outputs
{

    [OutputType]
    public sealed class FleetTargetCapacitySpecification
    {
        /// <summary>
        /// Default target capacity type. Valid values: `on-demand`, `spot`.
        /// </summary>
        public readonly string DefaultTargetCapacityType;
        /// <summary>
        /// The number of On-Demand units to request.
        /// </summary>
        public readonly int? OnDemandTargetCapacity;
        /// <summary>
        /// The number of Spot units to request.
        /// </summary>
        public readonly int? SpotTargetCapacity;
        /// <summary>
        /// The number of units to request, filled using `default_target_capacity_type`.
        /// </summary>
        public readonly int TotalTargetCapacity;

        [OutputConstructor]
        private FleetTargetCapacitySpecification(
            string defaultTargetCapacityType,

            int? onDemandTargetCapacity,

            int? spotTargetCapacity,

            int totalTargetCapacity)
        {
            DefaultTargetCapacityType = defaultTargetCapacityType;
            OnDemandTargetCapacity = onDemandTargetCapacity;
            SpotTargetCapacity = spotTargetCapacity;
            TotalTargetCapacity = totalTargetCapacity;
        }
    }
}
