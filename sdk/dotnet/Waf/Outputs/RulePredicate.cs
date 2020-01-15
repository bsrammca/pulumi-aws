// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Waf.Outputs
{

    [OutputType]
    public sealed class RulePredicate
    {
        /// <summary>
        /// A unique identifier for a predicate in the rule, such as Byte Match Set ID or IPSet ID.
        /// </summary>
        public readonly string DataId;
        /// <summary>
        /// Set this to `false` if you want to allow, block, or count requests
        /// based on the settings in the specified [waf_byte_match_set](https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html), [waf_ipset](https://www.terraform.io/docs/providers/aws/r/waf_ipset.html), [aws.waf.SizeConstraintSet](https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html), [aws.waf.SqlInjectionMatchSet](https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html) or [aws.waf.XssMatchSet](https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html).
        /// For example, if an IPSet includes the IP address `192.0.2.44`, AWS WAF will allow or block requests based on that IP address.
        /// If set to `true`, AWS WAF will allow, block, or count requests based on all IP addresses _except_ `192.0.2.44`.
        /// </summary>
        public readonly bool Negated;
        /// <summary>
        /// The type of predicate in a rule. Valid values: `ByteMatch`, `GeoMatch`, `IPMatch`, `RegexMatch`, `SizeConstraint`, `SqlInjectionMatch`, or `XssMatch`.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private RulePredicate(
            string dataId,

            bool negated,

            string type)
        {
            DataId = dataId;
            Negated = negated;
            Type = type;
        }
    }
}
