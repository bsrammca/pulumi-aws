// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Glue.Inputs
{

    public sealed class GetScriptDagEdgeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The ID of the node at which the edge starts.
        /// </summary>
        [Input("source", required: true)]
        public string Source { get; set; } = null!;

        /// <summary>
        /// The ID of the node at which the edge ends.
        /// </summary>
        [Input("target", required: true)]
        public string Target { get; set; } = null!;

        /// <summary>
        /// The target of the edge.
        /// </summary>
        [Input("targetParameter")]
        public string? TargetParameter { get; set; }

        public GetScriptDagEdgeArgs()
        {
        }
    }
}
