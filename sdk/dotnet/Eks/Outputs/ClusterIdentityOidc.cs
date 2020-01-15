// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Eks.Outputs
{

    [OutputType]
    public sealed class ClusterIdentityOidc
    {
        /// <summary>
        /// Issuer URL for the OpenID Connect identity provider.
        /// </summary>
        public readonly string? Issuer;

        [OutputConstructor]
        private ClusterIdentityOidc(string? issuer)
        {
            Issuer = issuer;
        }
    }
}
