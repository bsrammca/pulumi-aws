// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.DataSync.Outputs
{

    [OutputType]
    public sealed class NfsLocationOnPremConfig
    {
        /// <summary>
        /// List of Amazon Resource Names (ARNs) of the DataSync Agents used to connect to the NFS server.
        /// </summary>
        public readonly ImmutableArray<string> AgentArns;

        [OutputConstructor]
        private NfsLocationOnPremConfig(ImmutableArray<string> agentArns)
        {
            AgentArns = agentArns;
        }
    }
}
