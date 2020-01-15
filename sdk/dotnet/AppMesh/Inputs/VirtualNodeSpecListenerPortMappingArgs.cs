// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppMesh.Inputs
{

    public sealed class VirtualNodeSpecListenerPortMappingArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The destination port for the health check request. This port must match the port defined in the `port_mapping` for the listener.
        /// </summary>
        [Input("port", required: true)]
        public Input<int> Port { get; set; } = null!;

        /// <summary>
        /// The protocol for the health check request. Valid values are `http` and `tcp`.
        /// </summary>
        [Input("protocol", required: true)]
        public Input<string> Protocol { get; set; } = null!;

        public VirtualNodeSpecListenerPortMappingArgs()
        {
        }
    }
}
