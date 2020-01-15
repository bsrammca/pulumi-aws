// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.LB.Outputs
{

    [OutputType]
    public sealed class GetListenerDefaultActionResult
    {
        public readonly ImmutableArray<Outputs.GetListenerDefaultActionAuthenticateCognitoResult> AuthenticateCognitos;
        public readonly ImmutableArray<Outputs.GetListenerDefaultActionAuthenticateOidcResult> AuthenticateOidcs;
        public readonly ImmutableArray<Outputs.GetListenerDefaultActionFixedResponseResult> FixedResponses;
        public readonly int Order;
        public readonly ImmutableArray<Outputs.GetListenerDefaultActionRedirectResult> Redirects;
        public readonly string TargetGroupArn;
        public readonly string Type;

        [OutputConstructor]
        private GetListenerDefaultActionResult(
            ImmutableArray<Outputs.GetListenerDefaultActionAuthenticateCognitoResult> authenticateCognitos,

            ImmutableArray<Outputs.GetListenerDefaultActionAuthenticateOidcResult> authenticateOidcs,

            ImmutableArray<Outputs.GetListenerDefaultActionFixedResponseResult> fixedResponses,

            int order,

            ImmutableArray<Outputs.GetListenerDefaultActionRedirectResult> redirects,

            string targetGroupArn,

            string type)
        {
            AuthenticateCognitos = authenticateCognitos;
            AuthenticateOidcs = authenticateOidcs;
            FixedResponses = fixedResponses;
            Order = order;
            Redirects = redirects;
            TargetGroupArn = targetGroupArn;
            Type = type;
        }
    }
}
