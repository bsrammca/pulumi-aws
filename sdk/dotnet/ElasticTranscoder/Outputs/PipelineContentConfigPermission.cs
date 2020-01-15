// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticTranscoder.Outputs
{

    [OutputType]
    public sealed class PipelineContentConfigPermission
    {
        /// <summary>
        /// The permission that you want to give to the AWS user that you specified in `thumbnail_config_permissions.grantee`.
        /// </summary>
        public readonly ImmutableArray<string> Accesses;
        /// <summary>
        /// The AWS user or group that you want to have access to thumbnail files.
        /// </summary>
        public readonly string? Grantee;
        /// <summary>
        /// Specify the type of value that appears in the `thumbnail_config_permissions.grantee` object.
        /// </summary>
        public readonly string? GranteeType;

        [OutputConstructor]
        private PipelineContentConfigPermission(
            ImmutableArray<string> accesses,

            string? grantee,

            string? granteeType)
        {
            Accesses = accesses;
            Grantee = grantee;
            GranteeType = granteeType;
        }
    }
}
