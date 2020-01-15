// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppAutoScaling.Outputs
{

    [OutputType]
    public sealed class PolicyTargetTrackingScalingPolicyConfiguration
    {
        public readonly Outputs.PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification? CustomizedMetricSpecification;
        public readonly bool? DisableScaleIn;
        public readonly Outputs.PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification? PredefinedMetricSpecification;
        public readonly int? ScaleInCooldown;
        public readonly int? ScaleOutCooldown;
        public readonly double TargetValue;

        [OutputConstructor]
        private PolicyTargetTrackingScalingPolicyConfiguration(
            Outputs.PolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification? customizedMetricSpecification,

            bool? disableScaleIn,

            Outputs.PolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification? predefinedMetricSpecification,

            int? scaleInCooldown,

            int? scaleOutCooldown,

            double targetValue)
        {
            CustomizedMetricSpecification = customizedMetricSpecification;
            DisableScaleIn = disableScaleIn;
            PredefinedMetricSpecification = predefinedMetricSpecification;
            ScaleInCooldown = scaleInCooldown;
            ScaleOutCooldown = scaleOutCooldown;
            TargetValue = targetValue;
        }
    }
}
