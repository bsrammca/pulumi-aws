// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.WafRegional
{
    public static partial class Invokes
    {
        /// <summary>
        /// `aws.wafregional.WebAcl` Retrieves a WAF Regional Web ACL Resource Id.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/wafregional_web_acl.html.markdown.
        /// </summary>
        public static Task<GetWebAclResult> GetWebAcl(GetWebAclArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAclResult>("aws:wafregional/getWebAcl:getWebAcl", args ?? InvokeArgs.Empty, options.WithVersion());
    }


    public sealed class GetWebAclArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the WAF Regional Web ACL.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        public GetWebAclArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAclResult
    {
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string Name;

        [OutputConstructor]
        private GetWebAclResult(
            string id,

            string name)
        {
            Id = id;
            Name = name;
        }
    }
}
