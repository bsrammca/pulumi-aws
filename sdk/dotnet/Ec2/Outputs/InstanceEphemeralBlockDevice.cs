// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2.Outputs
{

    [OutputType]
    public sealed class InstanceEphemeralBlockDevice
    {
        /// <summary>
        /// The name of the block device to mount on the instance.
        /// </summary>
        public readonly string DeviceName;
        /// <summary>
        /// Suppresses the specified device included in the AMI's block device mapping.
        /// </summary>
        public readonly bool? NoDevice;
        /// <summary>
        /// The [Instance Store Device
        /// Name](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#InstanceStoreDeviceNames)
        /// (e.g. `"ephemeral0"`).
        /// </summary>
        public readonly string? VirtualName;

        [OutputConstructor]
        private InstanceEphemeralBlockDevice(
            string deviceName,

            bool? noDevice,

            string? virtualName)
        {
            DeviceName = deviceName;
            NoDevice = noDevice;
            VirtualName = virtualName;
        }
    }
}
