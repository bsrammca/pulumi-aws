// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2.Outputs
{

    [OutputType]
    public sealed class SpotFleetRequestLaunchSpecificationEbsBlockDevice
    {
        public readonly bool? DeleteOnTermination;
        public readonly string DeviceName;
        public readonly bool? Encrypted;
        public readonly int? Iops;
        public readonly string? KmsKeyId;
        public readonly string? SnapshotId;
        public readonly int? VolumeSize;
        public readonly string? VolumeType;

        [OutputConstructor]
        private SpotFleetRequestLaunchSpecificationEbsBlockDevice(
            bool? deleteOnTermination,

            string deviceName,

            bool? encrypted,

            int? iops,

            string? kmsKeyId,

            string? snapshotId,

            int? volumeSize,

            string? volumeType)
        {
            DeleteOnTermination = deleteOnTermination;
            DeviceName = deviceName;
            Encrypted = encrypted;
            Iops = iops;
            KmsKeyId = kmsKeyId;
            SnapshotId = snapshotId;
            VolumeSize = volumeSize;
            VolumeType = volumeType;
        }
    }
}
