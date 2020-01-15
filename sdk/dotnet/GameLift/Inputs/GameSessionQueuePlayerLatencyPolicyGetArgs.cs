// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.GameLift.Inputs
{

    public sealed class GameSessionQueuePlayerLatencyPolicyGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Maximum latency value that is allowed for any player.
        /// </summary>
        [Input("maximumIndividualPlayerLatencyMilliseconds", required: true)]
        public Input<int> MaximumIndividualPlayerLatencyMilliseconds { get; set; } = null!;

        /// <summary>
        /// Length of time that the policy is enforced while placing a new game session. Absence of value for this attribute means that the policy is enforced until the queue times out.
        /// </summary>
        [Input("policyDurationSeconds")]
        public Input<int>? PolicyDurationSeconds { get; set; }

        public GameSessionQueuePlayerLatencyPolicyGetArgs()
        {
        }
    }
}
