// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2.Inputs
{

    public sealed class DefaultSecurityGroupEgressGetArgs : Pulumi.ResourceArgs
    {
        [Input("cidrBlocks")]
        private InputList<string>? _cidrBlocks;
        public InputList<string> CidrBlocks
        {
            get => _cidrBlocks ?? (_cidrBlocks = new InputList<string>());
            set => _cidrBlocks = value;
        }

        /// <summary>
        /// The description of the security group
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        [Input("fromPort", required: true)]
        public Input<int> FromPort { get; set; } = null!;

        [Input("ipv6CidrBlocks")]
        private InputList<string>? _ipv6CidrBlocks;
        public InputList<string> Ipv6CidrBlocks
        {
            get => _ipv6CidrBlocks ?? (_ipv6CidrBlocks = new InputList<string>());
            set => _ipv6CidrBlocks = value;
        }

        [Input("prefixListIds")]
        private InputList<string>? _prefixListIds;
        public InputList<string> PrefixListIds
        {
            get => _prefixListIds ?? (_prefixListIds = new InputList<string>());
            set => _prefixListIds = value;
        }

        [Input("protocol", required: true)]
        public Input<string> Protocol { get; set; } = null!;

        [Input("securityGroups")]
        private InputList<string>? _securityGroups;
        public InputList<string> SecurityGroups
        {
            get => _securityGroups ?? (_securityGroups = new InputList<string>());
            set => _securityGroups = value;
        }

        [Input("self")]
        public Input<bool>? Self { get; set; }

        [Input("toPort", required: true)]
        public Input<int> ToPort { get; set; } = null!;

        public DefaultSecurityGroupEgressGetArgs()
        {
        }
    }
}
