// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Waf.Inputs
{

    public sealed class IpSetIpSetDescriptorArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of the IP address - `IPV4` or `IPV6`.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// An IPv4 or IPv6 address specified via CIDR notation.
        /// e.g. `192.0.2.44/32` or `1111:0000:0000:0000:0000:0000:0000:0000/64`
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public IpSetIpSetDescriptorArgs()
        {
        }
    }
}
