// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Route53.Inputs
{

    public sealed class ResolverEndpointIpAddressGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The IP address in the subnet that you want to use for DNS queries.
        /// </summary>
        [Input("ip")]
        public Input<string>? Ip { get; set; }

        [Input("ipId")]
        public Input<string>? IpId { get; set; }

        /// <summary>
        /// The ID of the subnet that contains the IP address.
        /// </summary>
        [Input("subnetId", required: true)]
        public Input<string> SubnetId { get; set; } = null!;

        public ResolverEndpointIpAddressGetArgs()
        {
        }
    }
}
