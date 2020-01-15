// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iam
{
    public static partial class Invokes
    {
        /// <summary>
        /// This data source can be used to fetch information about a specific
        /// IAM user. By using this data source, you can reference IAM user
        /// properties without having to hard code ARNs or unique IDs as input.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/iam_user.html.markdown.
        /// </summary>
        public static Task<GetUserResult> GetUser(GetUserArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetUserResult>("aws:iam/getUser:getUser", args ?? InvokeArgs.Empty, options.WithVersion());
    }


    public sealed class GetUserArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The friendly IAM user name to match.
        /// </summary>
        [Input("userName", required: true)]
        public string UserName { get; set; } = null!;

        public GetUserArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetUserResult
    {
        /// <summary>
        /// The Amazon Resource Name (ARN) assigned by AWS for this user.
        /// </summary>
        public readonly string Arn;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Path in which this user was created.
        /// </summary>
        public readonly string Path;
        /// <summary>
        /// The ARN of the policy that is used to set the permissions boundary for the user.
        /// </summary>
        public readonly string PermissionsBoundary;
        /// <summary>
        /// The unique ID assigned by AWS for this user.
        /// </summary>
        public readonly string UserId;
        /// <summary>
        /// The name associated to this User
        /// </summary>
        public readonly string UserName;

        [OutputConstructor]
        private GetUserResult(
            string arn,

            string id,

            string path,

            string permissionsBoundary,

            string userId,

            string userName)
        {
            Arn = arn;
            Id = id;
            Path = path;
            PermissionsBoundary = permissionsBoundary;
            UserId = userId;
            UserName = userName;
        }
    }
}
