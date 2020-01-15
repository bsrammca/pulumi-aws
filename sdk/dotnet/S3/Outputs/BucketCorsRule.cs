// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Outputs
{

    [OutputType]
    public sealed class BucketCorsRule
    {
        /// <summary>
        /// Specifies which headers are allowed.
        /// </summary>
        public readonly ImmutableArray<string> AllowedHeaders;
        /// <summary>
        /// Specifies which methods are allowed. Can be `GET`, `PUT`, `POST`, `DELETE` or `HEAD`.
        /// </summary>
        public readonly ImmutableArray<string> AllowedMethods;
        /// <summary>
        /// Specifies which origins are allowed.
        /// </summary>
        public readonly ImmutableArray<string> AllowedOrigins;
        /// <summary>
        /// Specifies expose header in the response.
        /// </summary>
        public readonly ImmutableArray<string> ExposeHeaders;
        /// <summary>
        /// Specifies time in seconds that browser can cache the response for a preflight request.
        /// </summary>
        public readonly int? MaxAgeSeconds;

        [OutputConstructor]
        private BucketCorsRule(
            ImmutableArray<string> allowedHeaders,

            ImmutableArray<string> allowedMethods,

            ImmutableArray<string> allowedOrigins,

            ImmutableArray<string> exposeHeaders,

            int? maxAgeSeconds)
        {
            AllowedHeaders = allowedHeaders;
            AllowedMethods = allowedMethods;
            AllowedOrigins = allowedOrigins;
            ExposeHeaders = exposeHeaders;
            MaxAgeSeconds = maxAgeSeconds;
        }
    }
}
