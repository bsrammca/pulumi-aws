// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.OpsWorks.Inputs
{

    public sealed class InstanceRootBlockDeviceGetArgs : Pulumi.ResourceArgs
    {
        [Input("deleteOnTermination")]
        public Input<bool>? DeleteOnTermination { get; set; }

        [Input("iops")]
        public Input<int>? Iops { get; set; }

        [Input("volumeSize")]
        public Input<int>? VolumeSize { get; set; }

        [Input("volumeType")]
        public Input<string>? VolumeType { get; set; }

        public InstanceRootBlockDeviceGetArgs()
        {
        }
    }
}
