// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2.Inputs
{

    public sealed class LaunchTemplatePlacementArgs : Pulumi.ResourceArgs
    {
        [Input("affinity")]
        public Input<string>? Affinity { get; set; }

        [Input("availabilityZone")]
        public Input<string>? AvailabilityZone { get; set; }

        [Input("groupName")]
        public Input<string>? GroupName { get; set; }

        [Input("hostId")]
        public Input<string>? HostId { get; set; }

        [Input("spreadDomain")]
        public Input<string>? SpreadDomain { get; set; }

        [Input("tenancy")]
        public Input<string>? Tenancy { get; set; }

        public LaunchTemplatePlacementArgs()
        {
        }
    }
}
