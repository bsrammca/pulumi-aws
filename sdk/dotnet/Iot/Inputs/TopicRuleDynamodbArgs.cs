// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iot.Inputs
{

    public sealed class TopicRuleDynamodbArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The hash key name.
        /// </summary>
        [Input("hashKeyField", required: true)]
        public Input<string> HashKeyField { get; set; } = null!;

        /// <summary>
        /// The hash key type. Valid values are "STRING" or "NUMBER".
        /// </summary>
        [Input("hashKeyType")]
        public Input<string>? HashKeyType { get; set; }

        /// <summary>
        /// The hash key value.
        /// </summary>
        [Input("hashKeyValue", required: true)]
        public Input<string> HashKeyValue { get; set; } = null!;

        /// <summary>
        /// The action payload.
        /// </summary>
        [Input("payloadField")]
        public Input<string>? PayloadField { get; set; }

        /// <summary>
        /// The range key name.
        /// </summary>
        [Input("rangeKeyField")]
        public Input<string>? RangeKeyField { get; set; }

        /// <summary>
        /// The range key type. Valid values are "STRING" or "NUMBER".
        /// </summary>
        [Input("rangeKeyType")]
        public Input<string>? RangeKeyType { get; set; }

        /// <summary>
        /// The range key value.
        /// </summary>
        [Input("rangeKeyValue")]
        public Input<string>? RangeKeyValue { get; set; }

        /// <summary>
        /// The ARN of the IAM role that grants access.
        /// </summary>
        [Input("roleArn", required: true)]
        public Input<string> RoleArn { get; set; } = null!;

        /// <summary>
        /// The name of the DynamoDB table.
        /// </summary>
        [Input("tableName", required: true)]
        public Input<string> TableName { get; set; } = null!;

        public TopicRuleDynamodbArgs()
        {
        }
    }
}
