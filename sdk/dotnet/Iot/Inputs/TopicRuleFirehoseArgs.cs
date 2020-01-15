// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iot.Inputs
{

    public sealed class TopicRuleFirehoseArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The delivery stream name.
        /// </summary>
        [Input("deliveryStreamName", required: true)]
        public Input<string> DeliveryStreamName { get; set; } = null!;

        /// <summary>
        /// The ARN of the IAM role that grants access.
        /// </summary>
        [Input("roleArn", required: true)]
        public Input<string> RoleArn { get; set; } = null!;

        /// <summary>
        /// A character separator that is used to separate records written to the Firehose stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
        /// </summary>
        [Input("separator")]
        public Input<string>? Separator { get; set; }

        public TopicRuleFirehoseArgs()
        {
        }
    }
}
