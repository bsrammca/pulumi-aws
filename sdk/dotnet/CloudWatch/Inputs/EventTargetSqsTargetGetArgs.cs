// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CloudWatch.Inputs
{

    public sealed class EventTargetSqsTargetGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The FIFO message group ID to use as the target.
        /// </summary>
        [Input("messageGroupId")]
        public Input<string>? MessageGroupId { get; set; }

        public EventTargetSqsTargetGetArgs()
        {
        }
    }
}
