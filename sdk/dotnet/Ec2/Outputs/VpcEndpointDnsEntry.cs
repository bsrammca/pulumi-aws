// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2.Outputs
{

    [OutputType]
    public sealed class VpcEndpointDnsEntry
    {
        /// <summary>
        /// The DNS name.
        /// </summary>
        public readonly string? DnsName;
        /// <summary>
        /// The ID of the private hosted zone.
        /// </summary>
        public readonly string? HostedZoneId;

        [OutputConstructor]
        private VpcEndpointDnsEntry(
            string? dnsName,

            string? hostedZoneId)
        {
            DnsName = dnsName;
            HostedZoneId = hostedZoneId;
        }
    }
}
