// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.OpsWorks.Inputs
{

    public sealed class CustomLayerEbsVolumeArgs : Pulumi.ResourceArgs
    {
        [Input("encrypted")]
        public Input<bool>? Encrypted { get; set; }

        [Input("iops")]
        public Input<int>? Iops { get; set; }

        [Input("mountPoint", required: true)]
        public Input<string> MountPoint { get; set; } = null!;

        [Input("numberOfDisks", required: true)]
        public Input<int> NumberOfDisks { get; set; } = null!;

        [Input("raidLevel")]
        public Input<string>? RaidLevel { get; set; }

        [Input("size", required: true)]
        public Input<int> Size { get; set; } = null!;

        [Input("type")]
        public Input<string>? Type { get; set; }

        public CustomLayerEbsVolumeArgs()
        {
        }
    }
}
