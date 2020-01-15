// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CloudFront.Inputs
{

    public sealed class DistributionOriginGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The failover criteria for when to failover to the secondary origin
        /// </summary>
        [Input("failoverCriteria", required: true)]
        public Input<Inputs.DistributionOriginGroupFailoverCriteriaArgs> FailoverCriteria { get; set; } = null!;

        [Input("members", required: true)]
        private InputList<Inputs.DistributionOriginGroupMemberArgs>? _members;

        /// <summary>
        /// Ordered member configuration blocks assigned to the origin group, where the first member is the primary origin. Minimum 2.
        /// </summary>
        public InputList<Inputs.DistributionOriginGroupMemberArgs> Members
        {
            get => _members ?? (_members = new InputList<Inputs.DistributionOriginGroupMemberArgs>());
            set => _members = value;
        }

        /// <summary>
        /// The unique identifier of the member origin
        /// </summary>
        [Input("originId", required: true)]
        public Input<string> OriginId { get; set; } = null!;

        public DistributionOriginGroupArgs()
        {
        }
    }
}
