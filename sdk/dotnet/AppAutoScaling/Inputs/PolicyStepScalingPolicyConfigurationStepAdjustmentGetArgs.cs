// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppAutoScaling.Inputs
{

    public sealed class PolicyStepScalingPolicyConfigurationStepAdjustmentGetArgs : Pulumi.ResourceArgs
    {
        [Input("metricIntervalLowerBound")]
        public Input<string>? MetricIntervalLowerBound { get; set; }

        [Input("metricIntervalUpperBound")]
        public Input<string>? MetricIntervalUpperBound { get; set; }

        [Input("scalingAdjustment", required: true)]
        public Input<int> ScalingAdjustment { get; set; } = null!;

        public PolicyStepScalingPolicyConfigurationStepAdjustmentGetArgs()
        {
        }
    }
}
