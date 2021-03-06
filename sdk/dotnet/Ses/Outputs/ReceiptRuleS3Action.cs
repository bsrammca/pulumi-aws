// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ses.Outputs
{

    [OutputType]
    public sealed class ReceiptRuleS3Action
    {
        /// <summary>
        /// The name of the S3 bucket
        /// </summary>
        public readonly string BucketName;
        /// <summary>
        /// The ARN of the KMS key
        /// </summary>
        public readonly string? KmsKeyArn;
        /// <summary>
        /// The key prefix of the S3 bucket
        /// </summary>
        public readonly string? ObjectKeyPrefix;
        /// <summary>
        /// The position of the action in the receipt rule
        /// </summary>
        public readonly int Position;
        /// <summary>
        /// The ARN of an SNS topic to notify
        /// </summary>
        public readonly string? TopicArn;

        [OutputConstructor]
        private ReceiptRuleS3Action(
            string bucketName,

            string? kmsKeyArn,

            string? objectKeyPrefix,

            int position,

            string? topicArn)
        {
            BucketName = bucketName;
            KmsKeyArn = kmsKeyArn;
            ObjectKeyPrefix = objectKeyPrefix;
            Position = position;
            TopicArn = topicArn;
        }
    }
}
