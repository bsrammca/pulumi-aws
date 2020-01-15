// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AutoScaling.Inputs
{

    public sealed class PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The metric type.
        /// </summary>
        [Input("predefinedMetricType", required: true)]
        public Input<string> PredefinedMetricType { get; set; } = null!;

        /// <summary>
        /// Identifies the resource associated with the metric type.
        /// </summary>
        [Input("resourceLabel")]
        public Input<string>? ResourceLabel { get; set; }

        public PolicyTargetTrackingConfigurationPredefinedMetricSpecificationArgs()
        {
        }
    }
}
