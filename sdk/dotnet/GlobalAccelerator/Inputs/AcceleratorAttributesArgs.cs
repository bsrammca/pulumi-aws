// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.GlobalAccelerator.Inputs
{

    public sealed class AcceleratorAttributesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Indicates whether flow logs are enabled.
        /// </summary>
        [Input("flowLogsEnabled")]
        public Input<bool>? FlowLogsEnabled { get; set; }

        /// <summary>
        /// The name of the Amazon S3 bucket for the flow logs.
        /// </summary>
        [Input("flowLogsS3Bucket")]
        public Input<string>? FlowLogsS3Bucket { get; set; }

        /// <summary>
        /// The prefix for the location in the Amazon S3 bucket for the flow logs.
        /// </summary>
        [Input("flowLogsS3Prefix")]
        public Input<string>? FlowLogsS3Prefix { get; set; }

        public AcceleratorAttributesArgs()
        {
        }
    }
}
