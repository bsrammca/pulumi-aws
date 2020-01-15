// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodeBuild.Outputs
{

    [OutputType]
    public sealed class ProjectVpcConfig
    {
        /// <summary>
        /// The security group IDs to assign to running builds.
        /// </summary>
        public readonly ImmutableArray<string> SecurityGroupIds;
        /// <summary>
        /// The subnet IDs within which to run builds.
        /// </summary>
        public readonly ImmutableArray<string> Subnets;
        /// <summary>
        /// The ID of the VPC within which to run builds.
        /// </summary>
        public readonly string VpcId;

        [OutputConstructor]
        private ProjectVpcConfig(
            ImmutableArray<string> securityGroupIds,

            ImmutableArray<string> subnets,

            string vpcId)
        {
            SecurityGroupIds = securityGroupIds;
            Subnets = subnets;
            VpcId = vpcId;
        }
    }
}
