// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.WorkLink.Inputs
{

    public sealed class FleetIdentityProviderArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The SAML metadata document provided by the customer’s identity provider.
        /// </summary>
        [Input("samlMetadata", required: true)]
        public Input<string> SamlMetadata { get; set; } = null!;

        /// <summary>
        /// The type of identity provider.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public FleetIdentityProviderArgs()
        {
        }
    }
}
