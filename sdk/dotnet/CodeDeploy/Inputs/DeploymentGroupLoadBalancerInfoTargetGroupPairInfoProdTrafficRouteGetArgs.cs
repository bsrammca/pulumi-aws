// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodeDeploy.Inputs
{

    public sealed class DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteGetArgs : Pulumi.ResourceArgs
    {
        [Input("listenerArns", required: true)]
        private InputList<string>? _listenerArns;

        /// <summary>
        /// List of Amazon Resource Names (ARNs) of the load balancer listeners.
        /// </summary>
        public InputList<string> ListenerArns
        {
            get => _listenerArns ?? (_listenerArns = new InputList<string>());
            set => _listenerArns = value;
        }

        public DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteGetArgs()
        {
        }
    }
}
