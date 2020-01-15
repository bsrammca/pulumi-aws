// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Glue.Inputs
{

    public sealed class CrawlerJdbcTargetGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the connection to use to connect to the JDBC target.
        /// </summary>
        [Input("connectionName", required: true)]
        public Input<string> ConnectionName { get; set; } = null!;

        [Input("exclusions")]
        private InputList<string>? _exclusions;

        /// <summary>
        /// A list of glob patterns used to exclude from the crawl.
        /// </summary>
        public InputList<string> Exclusions
        {
            get => _exclusions ?? (_exclusions = new InputList<string>());
            set => _exclusions = value;
        }

        /// <summary>
        /// The path to the Amazon S3 target.
        /// </summary>
        [Input("path", required: true)]
        public Input<string> Path { get; set; } = null!;

        public CrawlerJdbcTargetGetArgs()
        {
        }
    }
}
