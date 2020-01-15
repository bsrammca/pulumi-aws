// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticSearch.Inputs
{

    public sealed class DomainClusterConfigZoneAwarenessConfigArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Number of Availability Zones for the domain to use with `zone_awareness_enabled`. Defaults to `2`. Valid values: `2` or `3`.
        /// </summary>
        [Input("availabilityZoneCount")]
        public Input<int>? AvailabilityZoneCount { get; set; }

        public DomainClusterConfigZoneAwarenessConfigArgs()
        {
        }
    }
}
