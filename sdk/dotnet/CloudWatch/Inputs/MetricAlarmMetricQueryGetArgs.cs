// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CloudWatch.Inputs
{

    public sealed class MetricAlarmMetricQueryGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the id of the other metrics to refer to those metrics, and can also use the id of other expressions to use the result of those expressions. For more information about metric math expressions, see Metric Math Syntax and Functions in the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax).
        /// </summary>
        [Input("expression")]
        public Input<string>? Expression { get; set; }

        /// <summary>
        /// A short name used to tie this object to the results in the response. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
        /// </summary>
        [Input("id", required: true)]
        public Input<string> Id { get; set; } = null!;

        /// <summary>
        /// A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents.
        /// </summary>
        [Input("label")]
        public Input<string>? Label { get; set; }

        /// <summary>
        /// The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
        /// </summary>
        [Input("metric")]
        public Input<Inputs.MetricAlarmMetricQueryMetricGetArgs>? Metric { get; set; }

        /// <summary>
        /// Specify exactly one `metric_query` to be `true` to use that `metric_query` result as the alarm.
        /// </summary>
        [Input("returnData")]
        public Input<bool>? ReturnData { get; set; }

        public MetricAlarmMetricQueryGetArgs()
        {
        }
    }
}
