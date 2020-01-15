// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.WafRegional.Inputs
{

    public sealed class RuleGroupActivatedRuleActionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The rule type, either [`REGULAR`](https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html), [`RATE_BASED`](https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html), or `GROUP`. Defaults to `REGULAR`.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public RuleGroupActivatedRuleActionArgs()
        {
        }
    }
}
