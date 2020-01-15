// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ServiceDiscovery.Inputs
{

    public sealed class ServiceDnsConfigDnsRecordArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set.
        /// </summary>
        [Input("ttl", required: true)]
        public Input<int> Ttl { get; set; } = null!;

        /// <summary>
        /// The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public ServiceDnsConfigDnsRecordArgs()
        {
        }
    }
}
