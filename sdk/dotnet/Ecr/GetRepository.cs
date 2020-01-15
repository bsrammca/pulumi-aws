// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ecr
{
    public static partial class Invokes
    {
        /// <summary>
        /// The ECR Repository data source allows the ARN, Repository URI and Registry ID to be retrieved for an ECR repository.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ecr_repository.html.markdown.
        /// </summary>
        public static Task<GetRepositoryResult> GetRepository(GetRepositoryArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRepositoryResult>("aws:ecr/getRepository:getRepository", args ?? InvokeArgs.Empty, options.WithVersion());
    }


    public sealed class GetRepositoryArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the ECR Repository.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        [Input("tags")]
        private Dictionary<string, object>? _tags;
        public Dictionary<string, object> Tags
        {
            get => _tags ?? (_tags = new Dictionary<string, object>());
            set => _tags = value;
        }

        public GetRepositoryArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRepositoryResult
    {
        /// <summary>
        /// Full ARN of the repository.
        /// </summary>
        public readonly string Arn;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string Name;
        /// <summary>
        /// The registry ID where the repository was created.
        /// </summary>
        public readonly string RegistryId;
        /// <summary>
        /// The URL of the repository (in the form `aws_account_id.dkr.ecr.region.amazonaws.com/repositoryName`).
        /// </summary>
        public readonly string RepositoryUrl;
        /// <summary>
        /// A mapping of tags assigned to the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, object> Tags;

        [OutputConstructor]
        private GetRepositoryResult(
            string arn,

            string id,

            string name,

            string registryId,

            string repositoryUrl,

            ImmutableDictionary<string, object> tags)
        {
            Arn = arn;
            Id = id;
            Name = name;
            RegistryId = registryId;
            RepositoryUrl = repositoryUrl;
            Tags = tags;
        }
    }
}
