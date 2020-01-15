// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Outputs
{

    [OutputType]
    public sealed class BucketObjectLockConfigurationRuleDefaultRetention
    {
        /// <summary>
        /// The number of days that you want to specify for the default retention period.
        /// </summary>
        public readonly int? Days;
        /// <summary>
        /// The default Object Lock retention mode you want to apply to new objects placed in this bucket. Valid values are `GOVERNANCE` and `COMPLIANCE`.
        /// </summary>
        public readonly string Mode;
        /// <summary>
        /// The number of years that you want to specify for the default retention period.
        /// </summary>
        public readonly int? Years;

        [OutputConstructor]
        private BucketObjectLockConfigurationRuleDefaultRetention(
            int? days,

            string mode,

            int? years)
        {
            Days = days;
            Mode = mode;
            Years = years;
        }
    }
}
