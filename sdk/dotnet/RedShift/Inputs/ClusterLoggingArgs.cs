// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.RedShift.Inputs
{

    public sealed class ClusterLoggingArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of an existing S3 bucket where the log files are to be stored. Must be in the same region as the cluster and the cluster must have read bucket and put object permissions.
        /// For more information on the permissions required for the bucket, please read the AWS [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html#db-auditing-enable-logging)
        /// </summary>
        [Input("bucketName")]
        public Input<string>? BucketName { get; set; }

        /// <summary>
        /// Enables logging information such as queries and connection attempts, for the specified Amazon Redshift cluster.
        /// </summary>
        [Input("enable", required: true)]
        public Input<bool> Enable { get; set; } = null!;

        /// <summary>
        /// The prefix applied to the log file names.
        /// </summary>
        [Input("s3KeyPrefix")]
        public Input<string>? S3KeyPrefix { get; set; }

        public ClusterLoggingArgs()
        {
        }
    }
}
