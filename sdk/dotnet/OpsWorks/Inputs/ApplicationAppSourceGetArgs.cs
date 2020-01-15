// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.OpsWorks.Inputs
{

    public sealed class ApplicationAppSourceGetArgs : Pulumi.ResourceArgs
    {
        [Input("password")]
        public Input<string>? Password { get; set; }

        /// <summary>
        /// For sources that are version-aware, the revision to use.
        /// </summary>
        [Input("revision")]
        public Input<string>? Revision { get; set; }

        [Input("sshKey")]
        public Input<string>? SshKey { get; set; }

        /// <summary>
        /// The type of source to use. For example, "archive".
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// The URL where the app resource can be found.
        /// </summary>
        [Input("url")]
        public Input<string>? Url { get; set; }

        /// <summary>
        /// Username to use when authenticating to the source.
        /// </summary>
        [Input("username")]
        public Input<string>? Username { get; set; }

        public ApplicationAppSourceGetArgs()
        {
        }
    }
}
