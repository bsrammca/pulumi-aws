// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.LB.Outputs
{

    [OutputType]
    public sealed class GetLoadBalancerAccessLogsResult
    {
        public readonly string Bucket;
        public readonly bool Enabled;
        public readonly string Prefix;

        [OutputConstructor]
        private GetLoadBalancerAccessLogsResult(
            string bucket,

            bool enabled,

            string prefix)
        {
            Bucket = bucket;
            Enabled = enabled;
            Prefix = prefix;
        }
    }
}
