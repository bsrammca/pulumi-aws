// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Emr.Inputs
{

    public sealed class ClusterInstanceGroupEbsConfigGetArgs : Pulumi.ResourceArgs
    {
        [Input("iops")]
        public Input<int>? Iops { get; set; }

        [Input("size", required: true)]
        public Input<int> Size { get; set; } = null!;

        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        [Input("volumesPerInstance")]
        public Input<int>? VolumesPerInstance { get; set; }

        public ClusterInstanceGroupEbsConfigGetArgs()
        {
        }
    }
}
