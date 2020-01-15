// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Cognito.Inputs
{

    public sealed class IdentityPoolRoleAttachmentRoleMappingMappingRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The claim name that must be present in the token, for example, "isAdmin" or "paid".
        /// </summary>
        [Input("claim", required: true)]
        public Input<string> Claim { get; set; } = null!;

        /// <summary>
        /// The match condition that specifies how closely the claim value in the IdP token must match Value.
        /// </summary>
        [Input("matchType", required: true)]
        public Input<string> MatchType { get; set; } = null!;

        /// <summary>
        /// The role ARN.
        /// </summary>
        [Input("roleArn", required: true)]
        public Input<string> RoleArn { get; set; } = null!;

        /// <summary>
        /// A brief string that the claim must match, for example, "paid" or "yes".
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public IdentityPoolRoleAttachmentRoleMappingMappingRuleArgs()
        {
        }
    }
}
