// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AutoScaling.Outputs
{

    [OutputType]
    public sealed class GroupTag
    {
        /// <summary>
        /// Key
        /// </summary>
        public readonly string Key;
        /// <summary>
        /// Enables propagation of the tag to
        /// Amazon EC2 instances launched via this ASG
        /// </summary>
        public readonly bool PropagateAtLaunch;
        /// <summary>
        /// Value
        /// </summary>
        public readonly string Value;

        [OutputConstructor]
        private GroupTag(
            string key,

            bool propagateAtLaunch,

            string value)
        {
            Key = key;
            PropagateAtLaunch = propagateAtLaunch;
            Value = value;
        }
    }
}
