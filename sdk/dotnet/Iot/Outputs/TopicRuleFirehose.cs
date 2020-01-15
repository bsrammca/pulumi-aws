// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iot.Outputs
{

    [OutputType]
    public sealed class TopicRuleFirehose
    {
        /// <summary>
        /// The delivery stream name.
        /// </summary>
        public readonly string DeliveryStreamName;
        /// <summary>
        /// The ARN of the IAM role that grants access.
        /// </summary>
        public readonly string RoleArn;
        /// <summary>
        /// A character separator that is used to separate records written to the Firehose stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
        /// </summary>
        public readonly string? Separator;

        [OutputConstructor]
        private TopicRuleFirehose(
            string deliveryStreamName,

            string roleArn,

            string? separator)
        {
            DeliveryStreamName = deliveryStreamName;
            RoleArn = roleArn;
            Separator = separator;
        }
    }
}
