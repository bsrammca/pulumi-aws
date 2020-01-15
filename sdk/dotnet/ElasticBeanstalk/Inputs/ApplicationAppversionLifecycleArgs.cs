// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticBeanstalk.Inputs
{

    public sealed class ApplicationAppversionLifecycleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Set to `true` to delete a version's source bundle from S3 when the application version is deleted.
        /// </summary>
        [Input("deleteSourceFromS3")]
        public Input<bool>? DeleteSourceFromS3 { get; set; }

        /// <summary>
        /// The number of days to retain an application version.
        /// </summary>
        [Input("maxAgeInDays")]
        public Input<int>? MaxAgeInDays { get; set; }

        /// <summary>
        /// The maximum number of application versions to retain.
        /// </summary>
        [Input("maxCount")]
        public Input<int>? MaxCount { get; set; }

        /// <summary>
        /// The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
        /// </summary>
        [Input("serviceRole", required: true)]
        public Input<string> ServiceRole { get; set; } = null!;

        public ApplicationAppversionLifecycleArgs()
        {
        }
    }
}
