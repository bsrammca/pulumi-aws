// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodePipeline.Outputs
{

    [OutputType]
    public sealed class PipelineArtifactStoreEncryptionKey
    {
        /// <summary>
        /// The codepipeline ID.
        /// </summary>
        public readonly string Id;
        public readonly string Type;

        [OutputConstructor]
        private PipelineArtifactStoreEncryptionKey(
            string id,

            string type)
        {
            Id = id;
            Type = type;
        }
    }
}
