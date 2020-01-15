// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodeDeploy.Inputs
{

    public sealed class DeploymentGroupLoadBalancerInfoGetArgs : Pulumi.ResourceArgs
    {
        [Input("elbInfos")]
        private InputList<Inputs.DeploymentGroupLoadBalancerInfoElbInfoGetArgs>? _elbInfos;

        /// <summary>
        /// The Classic Elastic Load Balancer to use in a deployment. Conflicts with `target_group_info` and `target_group_pair_info`.
        /// </summary>
        public InputList<Inputs.DeploymentGroupLoadBalancerInfoElbInfoGetArgs> ElbInfos
        {
            get => _elbInfos ?? (_elbInfos = new InputList<Inputs.DeploymentGroupLoadBalancerInfoElbInfoGetArgs>());
            set => _elbInfos = value;
        }

        [Input("targetGroupInfos")]
        private InputList<Inputs.DeploymentGroupLoadBalancerInfoTargetGroupInfoGetArgs>? _targetGroupInfos;

        /// <summary>
        /// The (Application/Network Load Balancer) target group to use in a deployment. Conflicts with `elb_info` and `target_group_pair_info`.
        /// </summary>
        public InputList<Inputs.DeploymentGroupLoadBalancerInfoTargetGroupInfoGetArgs> TargetGroupInfos
        {
            get => _targetGroupInfos ?? (_targetGroupInfos = new InputList<Inputs.DeploymentGroupLoadBalancerInfoTargetGroupInfoGetArgs>());
            set => _targetGroupInfos = value;
        }

        /// <summary>
        /// The (Application/Network Load Balancer) target group pair to use in a deployment. Conflicts with `elb_info` and `target_group_info`.
        /// </summary>
        [Input("targetGroupPairInfo")]
        public Input<Inputs.DeploymentGroupLoadBalancerInfoTargetGroupPairInfoGetArgs>? TargetGroupPairInfo { get; set; }

        public DeploymentGroupLoadBalancerInfoGetArgs()
        {
        }
    }
}
