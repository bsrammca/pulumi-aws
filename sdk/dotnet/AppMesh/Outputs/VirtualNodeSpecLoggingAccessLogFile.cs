// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppMesh.Outputs
{

    [OutputType]
    public sealed class VirtualNodeSpecLoggingAccessLogFile
    {
        /// <summary>
        /// The destination path for the health check request. This is only required if the specified protocol is `http`.
        /// </summary>
        public readonly string Path;

        [OutputConstructor]
        private VirtualNodeSpecLoggingAccessLogFile(string path)
        {
            Path = path;
        }
    }
}
