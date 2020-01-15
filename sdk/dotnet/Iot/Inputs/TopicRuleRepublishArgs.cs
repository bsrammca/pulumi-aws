// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iot.Inputs
{

    public sealed class TopicRuleRepublishArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ARN of the IAM role that grants access.
        /// </summary>
        [Input("roleArn", required: true)]
        public Input<string> RoleArn { get; set; } = null!;

        /// <summary>
        /// The name of the MQTT topic the message should be republished to.
        /// </summary>
        [Input("topic", required: true)]
        public Input<string> Topic { get; set; } = null!;

        public TopicRuleRepublishArgs()
        {
        }
    }
}
