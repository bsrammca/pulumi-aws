// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.DynamoDB.Inputs
{

    public sealed class TableTtlGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the table attribute to store the TTL timestamp in.
        /// </summary>
        [Input("attributeName", required: true)]
        public Input<string> AttributeName { get; set; } = null!;

        /// <summary>
        /// Whether to enable point-in-time recovery - note that it can take up to 10 minutes to enable for new tables. If the `point_in_time_recovery` block is not provided then this defaults to `false`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        public TableTtlGetArgs()
        {
        }
    }
}
