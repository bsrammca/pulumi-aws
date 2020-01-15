// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticLoadBalancingV2
{
    public static partial class Invokes
    {
        /// <summary>
        /// &gt; **Note:** `aws.alb.LoadBalancer` is known as `aws.lb.LoadBalancer`. The functionality is identical.
        /// 
        /// Provides information about a Load Balancer.
        /// 
        /// This data source can prove useful when a module accepts an LB as an input
        /// variable and needs to, for example, determine the security groups associated
        /// with it, etc.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/lb_legacy.html.markdown.
        /// </summary>
        public static Task<GetLoadBalancerResult> GetLoadBalancer(GetLoadBalancerArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetLoadBalancerResult>("aws:elasticloadbalancingv2/getLoadBalancer:getLoadBalancer", args ?? InvokeArgs.Empty, options.WithVersion());
    }


    public sealed class GetLoadBalancerArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The full ARN of the load balancer.
        /// </summary>
        [Input("arn")]
        public string? Arn { get; set; }

        /// <summary>
        /// The unique name of the load balancer.
        /// </summary>
        [Input("name")]
        public string? Name { get; set; }

        [Input("tags")]
        private Dictionary<string, object>? _tags;
        public Dictionary<string, object> Tags
        {
            get => _tags ?? (_tags = new Dictionary<string, object>());
            set => _tags = value;
        }

        public GetLoadBalancerArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetLoadBalancerResult
    {
        public readonly Outputs.GetLoadBalancerAccessLogsResult AccessLogs;
        public readonly string Arn;
        public readonly string ArnSuffix;
        public readonly string DnsName;
        public readonly bool EnableDeletionProtection;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly int IdleTimeout;
        public readonly bool Internal;
        public readonly string LoadBalancerType;
        public readonly string Name;
        public readonly ImmutableArray<string> SecurityGroups;
        public readonly ImmutableArray<Outputs.GetLoadBalancerSubnetMappingResult> SubnetMappings;
        public readonly ImmutableArray<string> Subnets;
        public readonly ImmutableDictionary<string, object> Tags;
        public readonly string VpcId;
        public readonly string ZoneId;

        [OutputConstructor]
        private GetLoadBalancerResult(
            Outputs.GetLoadBalancerAccessLogsResult accessLogs,

            string arn,

            string arnSuffix,

            string dnsName,

            bool enableDeletionProtection,

            string id,

            int idleTimeout,

            bool @internal,

            string loadBalancerType,

            string name,

            ImmutableArray<string> securityGroups,

            ImmutableArray<Outputs.GetLoadBalancerSubnetMappingResult> subnetMappings,

            ImmutableArray<string> subnets,

            ImmutableDictionary<string, object> tags,

            string vpcId,

            string zoneId)
        {
            AccessLogs = accessLogs;
            Arn = arn;
            ArnSuffix = arnSuffix;
            DnsName = dnsName;
            EnableDeletionProtection = enableDeletionProtection;
            Id = id;
            IdleTimeout = idleTimeout;
            Internal = @internal;
            LoadBalancerType = loadBalancerType;
            Name = name;
            SecurityGroups = securityGroups;
            SubnetMappings = subnetMappings;
            Subnets = subnets;
            Tags = tags;
            VpcId = vpcId;
            ZoneId = zoneId;
        }
    }
}
