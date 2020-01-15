// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Inputs
{

    public sealed class BucketReplicationConfigurationRuleGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the destination for the rule (documented below).
        /// </summary>
        [Input("destination", required: true)]
        public Input<Inputs.BucketReplicationConfigurationRuleDestinationGetArgs> Destination { get; set; } = null!;

        /// <summary>
        /// Filter that identifies subset of objects to which the replication rule applies (documented below).
        /// </summary>
        [Input("filter")]
        public Input<Inputs.BucketReplicationConfigurationRuleFilterGetArgs>? Filter { get; set; }

        /// <summary>
        /// Unique identifier for the rule.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Object keyname prefix that identifies subset of objects to which the rule applies.
        /// </summary>
        [Input("prefix")]
        public Input<string>? Prefix { get; set; }

        /// <summary>
        /// The priority associated with the rule.
        /// </summary>
        [Input("priority")]
        public Input<int>? Priority { get; set; }

        /// <summary>
        /// Specifies special object selection criteria (documented below).
        /// </summary>
        [Input("sourceSelectionCriteria")]
        public Input<Inputs.BucketReplicationConfigurationRuleSourceSelectionCriteriaGetArgs>? SourceSelectionCriteria { get; set; }

        /// <summary>
        /// The status of the rule. Either `Enabled` or `Disabled`. The rule is ignored if status is not Enabled.
        /// </summary>
        [Input("status", required: true)]
        public Input<string> Status { get; set; } = null!;

        public BucketReplicationConfigurationRuleGetArgs()
        {
        }
    }
}
