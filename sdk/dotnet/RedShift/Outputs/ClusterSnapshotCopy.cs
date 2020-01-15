// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.RedShift.Outputs
{

    [OutputType]
    public sealed class ClusterSnapshotCopy
    {
        /// <summary>
        /// The destination region that you want to copy snapshots to.
        /// </summary>
        public readonly string DestinationRegion;
        /// <summary>
        /// The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.
        /// </summary>
        public readonly string? GrantName;
        /// <summary>
        /// The number of days to retain automated snapshots in the destination region after they are copied from the source region. Defaults to `7`.
        /// </summary>
        public readonly int? RetentionPeriod;

        [OutputConstructor]
        private ClusterSnapshotCopy(
            string destinationRegion,

            string? grantName,

            int? retentionPeriod)
        {
            DestinationRegion = destinationRegion;
            GrantName = grantName;
            RetentionPeriod = retentionPeriod;
        }
    }
}
