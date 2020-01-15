// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodePipeline
{
    /// <summary>
    /// Provides a CodePipeline.
    /// 
    /// &gt; **NOTE on `aws.codepipeline.Pipeline`:** - the `GITHUB_TOKEN` environment variable must be set if the GitHub provider is specified.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/codepipeline.html.markdown.
    /// </summary>
    public partial class Pipeline : Pulumi.CustomResource
    {
        /// <summary>
        /// The codepipeline ARN.
        /// </summary>
        [Output("arn")]
        public Output<string> Arn { get; private set; } = null!;

        /// <summary>
        /// An artifact_store block. Artifact stores are documented below.
        /// * `stage` (Minimum of at least two `stage` blocks is required) A stage block. Stages are documented below.
        /// </summary>
        [Output("artifactStore")]
        public Output<Outputs.PipelineArtifactStore> ArtifactStore { get; private set; } = null!;

        /// <summary>
        /// The name of the pipeline.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf.
        /// </summary>
        [Output("roleArn")]
        public Output<string> RoleArn { get; private set; } = null!;

        [Output("stages")]
        public Output<ImmutableArray<Outputs.PipelineStage>> Stages { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, object>?> Tags { get; private set; } = null!;


        /// <summary>
        /// Create a Pipeline resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Pipeline(string name, PipelineArgs args, CustomResourceOptions? options = null)
            : base("aws:codepipeline/pipeline:Pipeline", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private Pipeline(string name, Input<string> id, PipelineState? state = null, CustomResourceOptions? options = null)
            : base("aws:codepipeline/pipeline:Pipeline", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Pipeline resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Pipeline Get(string name, Input<string> id, PipelineState? state = null, CustomResourceOptions? options = null)
        {
            return new Pipeline(name, id, state, options);
        }
    }

    public sealed class PipelineArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// An artifact_store block. Artifact stores are documented below.
        /// * `stage` (Minimum of at least two `stage` blocks is required) A stage block. Stages are documented below.
        /// </summary>
        [Input("artifactStore", required: true)]
        public Input<Inputs.PipelineArtifactStoreArgs> ArtifactStore { get; set; } = null!;

        /// <summary>
        /// The name of the pipeline.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf.
        /// </summary>
        [Input("roleArn", required: true)]
        public Input<string> RoleArn { get; set; } = null!;

        [Input("stages", required: true)]
        private InputList<Inputs.PipelineStageArgs>? _stages;
        public InputList<Inputs.PipelineStageArgs> Stages
        {
            get => _stages ?? (_stages = new InputList<Inputs.PipelineStageArgs>());
            set => _stages = value;
        }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        public PipelineArgs()
        {
        }
    }

    public sealed class PipelineState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The codepipeline ARN.
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// An artifact_store block. Artifact stores are documented below.
        /// * `stage` (Minimum of at least two `stage` blocks is required) A stage block. Stages are documented below.
        /// </summary>
        [Input("artifactStore")]
        public Input<Inputs.PipelineArtifactStoreGetArgs>? ArtifactStore { get; set; }

        /// <summary>
        /// The name of the pipeline.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf.
        /// </summary>
        [Input("roleArn")]
        public Input<string>? RoleArn { get; set; }

        [Input("stages")]
        private InputList<Inputs.PipelineStageGetArgs>? _stages;
        public InputList<Inputs.PipelineStageGetArgs> Stages
        {
            get => _stages ?? (_stages = new InputList<Inputs.PipelineStageGetArgs>());
            set => _stages = value;
        }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        public PipelineState()
        {
        }
    }
}
