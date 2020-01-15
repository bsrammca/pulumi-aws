// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CloudFront.Inputs
{

    public sealed class DistributionCustomErrorResponseGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The minimum amount of time you want
        /// HTTP error codes to stay in CloudFront caches before CloudFront queries your
        /// origin to see whether the object has been updated.
        /// </summary>
        [Input("errorCachingMinTtl")]
        public Input<int>? ErrorCachingMinTtl { get; set; }

        /// <summary>
        /// The 4xx or 5xx HTTP status code that you want to
        /// customize.
        /// </summary>
        [Input("errorCode", required: true)]
        public Input<int> ErrorCode { get; set; } = null!;

        /// <summary>
        /// The HTTP status code that you want CloudFront
        /// to return with the custom error page to the viewer.
        /// </summary>
        [Input("responseCode")]
        public Input<int>? ResponseCode { get; set; }

        /// <summary>
        /// The path of the custom error page (for
        /// example, `/custom_404.html`).
        /// </summary>
        [Input("responsePagePath")]
        public Input<string>? ResponsePagePath { get; set; }

        public DistributionCustomErrorResponseGetArgs()
        {
        }
    }
}
