// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Eks.Outputs
{

    [OutputType]
    public sealed class GetClusterVpcConfigResult
    {
        /// <summary>
        /// The cluster security group that was created by Amazon EKS for the cluster. 
        /// </summary>
        public readonly string ClusterSecurityGroupId;
        /// <summary>
        /// Indicates whether or not the Amazon EKS private API server endpoint is enabled.
        /// </summary>
        public readonly bool EndpointPrivateAccess;
        /// <summary>
        /// Indicates whether or not the Amazon EKS public API server endpoint is enabled.
        /// </summary>
        public readonly bool EndpointPublicAccess;
        /// <summary>
        /// List of security group IDs
        /// </summary>
        public readonly ImmutableArray<string> SecurityGroupIds;
        /// <summary>
        /// List of subnet IDs
        /// </summary>
        public readonly ImmutableArray<string> SubnetIds;
        /// <summary>
        /// The VPC associated with your cluster.
        /// </summary>
        public readonly string VpcId;

        [OutputConstructor]
        private GetClusterVpcConfigResult(
            string clusterSecurityGroupId,

            bool endpointPrivateAccess,

            bool endpointPublicAccess,

            ImmutableArray<string> securityGroupIds,

            ImmutableArray<string> subnetIds,

            string vpcId)
        {
            ClusterSecurityGroupId = clusterSecurityGroupId;
            EndpointPrivateAccess = endpointPrivateAccess;
            EndpointPublicAccess = endpointPublicAccess;
            SecurityGroupIds = securityGroupIds;
            SubnetIds = subnetIds;
            VpcId = vpcId;
        }
    }
}
