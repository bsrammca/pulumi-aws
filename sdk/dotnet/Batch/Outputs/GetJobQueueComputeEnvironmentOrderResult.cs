// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Batch.Outputs
{

    [OutputType]
    public sealed class GetJobQueueComputeEnvironmentOrderResult
    {
        public readonly string ComputeEnvironment;
        public readonly int Order;

        [OutputConstructor]
        private GetJobQueueComputeEnvironmentOrderResult(
            string computeEnvironment,

            int order)
        {
            ComputeEnvironment = computeEnvironment;
            Order = order;
        }
    }
}
