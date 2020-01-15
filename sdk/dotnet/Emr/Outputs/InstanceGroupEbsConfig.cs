// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Emr.Outputs
{

    [OutputType]
    public sealed class InstanceGroupEbsConfig
    {
        /// <summary>
        /// The number of I/O operations per second (IOPS) that the volume supports.
        /// </summary>
        public readonly int? Iops;
        /// <summary>
        /// The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
        /// </summary>
        public readonly int Size;
        /// <summary>
        /// The volume type. Valid options are 'gp2', 'io1' and 'standard'.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The number of EBS Volumes to attach per instance.
        /// </summary>
        public readonly int? VolumesPerInstance;

        [OutputConstructor]
        private InstanceGroupEbsConfig(
            int? iops,

            int size,

            string type,

            int? volumesPerInstance)
        {
            Iops = iops;
            Size = size;
            Type = type;
            VolumesPerInstance = volumesPerInstance;
        }
    }
}
