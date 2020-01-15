// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Kinesis.Outputs
{

    [OutputType]
    public sealed class AnalyticsApplicationOutput
    {
        /// <summary>
        /// The ARN of the Kinesis Analytics Application.
        /// </summary>
        public readonly string? Id;
        public readonly Outputs.AnalyticsApplicationOutputKinesisFirehose? KinesisFirehose;
        public readonly Outputs.AnalyticsApplicationOutputKinesisStream? KinesisStream;
        public readonly Outputs.AnalyticsApplicationOutputLambda? Lambda;
        /// <summary>
        /// Name of the Kinesis Analytics Application.
        /// </summary>
        public readonly string Name;
        public readonly Outputs.AnalyticsApplicationOutputSchema Schema;

        [OutputConstructor]
        private AnalyticsApplicationOutput(
            string? id,

            Outputs.AnalyticsApplicationOutputKinesisFirehose? kinesisFirehose,

            Outputs.AnalyticsApplicationOutputKinesisStream? kinesisStream,

            Outputs.AnalyticsApplicationOutputLambda? lambda,

            string name,

            Outputs.AnalyticsApplicationOutputSchema schema)
        {
            Id = id;
            KinesisFirehose = kinesisFirehose;
            KinesisStream = kinesisStream;
            Lambda = lambda;
            Name = name;
            Schema = schema;
        }
    }
}
