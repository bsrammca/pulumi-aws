// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodeDeploy.Inputs
{

    public sealed class DeploymentGroupLoadBalancerInfoTargetGroupInfoArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of the target group.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public DeploymentGroupLoadBalancerInfoTargetGroupInfoArgs()
        {
        }
    }
}
