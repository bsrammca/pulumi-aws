// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Emr.Outputs
{

    [OutputType]
    public sealed class ClusterMasterInstanceGroup
    {
        public readonly string? BidPrice;
        public readonly ImmutableArray<Outputs.ClusterMasterInstanceGroupEbsConfig> EbsConfigs;
        /// <summary>
        /// The ID of the EMR Cluster
        /// </summary>
        public readonly string? Id;
        public readonly int? InstanceCount;
        public readonly string InstanceType;
        /// <summary>
        /// The name of the job flow
        /// </summary>
        public readonly string? Name;

        [OutputConstructor]
        private ClusterMasterInstanceGroup(
            string? bidPrice,

            ImmutableArray<Outputs.ClusterMasterInstanceGroupEbsConfig> ebsConfigs,

            string? id,

            int? instanceCount,

            string instanceType,

            string? name)
        {
            BidPrice = bidPrice;
            EbsConfigs = ebsConfigs;
            Id = id;
            InstanceCount = instanceCount;
            InstanceType = instanceType;
            Name = name;
        }
    }
}
