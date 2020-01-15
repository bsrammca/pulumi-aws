// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Eks.Outputs
{

    [OutputType]
    public sealed class NodeGroupScalingConfig
    {
        /// <summary>
        /// Desired number of worker nodes.
        /// </summary>
        public readonly int DesiredSize;
        /// <summary>
        /// Maximum number of worker nodes.
        /// </summary>
        public readonly int MaxSize;
        /// <summary>
        /// Minimum number of worker nodes.
        /// </summary>
        public readonly int MinSize;

        [OutputConstructor]
        private NodeGroupScalingConfig(
            int desiredSize,

            int maxSize,

            int minSize)
        {
            DesiredSize = desiredSize;
            MaxSize = maxSize;
            MinSize = minSize;
        }
    }
}
