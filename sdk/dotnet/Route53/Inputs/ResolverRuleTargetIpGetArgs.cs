// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Route53.Inputs
{

    public sealed class ResolverRuleTargetIpGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.
        /// </summary>
        [Input("ip", required: true)]
        public Input<string> Ip { get; set; } = null!;

        /// <summary>
        /// The port at `ip` that you want to forward DNS queries to. Default value is `53`
        /// </summary>
        [Input("port")]
        public Input<int>? Port { get; set; }

        public ResolverRuleTargetIpGetArgs()
        {
        }
    }
}
