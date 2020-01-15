// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.OpsWorks.Outputs
{

    [OutputType]
    public sealed class ApplicationSslConfiguration
    {
        public readonly string Certificate;
        public readonly string? Chain;
        public readonly string PrivateKey;

        [OutputConstructor]
        private ApplicationSslConfiguration(
            string certificate,

            string? chain,

            string privateKey)
        {
            Certificate = certificate;
            Chain = chain;
            PrivateKey = privateKey;
        }
    }
}
