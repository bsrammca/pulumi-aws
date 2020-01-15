// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppMesh.Inputs
{

    public sealed class RouteSpecHttpRouteMatchGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the path with which to match requests.
        /// This parameter must always start with /, which by itself matches all requests to the virtual router service name.
        /// </summary>
        [Input("prefix", required: true)]
        public Input<string> Prefix { get; set; } = null!;

        public RouteSpecHttpRouteMatchGetArgs()
        {
        }
    }
}
