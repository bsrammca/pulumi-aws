// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticLoadBalancing.Inputs
{

    public sealed class LoadBalancerAccessLogsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The S3 bucket name to store the logs in.
        /// </summary>
        [Input("bucket", required: true)]
        public Input<string> Bucket { get; set; } = null!;

        /// <summary>
        /// The S3 bucket prefix. Logs are stored in the root if not configured.
        /// </summary>
        [Input("bucketPrefix")]
        public Input<string>? BucketPrefix { get; set; }

        /// <summary>
        /// Boolean to enable / disable `access_logs`. Default is `true`
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// The interval between checks.
        /// </summary>
        [Input("interval")]
        public Input<int>? Interval { get; set; }

        public LoadBalancerAccessLogsArgs()
        {
        }
    }
}
