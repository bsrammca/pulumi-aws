// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodeBuild.Inputs
{

    public sealed class ProjectEnvironmentRegistryCredentialArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Amazon Resource Name (ARN) or name of credentials created using AWS Secrets Manager.
        /// </summary>
        [Input("credential", required: true)]
        public Input<string> Credential { get; set; } = null!;

        /// <summary>
        /// The service that created the credentials to access a private Docker registry. The valid value, SECRETS_MANAGER, is for AWS Secrets Manager.
        /// </summary>
        [Input("credentialProvider", required: true)]
        public Input<string> CredentialProvider { get; set; } = null!;

        public ProjectEnvironmentRegistryCredentialArgs()
        {
        }
    }
}
