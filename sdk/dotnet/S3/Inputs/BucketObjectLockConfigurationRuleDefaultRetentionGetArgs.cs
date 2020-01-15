// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Inputs
{

    public sealed class BucketObjectLockConfigurationRuleDefaultRetentionGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The number of days that you want to specify for the default retention period.
        /// </summary>
        [Input("days")]
        public Input<int>? Days { get; set; }

        /// <summary>
        /// The default Object Lock retention mode you want to apply to new objects placed in this bucket. Valid values are `GOVERNANCE` and `COMPLIANCE`.
        /// </summary>
        [Input("mode", required: true)]
        public Input<string> Mode { get; set; } = null!;

        /// <summary>
        /// The number of years that you want to specify for the default retention period.
        /// </summary>
        [Input("years")]
        public Input<int>? Years { get; set; }

        public BucketObjectLockConfigurationRuleDefaultRetentionGetArgs()
        {
        }
    }
}
