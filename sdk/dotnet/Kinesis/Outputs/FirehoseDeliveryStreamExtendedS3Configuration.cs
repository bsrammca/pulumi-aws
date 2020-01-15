// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Kinesis.Outputs
{

    [OutputType]
    public sealed class FirehoseDeliveryStreamExtendedS3Configuration
    {
        /// <summary>
        /// The ARN of the S3 bucket
        /// </summary>
        public readonly string BucketArn;
        /// <summary>
        /// Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300.
        /// </summary>
        public readonly int? BufferInterval;
        /// <summary>
        /// Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
        /// We recommend setting SizeInMBs to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec set SizeInMBs to be 10 MB or higher.
        /// </summary>
        public readonly int? BufferSize;
        /// <summary>
        /// The CloudWatch Logging Options for the delivery stream. More details are given below.
        /// </summary>
        public readonly Outputs.FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions? CloudwatchLoggingOptions;
        /// <summary>
        /// The compression format. If no value is specified, the default is UNCOMPRESSED. Other supported values are GZIP, ZIP &amp; Snappy. If the destination is redshift you cannot use ZIP or Snappy.
        /// </summary>
        public readonly string? CompressionFormat;
        /// <summary>
        /// Nested argument for the serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. More details given below.
        /// </summary>
        public readonly Outputs.FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration? DataFormatConversionConfiguration;
        /// <summary>
        /// Prefix added to failed records before writing them to S3. This prefix appears immediately following the bucket name.
        /// </summary>
        public readonly string? ErrorOutputPrefix;
        /// <summary>
        /// Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will
        /// be used.
        /// </summary>
        public readonly string? KmsKeyArn;
        /// <summary>
        /// The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered S3 files. You can specify an extra prefix to be added in front of the time format prefix. Note that if the prefix ends with a slash, it appears as a folder in the S3 bucket
        /// </summary>
        public readonly string? Prefix;
        /// <summary>
        /// The data processing configuration.  More details are given below.
        /// </summary>
        public readonly Outputs.FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration? ProcessingConfiguration;
        /// <summary>
        /// The role that Kinesis Data Firehose can use to access AWS Glue. This role must be in the same account you use for Kinesis Data Firehose. Cross-account roles aren't allowed.
        /// </summary>
        public readonly string RoleArn;
        /// <summary>
        /// The configuration for backup in Amazon S3. Required if `s3_backup_mode` is `Enabled`. Supports the same fields as `s3_configuration` object.
        /// </summary>
        public readonly Outputs.FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration? S3BackupConfiguration;
        /// <summary>
        /// Defines how documents should be delivered to Amazon S3.  Valid values are `FailedEventsOnly` and `AllEvents`.  Default value is `FailedEventsOnly`.
        /// </summary>
        public readonly string? S3BackupMode;

        [OutputConstructor]
        private FirehoseDeliveryStreamExtendedS3Configuration(
            string bucketArn,

            int? bufferInterval,

            int? bufferSize,

            Outputs.FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions? cloudwatchLoggingOptions,

            string? compressionFormat,

            Outputs.FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration? dataFormatConversionConfiguration,

            string? errorOutputPrefix,

            string? kmsKeyArn,

            string? prefix,

            Outputs.FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration? processingConfiguration,

            string roleArn,

            Outputs.FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration? s3BackupConfiguration,

            string? s3BackupMode)
        {
            BucketArn = bucketArn;
            BufferInterval = bufferInterval;
            BufferSize = bufferSize;
            CloudwatchLoggingOptions = cloudwatchLoggingOptions;
            CompressionFormat = compressionFormat;
            DataFormatConversionConfiguration = dataFormatConversionConfiguration;
            ErrorOutputPrefix = errorOutputPrefix;
            KmsKeyArn = kmsKeyArn;
            Prefix = prefix;
            ProcessingConfiguration = processingConfiguration;
            RoleArn = roleArn;
            S3BackupConfiguration = s3BackupConfiguration;
            S3BackupMode = s3BackupMode;
        }
    }
}
