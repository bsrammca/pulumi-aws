// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticSearch.Outputs
{

    [OutputType]
    public sealed class GetDomainCognitoOptionResult
    {
        /// <summary>
        /// Whether node to node encryption is enabled.
        /// </summary>
        public readonly bool Enabled;
        /// <summary>
        /// The Cognito Identity pool used by the domain.
        /// </summary>
        public readonly string IdentityPoolId;
        /// <summary>
        /// The IAM Role with the AmazonESCognitoAccess policy attached.
        /// </summary>
        public readonly string RoleArn;
        /// <summary>
        /// The Cognito User pool used by the domain.
        /// </summary>
        public readonly string UserPoolId;

        [OutputConstructor]
        private GetDomainCognitoOptionResult(
            bool enabled,

            string identityPoolId,

            string roleArn,

            string userPoolId)
        {
            Enabled = enabled;
            IdentityPoolId = identityPoolId;
            RoleArn = roleArn;
            UserPoolId = userPoolId;
        }
    }
}
