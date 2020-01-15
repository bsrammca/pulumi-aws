// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodeBuild.Outputs
{

    [OutputType]
    public sealed class ProjectArtifacts
    {
        /// <summary>
        /// The artifact identifier. Must be the same specified inside AWS CodeBuild buildspec.
        /// </summary>
        public readonly string? ArtifactIdentifier;
        /// <summary>
        /// If set to true, output artifacts will not be encrypted. If `type` is set to `NO_ARTIFACTS` then this value will be ignored. Defaults to `false`.
        /// </summary>
        public readonly bool? EncryptionDisabled;
        /// <summary>
        /// The location of the source code from git or s3.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the project. If `type` is set to `S3`, this is the name of the output artifact object
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The namespace to use in storing build artifacts. If `type` is set to `S3`, then valid values for this parameter are: `BUILD_ID` or `NONE`.
        /// </summary>
        public readonly string? NamespaceType;
        /// <summary>
        /// If set to true, a name specified in the build spec file overrides the artifact name.
        /// </summary>
        public readonly bool? OverrideArtifactName;
        /// <summary>
        /// The type of build output artifact to create. If `type` is set to `S3`, valid values for this parameter are: `NONE` or `ZIP`
        /// </summary>
        public readonly string? Packaging;
        /// <summary>
        /// If `type` is set to `S3`, this is the path to the output artifact
        /// </summary>
        public readonly string? Path;
        /// <summary>
        /// The type of repository that contains the source code to be built. Valid values for this parameter are: `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `BITBUCKET` or `S3`.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ProjectArtifacts(
            string? artifactIdentifier,

            bool? encryptionDisabled,

            string? location,

            string? name,

            string? namespaceType,

            bool? overrideArtifactName,

            string? packaging,

            string? path,

            string type)
        {
            ArtifactIdentifier = artifactIdentifier;
            EncryptionDisabled = encryptionDisabled;
            Location = location;
            Name = name;
            NamespaceType = namespaceType;
            OverrideArtifactName = overrideArtifactName;
            Packaging = packaging;
            Path = path;
            Type = type;
        }
    }
}
