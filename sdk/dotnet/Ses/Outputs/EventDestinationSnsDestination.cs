// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ses.Outputs
{

    [OutputType]
    public sealed class EventDestinationSnsDestination
    {
        /// <summary>
        /// The ARN of the SNS topic
        /// </summary>
        public readonly string TopicArn;

        [OutputConstructor]
        private EventDestinationSnsDestination(string topicArn)
        {
            TopicArn = topicArn;
        }
    }
}
