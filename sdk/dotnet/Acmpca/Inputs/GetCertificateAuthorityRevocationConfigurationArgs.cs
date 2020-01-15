// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Acmpca.Inputs
{

    public sealed class GetCertificateAuthorityRevocationConfigurationArgs : Pulumi.InvokeArgs
    {
        [Input("crlConfigurations", required: true)]
        private List<Inputs.GetCertificateAuthorityRevocationConfigurationCrlConfigurationArgs>? _crlConfigurations;
        public List<Inputs.GetCertificateAuthorityRevocationConfigurationCrlConfigurationArgs> CrlConfigurations
        {
            get => _crlConfigurations ?? (_crlConfigurations = new List<Inputs.GetCertificateAuthorityRevocationConfigurationCrlConfigurationArgs>());
            set => _crlConfigurations = value;
        }

        public GetCertificateAuthorityRevocationConfigurationArgs()
        {
        }
    }
}
