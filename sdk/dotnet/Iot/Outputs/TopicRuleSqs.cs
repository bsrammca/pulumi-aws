// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iot.Outputs
{

    [OutputType]
    public sealed class TopicRuleSqs
    {
        /// <summary>
        /// The URL of the Amazon SQS queue.
        /// </summary>
        public readonly string QueueUrl;
        /// <summary>
        /// The ARN of the IAM role that grants access.
        /// </summary>
        public readonly string RoleArn;
        /// <summary>
        /// Specifies whether to use Base64 encoding.
        /// </summary>
        public readonly bool UseBase64;

        [OutputConstructor]
        private TopicRuleSqs(
            string queueUrl,

            string roleArn,

            bool useBase64)
        {
            QueueUrl = queueUrl;
            RoleArn = roleArn;
            UseBase64 = useBase64;
        }
    }
}
