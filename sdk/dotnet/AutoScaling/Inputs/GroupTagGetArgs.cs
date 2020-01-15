// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AutoScaling.Inputs
{

    public sealed class GroupTagGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Key
        /// </summary>
        [Input("key", required: true)]
        public Input<string> Key { get; set; } = null!;

        /// <summary>
        /// Enables propagation of the tag to
        /// Amazon EC2 instances launched via this ASG
        /// </summary>
        [Input("propagateAtLaunch", required: true)]
        public Input<bool> PropagateAtLaunch { get; set; } = null!;

        /// <summary>
        /// Value
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public GroupTagGetArgs()
        {
        }
    }
}
