// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iot.Inputs
{

    public sealed class TopicRuleCloudwatchMetricGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The CloudWatch metric name.
        /// </summary>
        [Input("metricName", required: true)]
        public Input<string> MetricName { get; set; } = null!;

        /// <summary>
        /// The CloudWatch metric namespace name.
        /// </summary>
        [Input("metricNamespace", required: true)]
        public Input<string> MetricNamespace { get; set; } = null!;

        /// <summary>
        /// An optional Unix timestamp (http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp).
        /// </summary>
        [Input("metricTimestamp")]
        public Input<string>? MetricTimestamp { get; set; }

        /// <summary>
        /// The metric unit (supported units can be found here: http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit)
        /// </summary>
        [Input("metricUnit", required: true)]
        public Input<string> MetricUnit { get; set; } = null!;

        /// <summary>
        /// The CloudWatch metric value.
        /// </summary>
        [Input("metricValue", required: true)]
        public Input<string> MetricValue { get; set; } = null!;

        /// <summary>
        /// The ARN of the IAM role that grants access.
        /// </summary>
        [Input("roleArn", required: true)]
        public Input<string> RoleArn { get; set; } = null!;

        public TopicRuleCloudwatchMetricGetArgs()
        {
        }
    }
}
