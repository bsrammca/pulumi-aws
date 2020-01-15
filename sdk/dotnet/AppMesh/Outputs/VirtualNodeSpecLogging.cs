// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppMesh.Outputs
{

    [OutputType]
    public sealed class VirtualNodeSpecLogging
    {
        /// <summary>
        /// The access log configuration for a virtual node.
        /// </summary>
        public readonly Outputs.VirtualNodeSpecLoggingAccessLog? AccessLog;

        [OutputConstructor]
        private VirtualNodeSpecLogging(Outputs.VirtualNodeSpecLoggingAccessLog? accessLog)
        {
            AccessLog = accessLog;
        }
    }
}
