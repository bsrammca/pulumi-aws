// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2
{
    public static partial class Invokes
    {
        /// <summary>
        /// The VPC Endpoint data source provides details about
        /// a specific VPC endpoint.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/vpc_endpoint.html.markdown.
        /// </summary>
        public static Task<GetVpcEndpointResult> GetVpcEndpoint(GetVpcEndpointArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVpcEndpointResult>("aws:ec2/getVpcEndpoint:getVpcEndpoint", args ?? InvokeArgs.Empty, options.WithVersion());
    }


    public sealed class GetVpcEndpointArgs : Pulumi.InvokeArgs
    {
        [Input("filters")]
        private List<Inputs.GetVpcEndpointFilterArgs>? _filters;

        /// <summary>
        /// Custom filter block as described below.
        /// </summary>
        public List<Inputs.GetVpcEndpointFilterArgs> Filters
        {
            get => _filters ?? (_filters = new List<Inputs.GetVpcEndpointFilterArgs>());
            set => _filters = value;
        }

        /// <summary>
        /// The ID of the specific VPC Endpoint to retrieve.
        /// </summary>
        [Input("id")]
        public string? Id { get; set; }

        /// <summary>
        /// The AWS service name of the specific VPC Endpoint to retrieve.
        /// </summary>
        [Input("serviceName")]
        public string? ServiceName { get; set; }

        /// <summary>
        /// The state of the specific VPC Endpoint to retrieve.
        /// </summary>
        [Input("state")]
        public string? State { get; set; }

        [Input("tags")]
        private Dictionary<string, object>? _tags;

        /// <summary>
        /// A mapping of tags, each pair of which must exactly match
        /// a pair on the specific VPC Endpoint to retrieve.
        /// </summary>
        public Dictionary<string, object> Tags
        {
            get => _tags ?? (_tags = new Dictionary<string, object>());
            set => _tags = value;
        }

        /// <summary>
        /// The ID of the VPC in which the specific VPC Endpoint is used.
        /// </summary>
        [Input("vpcId")]
        public string? VpcId { get; set; }

        public GetVpcEndpointArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVpcEndpointResult
    {
        /// <summary>
        /// The list of CIDR blocks for the exposed AWS service. Applicable for endpoints of type `Gateway`.
        /// </summary>
        public readonly ImmutableArray<string> CidrBlocks;
        /// <summary>
        /// The DNS entries for the VPC Endpoint. Applicable for endpoints of type `Interface`. DNS blocks are documented below.
        /// </summary>
        public readonly ImmutableArray<Outputs.GetVpcEndpointDnsEntryResult> DnsEntries;
        public readonly ImmutableArray<Outputs.GetVpcEndpointFilterResult> Filters;
        public readonly string Id;
        /// <summary>
        /// One or more network interfaces for the VPC Endpoint. Applicable for endpoints of type `Interface`.
        /// </summary>
        public readonly ImmutableArray<string> NetworkInterfaceIds;
        /// <summary>
        /// The ID of the AWS account that owns the VPC endpoint.
        /// </summary>
        public readonly string OwnerId;
        /// <summary>
        /// The policy document associated with the VPC Endpoint. Applicable for endpoints of type `Gateway`.
        /// </summary>
        public readonly string Policy;
        /// <summary>
        /// The prefix list ID of the exposed AWS service. Applicable for endpoints of type `Gateway`.
        /// </summary>
        public readonly string PrefixListId;
        /// <summary>
        /// Whether or not the VPC is associated with a private hosted zone - `true` or `false`. Applicable for endpoints of type `Interface`.
        /// </summary>
        public readonly bool PrivateDnsEnabled;
        /// <summary>
        /// Whether or not the VPC Endpoint is being managed by its service - `true` or `false`.
        /// </summary>
        public readonly bool RequesterManaged;
        /// <summary>
        /// One or more route tables associated with the VPC Endpoint. Applicable for endpoints of type `Gateway`.
        /// </summary>
        public readonly ImmutableArray<string> RouteTableIds;
        /// <summary>
        /// One or more security groups associated with the network interfaces. Applicable for endpoints of type `Interface`.
        /// </summary>
        public readonly ImmutableArray<string> SecurityGroupIds;
        public readonly string ServiceName;
        public readonly string State;
        /// <summary>
        /// One or more subnets in which the VPC Endpoint is located. Applicable for endpoints of type `Interface`.
        /// </summary>
        public readonly ImmutableArray<string> SubnetIds;
        public readonly ImmutableDictionary<string, object> Tags;
        /// <summary>
        /// The VPC Endpoint type, `Gateway` or `Interface`.
        /// </summary>
        public readonly string VpcEndpointType;
        public readonly string VpcId;

        [OutputConstructor]
        private GetVpcEndpointResult(
            ImmutableArray<string> cidrBlocks,

            ImmutableArray<Outputs.GetVpcEndpointDnsEntryResult> dnsEntries,

            ImmutableArray<Outputs.GetVpcEndpointFilterResult> filters,

            string id,

            ImmutableArray<string> networkInterfaceIds,

            string ownerId,

            string policy,

            string prefixListId,

            bool privateDnsEnabled,

            bool requesterManaged,

            ImmutableArray<string> routeTableIds,

            ImmutableArray<string> securityGroupIds,

            string serviceName,

            string state,

            ImmutableArray<string> subnetIds,

            ImmutableDictionary<string, object> tags,

            string vpcEndpointType,

            string vpcId)
        {
            CidrBlocks = cidrBlocks;
            DnsEntries = dnsEntries;
            Filters = filters;
            Id = id;
            NetworkInterfaceIds = networkInterfaceIds;
            OwnerId = ownerId;
            Policy = policy;
            PrefixListId = prefixListId;
            PrivateDnsEnabled = privateDnsEnabled;
            RequesterManaged = requesterManaged;
            RouteTableIds = routeTableIds;
            SecurityGroupIds = securityGroupIds;
            ServiceName = serviceName;
            State = state;
            SubnetIds = subnetIds;
            Tags = tags;
            VpcEndpointType = vpcEndpointType;
            VpcId = vpcId;
        }
    }
}
