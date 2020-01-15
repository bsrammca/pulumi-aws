// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppMesh.Inputs
{

    public sealed class VirtualServiceSpecProviderVirtualRouterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the virtual router that is acting as a service provider.
        /// </summary>
        [Input("virtualRouterName", required: true)]
        public Input<string> VirtualRouterName { get; set; } = null!;

        public VirtualServiceSpecProviderVirtualRouterArgs()
        {
        }
    }
}
