// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticBeanstalk.Outputs
{

    [OutputType]
    public sealed class GetApplicationAppversionLifecycleResult
    {
        /// <summary>
        /// Specifies whether delete a version's source bundle from S3 when the application version is deleted.
        /// </summary>
        public readonly bool DeleteSourceFromS3;
        /// <summary>
        /// The number of days to retain an application version.
        /// </summary>
        public readonly int MaxAgeInDays;
        /// <summary>
        /// The maximum number of application versions to retain.
        /// </summary>
        public readonly int MaxCount;
        /// <summary>
        /// The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
        /// </summary>
        public readonly string ServiceRole;

        [OutputConstructor]
        private GetApplicationAppversionLifecycleResult(
            bool deleteSourceFromS3,

            int maxAgeInDays,

            int maxCount,

            string serviceRole)
        {
            DeleteSourceFromS3 = deleteSourceFromS3;
            MaxAgeInDays = maxAgeInDays;
            MaxCount = maxCount;
            ServiceRole = serviceRole;
        }
    }
}
