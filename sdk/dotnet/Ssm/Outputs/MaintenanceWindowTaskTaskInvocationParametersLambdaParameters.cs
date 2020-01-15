// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ssm.Outputs
{

    [OutputType]
    public sealed class MaintenanceWindowTaskTaskInvocationParametersLambdaParameters
    {
        /// <summary>
        /// Pass client-specific information to the Lambda function that you are invoking.
        /// </summary>
        public readonly string? ClientContext;
        /// <summary>
        /// JSON to provide to your Lambda function as input.
        /// </summary>
        public readonly string? Payload;
        /// <summary>
        /// Specify a Lambda function version or alias name.
        /// </summary>
        public readonly string? Qualifier;

        [OutputConstructor]
        private MaintenanceWindowTaskTaskInvocationParametersLambdaParameters(
            string? clientContext,

            string? payload,

            string? qualifier)
        {
            ClientContext = clientContext;
            Payload = payload;
            Qualifier = qualifier;
        }
    }
}
