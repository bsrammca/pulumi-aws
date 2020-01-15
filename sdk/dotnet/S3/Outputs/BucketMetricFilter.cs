// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Outputs
{

    [OutputType]
    public sealed class BucketMetricFilter
    {
        /// <summary>
        /// Object prefix for filtering (singular).
        /// </summary>
        public readonly string? Prefix;
        /// <summary>
        /// Object tags for filtering (up to 10).
        /// </summary>
        public readonly ImmutableDictionary<string, object>? Tags;

        [OutputConstructor]
        private BucketMetricFilter(
            string? prefix,

            ImmutableDictionary<string, object>? tags)
        {
            Prefix = prefix;
            Tags = tags;
        }
    }
}
