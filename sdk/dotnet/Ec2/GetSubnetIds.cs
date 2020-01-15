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
        /// `aws.ec2.getSubnetIds` provides a list of ids for a vpc_id
        /// 
        /// This resource can be useful for getting back a list of subnet ids for a vpc.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/subnet_ids.html.markdown.
        /// </summary>
        public static Task<GetSubnetIdsResult> GetSubnetIds(GetSubnetIdsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSubnetIdsResult>("aws:ec2/getSubnetIds:getSubnetIds", args ?? InvokeArgs.Empty, options.WithVersion());
    }


    public sealed class GetSubnetIdsArgs : Pulumi.InvokeArgs
    {
        [Input("filters")]
        private List<Inputs.GetSubnetIdsFilterArgs>? _filters;

        /// <summary>
        /// Custom filter block as described below.
        /// </summary>
        public List<Inputs.GetSubnetIdsFilterArgs> Filters
        {
            get => _filters ?? (_filters = new List<Inputs.GetSubnetIdsFilterArgs>());
            set => _filters = value;
        }

        [Input("tags")]
        private Dictionary<string, object>? _tags;

        /// <summary>
        /// A mapping of tags, each pair of which must exactly match
        /// a pair on the desired subnets.
        /// </summary>
        public Dictionary<string, object> Tags
        {
            get => _tags ?? (_tags = new Dictionary<string, object>());
            set => _tags = value;
        }

        /// <summary>
        /// The VPC ID that you want to filter from.
        /// </summary>
        [Input("vpcId", required: true)]
        public string VpcId { get; set; } = null!;

        public GetSubnetIdsArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSubnetIdsResult
    {
        public readonly ImmutableArray<Outputs.GetSubnetIdsFilterResult> Filters;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// A set of all the subnet ids found. This data source will fail if none are found.
        /// </summary>
        public readonly ImmutableArray<string> Ids;
        public readonly ImmutableDictionary<string, object> Tags;
        public readonly string VpcId;

        [OutputConstructor]
        private GetSubnetIdsResult(
            ImmutableArray<Outputs.GetSubnetIdsFilterResult> filters,

            string id,

            ImmutableArray<string> ids,

            ImmutableDictionary<string, object> tags,

            string vpcId)
        {
            Filters = filters;
            Id = id;
            Ids = ids;
            Tags = tags;
            VpcId = vpcId;
        }
    }
}
