// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Waf.Inputs
{

    public sealed class ByteMatchSetByteMatchTupleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The part of a web request that you want to search, such as a specified header or a query string.
        /// </summary>
        [Input("fieldToMatch", required: true)]
        public Input<Inputs.ByteMatchSetByteMatchTupleFieldToMatchArgs> FieldToMatch { get; set; } = null!;

        /// <summary>
        /// Within the portion of a web request that you want to search
        /// (for example, in the query string, if any), specify where you want to search.
        /// e.g. `CONTAINS`, `CONTAINS_WORD` or `EXACTLY`.
        /// See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-PositionalConstraint)
        /// for all supported values.
        /// </summary>
        [Input("positionalConstraint", required: true)]
        public Input<string> PositionalConstraint { get; set; } = null!;

        /// <summary>
        /// The value that you want to search for. e.g. `HEADER`, `METHOD` or `BODY`.
        /// See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-TargetString)
        /// for all supported values.
        /// </summary>
        [Input("targetString")]
        public Input<string>? TargetString { get; set; }

        /// <summary>
        /// Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
        /// If you specify a transformation, AWS WAF performs the transformation on `target_string` before inspecting a request for a match.
        /// e.g. `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.
        /// See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-TextTransformation)
        /// for all supported values.
        /// </summary>
        [Input("textTransformation", required: true)]
        public Input<string> TextTransformation { get; set; } = null!;

        public ByteMatchSetByteMatchTupleArgs()
        {
        }
    }
}
