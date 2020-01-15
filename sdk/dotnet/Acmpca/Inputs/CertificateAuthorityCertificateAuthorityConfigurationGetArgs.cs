// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Acmpca.Inputs
{

    public sealed class CertificateAuthorityCertificateAuthorityConfigurationGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of the public key algorithm and size, in bits, of the key pair that your key pair creates when it issues a certificate. Valid values can be found in the [ACM PCA Documentation](https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CertificateAuthorityConfiguration.html).
        /// </summary>
        [Input("keyAlgorithm", required: true)]
        public Input<string> KeyAlgorithm { get; set; } = null!;

        /// <summary>
        /// Name of the algorithm your private CA uses to sign certificate requests. Valid values can be found in the [ACM PCA Documentation](https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CertificateAuthorityConfiguration.html).
        /// </summary>
        [Input("signingAlgorithm", required: true)]
        public Input<string> SigningAlgorithm { get; set; } = null!;

        /// <summary>
        /// Nested argument that contains X.500 distinguished name information. At least one nested attribute must be specified.
        /// </summary>
        [Input("subject", required: true)]
        public Input<Inputs.CertificateAuthorityCertificateAuthorityConfigurationSubjectGetArgs> Subject { get; set; } = null!;

        public CertificateAuthorityCertificateAuthorityConfigurationGetArgs()
        {
        }
    }
}
