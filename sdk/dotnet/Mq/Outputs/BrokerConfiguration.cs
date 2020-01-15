// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Mq.Outputs
{

    [OutputType]
    public sealed class BrokerConfiguration
    {
        /// <summary>
        /// The Configuration ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Revision of the Configuration.
        /// </summary>
        public readonly int? Revision;

        [OutputConstructor]
        private BrokerConfiguration(
            string? id,

            int? revision)
        {
            Id = id;
            Revision = revision;
        }
    }
}
