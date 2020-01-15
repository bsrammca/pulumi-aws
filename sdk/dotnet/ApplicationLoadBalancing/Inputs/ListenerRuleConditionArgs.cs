// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ApplicationLoadBalancing.Inputs
{

    public sealed class ListenerRuleConditionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The type of condition. Valid values are `host-header` or `path-pattern`. Must also set `values`.
        /// </summary>
        [Input("field")]
        public Input<string>? Field { get; set; }

        /// <summary>
        /// Contains a single `value` item which is a list of host header patterns to match. The maximum size of each pattern is 128 characters. Comparison is case insensitive. Wildcard characters supported: * (matches 0 or more characters) and ? (matches exactly 1 character). Only one pattern needs to match for the condition to be satisfied.
        /// </summary>
        [Input("hostHeader")]
        public Input<Inputs.ListenerRuleConditionHostHeaderArgs>? HostHeader { get; set; }

        /// <summary>
        /// HTTP headers to match. HTTP Header block fields documented below.
        /// </summary>
        [Input("httpHeader")]
        public Input<Inputs.ListenerRuleConditionHttpHeaderArgs>? HttpHeader { get; set; }

        /// <summary>
        /// Contains a single `value` item which is a list of HTTP request methods or verbs to match. Maximum size is 40 characters. Only allowed characters are A-Z, hyphen (-) and underscore (\_). Comparison is case sensitive. Wildcards are not supported. Only one needs to match for the condition to be satisfied. AWS recommends that GET and HEAD requests are routed in the same way because the response to a HEAD request may be cached.
        /// </summary>
        [Input("httpRequestMethod")]
        public Input<Inputs.ListenerRuleConditionHttpRequestMethodArgs>? HttpRequestMethod { get; set; }

        /// <summary>
        /// Contains a single `value` item which is a list of path patterns to match against the request URL. Maximum size of each pattern is 128 characters. Comparison is case sensitive. Wildcard charaters supported: * (matches 0 or more characters) and ? (matches exactly 1 character). Only one pattern needs to match for the condition to be satisfied. Path pattern is compared only to the path of the URL, not to its query string. To compare against the query string, use a `query-string` condition.
        /// </summary>
        [Input("pathPattern")]
        public Input<Inputs.ListenerRuleConditionPathPatternArgs>? PathPattern { get; set; }

        [Input("queryStrings")]
        private InputList<Inputs.ListenerRuleConditionQueryStringArgs>? _queryStrings;

        /// <summary>
        /// Query strings to match. Query String block fields documented below.
        /// </summary>
        public InputList<Inputs.ListenerRuleConditionQueryStringArgs> QueryStrings
        {
            get => _queryStrings ?? (_queryStrings = new InputList<Inputs.ListenerRuleConditionQueryStringArgs>());
            set => _queryStrings = value;
        }

        /// <summary>
        /// Contains a single `value` item which is a list of source IP CIDR notations to match. You can use both IPv4 and IPv6 addresses. Wildcards are not supported. Condition is satisfied if the source IP address of the request matches one of the CIDR blocks. Condition is not satisfied by the addresses in the `X-Forwarded-For` header, use `http-header` condition instead.
        /// </summary>
        [Input("sourceIp")]
        public Input<Inputs.ListenerRuleConditionSourceIpArgs>? SourceIp { get; set; }

        /// <summary>
        /// Query string pairs or values to match. Query String Value blocks documented below. Multiple `values` blocks can be specified, see example above. Maximum size of each string is 128 characters. Comparison is case insensitive. Wildcard characters supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '\*' or '?' character in a query string, escape the character with a backslash (\\). Only one pair needs to match for the condition to be satisfied.
        /// </summary>
        [Input("values")]
        public Input<string>? Values { get; set; }

        public ListenerRuleConditionArgs()
        {
        }
    }
}
