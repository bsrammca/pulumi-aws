// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppMesh.Outputs
{

    [OutputType]
    public sealed class VirtualNodeSpecListenerPortMapping
    {
        /// <summary>
        /// The destination port for the health check request. This port must match the port defined in the `port_mapping` for the listener.
        /// </summary>
        public readonly int Port;
        /// <summary>
        /// The protocol for the health check request. Valid values are `http` and `tcp`.
        /// </summary>
        public readonly string Protocol;

        [OutputConstructor]
        private VirtualNodeSpecListenerPortMapping(
            int port,

            string protocol)
        {
            Port = port;
            Protocol = protocol;
        }
    }
}
