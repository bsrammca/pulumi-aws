// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticLoadBalancingV2.Outputs
{

    [OutputType]
    public sealed class ListenerDefaultAction
    {
        public readonly Outputs.ListenerDefaultActionAuthenticateCognito? AuthenticateCognito;
        public readonly Outputs.ListenerDefaultActionAuthenticateOidc? AuthenticateOidc;
        /// <summary>
        /// Information for creating an action that returns a custom HTTP response. Required if `type` is `fixed-response`.
        /// </summary>
        public readonly Outputs.ListenerDefaultActionFixedResponse? FixedResponse;
        public readonly int? Order;
        /// <summary>
        /// Information for creating a redirect action. Required if `type` is `redirect`.
        /// </summary>
        public readonly Outputs.ListenerDefaultActionRedirect? Redirect;
        /// <summary>
        /// The ARN of the Target Group to which to route traffic. Required if `type` is `forward`.
        /// </summary>
        public readonly string? TargetGroupArn;
        /// <summary>
        /// The type of routing action. Valid values are `forward`, `redirect`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ListenerDefaultAction(
            Outputs.ListenerDefaultActionAuthenticateCognito? authenticateCognito,

            Outputs.ListenerDefaultActionAuthenticateOidc? authenticateOidc,

            Outputs.ListenerDefaultActionFixedResponse? fixedResponse,

            int? order,

            Outputs.ListenerDefaultActionRedirect? redirect,

            string? targetGroupArn,

            string type)
        {
            AuthenticateCognito = authenticateCognito;
            AuthenticateOidc = authenticateOidc;
            FixedResponse = fixedResponse;
            Order = order;
            Redirect = redirect;
            TargetGroupArn = targetGroupArn;
            Type = type;
        }
    }
}
