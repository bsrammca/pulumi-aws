// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Glue.Inputs
{

    public sealed class GetScriptDagNodeArgs : Pulumi.InvokeArgs
    {
        [Input("args", required: true)]
        private List<Inputs.GetScriptDagNodeArgArgs>? _args;

        /// <summary>
        /// Nested configuration an argument or property of a node. Defined below.
        /// </summary>
        public List<Inputs.GetScriptDagNodeArgArgs> Args
        {
            get => _args ?? (_args = new List<Inputs.GetScriptDagNodeArgArgs>());
            set => _args = value;
        }

        /// <summary>
        /// A node identifier that is unique within the node's graph.
        /// </summary>
        [Input("id", required: true)]
        public string Id { get; set; } = null!;

        /// <summary>
        /// The line number of the node.
        /// </summary>
        [Input("lineNumber")]
        public int? LineNumber { get; set; }

        /// <summary>
        /// The type of node this is.
        /// </summary>
        [Input("nodeType", required: true)]
        public string NodeType { get; set; } = null!;

        public GetScriptDagNodeArgs()
        {
        }
    }
}
