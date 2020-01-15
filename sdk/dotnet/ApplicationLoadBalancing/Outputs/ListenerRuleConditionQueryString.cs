// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ApplicationLoadBalancing.Outputs
{

    [OutputType]
    public sealed class ListenerRuleConditionQueryString
    {
        /// <summary>
        /// Query string key pattern to match.
        /// </summary>
        public readonly string? Key;
        /// <summary>
        /// Query string value pattern to match.
        /// </summary>
        public readonly string Value;

        [OutputConstructor]
        private ListenerRuleConditionQueryString(
            string? key,

            string value)
        {
            Key = key;
            Value = value;
        }
    }
}
