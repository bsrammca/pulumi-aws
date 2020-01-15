// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodeDeploy.Inputs
{

    public sealed class DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The action to take on instances in the original environment after a successful blue/green deployment.
        /// * `TERMINATE`: Instances are terminated after a specified wait time.
        /// * `KEEP_ALIVE`: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.
        /// </summary>
        [Input("action")]
        public Input<string>? Action { get; set; }

        /// <summary>
        /// The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
        /// </summary>
        [Input("terminationWaitTimeInMinutes")]
        public Input<int>? TerminationWaitTimeInMinutes { get; set; }

        public DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessGetArgs()
        {
        }
    }
}
