// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Lambda.Outputs
{

    [OutputType]
    public sealed class FunctionVpcConfig
    {
        /// <summary>
        /// A list of security group IDs associated with the Lambda function.
        /// </summary>
        public readonly ImmutableArray<string> SecurityGroupIds;
        /// <summary>
        /// A list of subnet IDs associated with the Lambda function.
        /// </summary>
        public readonly ImmutableArray<string> SubnetIds;
        public readonly string? VpcId;

        [OutputConstructor]
        private FunctionVpcConfig(
            ImmutableArray<string> securityGroupIds,

            ImmutableArray<string> subnetIds,

            string? vpcId)
        {
            SecurityGroupIds = securityGroupIds;
            SubnetIds = subnetIds;
            VpcId = vpcId;
        }
    }
}
