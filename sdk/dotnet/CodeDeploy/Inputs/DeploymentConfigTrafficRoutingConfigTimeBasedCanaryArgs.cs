// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodeDeploy.Inputs
{

    public sealed class DeploymentConfigTrafficRoutingConfigTimeBasedCanaryArgs : Pulumi.ResourceArgs
    {
        [Input("interval")]
        public Input<int>? Interval { get; set; }

        [Input("percentage")]
        public Input<int>? Percentage { get; set; }

        public DeploymentConfigTrafficRoutingConfigTimeBasedCanaryArgs()
        {
        }
    }
}
