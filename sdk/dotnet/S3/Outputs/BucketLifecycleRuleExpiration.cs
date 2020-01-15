// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Outputs
{

    [OutputType]
    public sealed class BucketLifecycleRuleExpiration
    {
        /// <summary>
        /// Specifies the date after which you want the corresponding action to take effect.
        /// </summary>
        public readonly string? Date;
        /// <summary>
        /// The number of days that you want to specify for the default retention period.
        /// </summary>
        public readonly int? Days;
        /// <summary>
        /// On a versioned bucket (versioning-enabled or versioning-suspended bucket), you can add this element in the lifecycle configuration to direct Amazon S3 to delete expired object delete markers.
        /// </summary>
        public readonly bool? ExpiredObjectDeleteMarker;

        [OutputConstructor]
        private BucketLifecycleRuleExpiration(
            string? date,

            int? days,

            bool? expiredObjectDeleteMarker)
        {
            Date = date;
            Days = days;
            ExpiredObjectDeleteMarker = expiredObjectDeleteMarker;
        }
    }
}
