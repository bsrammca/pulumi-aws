// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Kinesis.Inputs
{

    public sealed class AnalyticsApplicationOutputSchemaArgs : Pulumi.ResourceArgs
    {
        [Input("recordFormatType")]
        public Input<string>? RecordFormatType { get; set; }

        public AnalyticsApplicationOutputSchemaArgs()
        {
        }
    }
}
