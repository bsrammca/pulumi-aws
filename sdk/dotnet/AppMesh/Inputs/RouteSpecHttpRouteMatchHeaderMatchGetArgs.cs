// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppMesh.Inputs
{

    public sealed class RouteSpecHttpRouteMatchHeaderMatchGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The header value sent by the client must match the specified value exactly.
        /// </summary>
        [Input("exact")]
        public Input<string>? Exact { get; set; }

        /// <summary>
        /// Specifies the path with which to match requests.
        /// This parameter must always start with /, which by itself matches all requests to the virtual router service name.
        /// </summary>
        [Input("prefix")]
        public Input<string>? Prefix { get; set; }

        /// <summary>
        /// The object that specifies the range of numbers that the header value sent by the client must be included in.
        /// </summary>
        [Input("range")]
        public Input<Inputs.RouteSpecHttpRouteMatchHeaderMatchRangeGetArgs>? Range { get; set; }

        /// <summary>
        /// The header value sent by the client must include the specified characters.
        /// </summary>
        [Input("regex")]
        public Input<string>? Regex { get; set; }

        /// <summary>
        /// The header value sent by the client must end with the specified characters.
        /// </summary>
        [Input("suffix")]
        public Input<string>? Suffix { get; set; }

        public RouteSpecHttpRouteMatchHeaderMatchGetArgs()
        {
        }
    }
}
