// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Inputs
{

    public sealed class BucketLoggingArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the bucket that will receive the log objects.
        /// </summary>
        [Input("targetBucket", required: true)]
        public Input<string> TargetBucket { get; set; } = null!;

        /// <summary>
        /// To specify a key prefix for log objects.
        /// </summary>
        [Input("targetPrefix")]
        public Input<string>? TargetPrefix { get; set; }

        public BucketLoggingArgs()
        {
        }
    }
}
