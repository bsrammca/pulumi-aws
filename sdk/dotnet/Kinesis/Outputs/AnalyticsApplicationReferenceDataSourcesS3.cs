// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Kinesis.Outputs
{

    [OutputType]
    public sealed class AnalyticsApplicationReferenceDataSourcesS3
    {
        public readonly string BucketArn;
        public readonly string FileKey;
        public readonly string RoleArn;

        [OutputConstructor]
        private AnalyticsApplicationReferenceDataSourcesS3(
            string bucketArn,

            string fileKey,

            string roleArn)
        {
            BucketArn = bucketArn;
            FileKey = fileKey;
            RoleArn = roleArn;
        }
    }
}
