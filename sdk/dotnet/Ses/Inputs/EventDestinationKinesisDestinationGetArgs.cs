// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ses.Inputs
{

    public sealed class EventDestinationKinesisDestinationGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ARN of the role that has permissions to access the Kinesis Stream
        /// </summary>
        [Input("roleArn", required: true)]
        public Input<string> RoleArn { get; set; } = null!;

        /// <summary>
        /// The ARN of the Kinesis Stream
        /// </summary>
        [Input("streamArn", required: true)]
        public Input<string> StreamArn { get; set; } = null!;

        public EventDestinationKinesisDestinationGetArgs()
        {
        }
    }
}
