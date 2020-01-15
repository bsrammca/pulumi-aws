// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.GameLift.Inputs
{

    public sealed class AliasRoutingStrategyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// ID of the Gamelift Fleet to point the alias to.
        /// </summary>
        [Input("fleetId")]
        public Input<string>? FleetId { get; set; }

        /// <summary>
        /// Message text to be used with the `TERMINAL` routing strategy.
        /// </summary>
        [Input("message")]
        public Input<string>? Message { get; set; }

        /// <summary>
        /// Type of routing strategy. e.g. `SIMPLE` or `TERMINAL`
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public AliasRoutingStrategyArgs()
        {
        }
    }
}
