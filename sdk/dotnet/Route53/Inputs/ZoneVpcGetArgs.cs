// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Route53.Inputs
{

    public sealed class ZoneVpcGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// ID of the VPC to associate.
        /// </summary>
        [Input("vpcId", required: true)]
        public Input<string> VpcId { get; set; } = null!;

        /// <summary>
        /// Region of the VPC to associate. Defaults to AWS provider region.
        /// </summary>
        [Input("vpcRegion")]
        public Input<string>? VpcRegion { get; set; }

        public ZoneVpcGetArgs()
        {
        }
    }
}
