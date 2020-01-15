// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticLoadBalancingV2.Outputs
{

    [OutputType]
    public sealed class ListenerDefaultActionFixedResponse
    {
        /// <summary>
        /// The content type. Valid values are `text/plain`, `text/css`, `text/html`, `application/javascript` and `application/json`.
        /// </summary>
        public readonly string ContentType;
        /// <summary>
        /// The message body.
        /// </summary>
        public readonly string? MessageBody;
        /// <summary>
        /// The HTTP response code. Valid values are `2XX`, `4XX`, or `5XX`.
        /// </summary>
        public readonly string? StatusCode;

        [OutputConstructor]
        private ListenerDefaultActionFixedResponse(
            string contentType,

            string? messageBody,

            string? statusCode)
        {
            ContentType = contentType;
            MessageBody = messageBody;
            StatusCode = statusCode;
        }
    }
}
