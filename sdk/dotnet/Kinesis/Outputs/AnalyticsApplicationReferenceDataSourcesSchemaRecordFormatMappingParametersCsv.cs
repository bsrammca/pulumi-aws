// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Kinesis.Outputs
{

    [OutputType]
    public sealed class AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv
    {
        public readonly string RecordColumnDelimiter;
        public readonly string RecordRowDelimiter;

        [OutputConstructor]
        private AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv(
            string recordColumnDelimiter,

            string recordRowDelimiter)
        {
            RecordColumnDelimiter = recordColumnDelimiter;
            RecordRowDelimiter = recordRowDelimiter;
        }
    }
}
