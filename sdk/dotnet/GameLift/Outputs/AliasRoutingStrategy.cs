// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.GameLift.Outputs
{

    [OutputType]
    public sealed class AliasRoutingStrategy
    {
        /// <summary>
        /// ID of the Gamelift Fleet to point the alias to.
        /// </summary>
        public readonly string? FleetId;
        /// <summary>
        /// Message text to be used with the `TERMINAL` routing strategy.
        /// </summary>
        public readonly string? Message;
        /// <summary>
        /// Type of routing strategy. e.g. `SIMPLE` or `TERMINAL`
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private AliasRoutingStrategy(
            string? fleetId,

            string? message,

            string type)
        {
            FleetId = fleetId;
            Message = message;
            Type = type;
        }
    }
}
