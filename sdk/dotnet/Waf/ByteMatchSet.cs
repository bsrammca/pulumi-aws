// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Waf
{
    /// <summary>
    /// Provides a WAF Byte Match Set Resource
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/waf_byte_match_set.html.markdown.
    /// </summary>
    public partial class ByteMatchSet : Pulumi.CustomResource
    {
        /// <summary>
        /// Specifies the bytes (typically a string that corresponds
        /// with ASCII characters) that you want to search for in web requests,
        /// the location in requests that you want to search, and other settings.
        /// </summary>
        [Output("byteMatchTuples")]
        public Output<ImmutableArray<Outputs.ByteMatchSetByteMatchTuple>> ByteMatchTuples { get; private set; } = null!;

        /// <summary>
        /// The name or description of the Byte Match Set.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;


        /// <summary>
        /// Create a ByteMatchSet resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ByteMatchSet(string name, ByteMatchSetArgs? args = null, CustomResourceOptions? options = null)
            : base("aws:waf/byteMatchSet:ByteMatchSet", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private ByteMatchSet(string name, Input<string> id, ByteMatchSetState? state = null, CustomResourceOptions? options = null)
            : base("aws:waf/byteMatchSet:ByteMatchSet", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing ByteMatchSet resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ByteMatchSet Get(string name, Input<string> id, ByteMatchSetState? state = null, CustomResourceOptions? options = null)
        {
            return new ByteMatchSet(name, id, state, options);
        }
    }

    public sealed class ByteMatchSetArgs : Pulumi.ResourceArgs
    {
        [Input("byteMatchTuples")]
        private InputList<Inputs.ByteMatchSetByteMatchTupleArgs>? _byteMatchTuples;

        /// <summary>
        /// Specifies the bytes (typically a string that corresponds
        /// with ASCII characters) that you want to search for in web requests,
        /// the location in requests that you want to search, and other settings.
        /// </summary>
        public InputList<Inputs.ByteMatchSetByteMatchTupleArgs> ByteMatchTuples
        {
            get => _byteMatchTuples ?? (_byteMatchTuples = new InputList<Inputs.ByteMatchSetByteMatchTupleArgs>());
            set => _byteMatchTuples = value;
        }

        /// <summary>
        /// The name or description of the Byte Match Set.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public ByteMatchSetArgs()
        {
        }
    }

    public sealed class ByteMatchSetState : Pulumi.ResourceArgs
    {
        [Input("byteMatchTuples")]
        private InputList<Inputs.ByteMatchSetByteMatchTupleGetArgs>? _byteMatchTuples;

        /// <summary>
        /// Specifies the bytes (typically a string that corresponds
        /// with ASCII characters) that you want to search for in web requests,
        /// the location in requests that you want to search, and other settings.
        /// </summary>
        public InputList<Inputs.ByteMatchSetByteMatchTupleGetArgs> ByteMatchTuples
        {
            get => _byteMatchTuples ?? (_byteMatchTuples = new InputList<Inputs.ByteMatchSetByteMatchTupleGetArgs>());
            set => _byteMatchTuples = value;
        }

        /// <summary>
        /// The name or description of the Byte Match Set.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public ByteMatchSetState()
        {
        }
    }
}
