// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ApplicationLoadBalancing.Inputs
{

    public sealed class ListenerDefaultActionFixedResponseGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The content type. Valid values are `text/plain`, `text/css`, `text/html`, `application/javascript` and `application/json`.
        /// </summary>
        [Input("contentType", required: true)]
        public Input<string> ContentType { get; set; } = null!;

        /// <summary>
        /// The message body.
        /// </summary>
        [Input("messageBody")]
        public Input<string>? MessageBody { get; set; }

        /// <summary>
        /// The HTTP response code. Valid values are `2XX`, `4XX`, or `5XX`.
        /// </summary>
        [Input("statusCode")]
        public Input<string>? StatusCode { get; set; }

        public ListenerDefaultActionFixedResponseGetArgs()
        {
        }
    }
}
