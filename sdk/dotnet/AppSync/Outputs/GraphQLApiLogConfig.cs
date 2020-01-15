// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppSync.Outputs
{

    [OutputType]
    public sealed class GraphQLApiLogConfig
    {
        /// <summary>
        /// Amazon Resource Name of the service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account.
        /// </summary>
        public readonly string CloudwatchLogsRoleArn;
        /// <summary>
        /// Field logging level. Valid values: `ALL`, `ERROR`, `NONE`.
        /// </summary>
        public readonly string FieldLogLevel;

        [OutputConstructor]
        private GraphQLApiLogConfig(
            string cloudwatchLogsRoleArn,

            string fieldLogLevel)
        {
            CloudwatchLogsRoleArn = cloudwatchLogsRoleArn;
            FieldLogLevel = fieldLogLevel;
        }
    }
}
