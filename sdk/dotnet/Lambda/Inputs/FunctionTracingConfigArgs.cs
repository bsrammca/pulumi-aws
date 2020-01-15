// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Lambda.Inputs
{

    public sealed class FunctionTracingConfigArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Can be either `PassThrough` or `Active`. If PassThrough, Lambda will only trace
        /// the request from an upstream service if it contains a tracing header with
        /// "sampled=1". If Active, Lambda will respect any tracing header it receives
        /// from an upstream service. If no tracing header is received, Lambda will call
        /// X-Ray for a tracing decision.
        /// </summary>
        [Input("mode", required: true)]
        public Input<string> Mode { get; set; } = null!;

        public FunctionTracingConfigArgs()
        {
        }
    }
}
