// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticSearch.Inputs
{

    public sealed class DomainClusterConfigArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Number of dedicated master nodes in the cluster
        /// </summary>
        [Input("dedicatedMasterCount")]
        public Input<int>? DedicatedMasterCount { get; set; }

        /// <summary>
        /// Indicates whether dedicated master nodes are enabled for the cluster.
        /// </summary>
        [Input("dedicatedMasterEnabled")]
        public Input<bool>? DedicatedMasterEnabled { get; set; }

        /// <summary>
        /// Instance type of the dedicated master nodes in the cluster.
        /// </summary>
        [Input("dedicatedMasterType")]
        public Input<string>? DedicatedMasterType { get; set; }

        /// <summary>
        /// Number of instances in the cluster.
        /// </summary>
        [Input("instanceCount")]
        public Input<int>? InstanceCount { get; set; }

        /// <summary>
        /// Instance type of data nodes in the cluster.
        /// </summary>
        [Input("instanceType")]
        public Input<string>? InstanceType { get; set; }

        /// <summary>
        /// Configuration block containing zone awareness settings. Documented below.
        /// </summary>
        [Input("zoneAwarenessConfig")]
        public Input<Inputs.DomainClusterConfigZoneAwarenessConfigArgs>? ZoneAwarenessConfig { get; set; }

        /// <summary>
        /// Indicates whether zone awareness is enabled. To enable awareness with three Availability Zones, the `availability_zone_count` within the `zone_awareness_config` must be set to `3`.
        /// </summary>
        [Input("zoneAwarenessEnabled")]
        public Input<bool>? ZoneAwarenessEnabled { get; set; }

        public DomainClusterConfigArgs()
        {
        }
    }
}
