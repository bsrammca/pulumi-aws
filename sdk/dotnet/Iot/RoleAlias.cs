// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iot
{
    /// <summary>
    /// Provides an IoT role alias.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/iot_role_alias.html.markdown.
    /// </summary>
    public partial class RoleAlias : Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the role alias.
        /// </summary>
        [Output("alias")]
        public Output<string> Alias { get; private set; } = null!;

        /// <summary>
        /// The ARN assigned by AWS to this role alias.
        /// </summary>
        [Output("arn")]
        public Output<string> Arn { get; private set; } = null!;

        /// <summary>
        /// The duration of the credential, in seconds. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 900 seconds (15 minutes) to 3600 seconds (60 minutes).
        /// </summary>
        [Output("credentialDuration")]
        public Output<int?> CredentialDuration { get; private set; } = null!;

        /// <summary>
        /// The identity of the role to which the alias refers.
        /// </summary>
        [Output("roleArn")]
        public Output<string> RoleArn { get; private set; } = null!;


        /// <summary>
        /// Create a RoleAlias resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public RoleAlias(string name, RoleAliasArgs args, CustomResourceOptions? options = null)
            : base("aws:iot/roleAlias:RoleAlias", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private RoleAlias(string name, Input<string> id, RoleAliasState? state = null, CustomResourceOptions? options = null)
            : base("aws:iot/roleAlias:RoleAlias", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing RoleAlias resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static RoleAlias Get(string name, Input<string> id, RoleAliasState? state = null, CustomResourceOptions? options = null)
        {
            return new RoleAlias(name, id, state, options);
        }
    }

    public sealed class RoleAliasArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the role alias.
        /// </summary>
        [Input("alias", required: true)]
        public Input<string> Alias { get; set; } = null!;

        /// <summary>
        /// The duration of the credential, in seconds. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 900 seconds (15 minutes) to 3600 seconds (60 minutes).
        /// </summary>
        [Input("credentialDuration")]
        public Input<int>? CredentialDuration { get; set; }

        /// <summary>
        /// The identity of the role to which the alias refers.
        /// </summary>
        [Input("roleArn", required: true)]
        public Input<string> RoleArn { get; set; } = null!;

        public RoleAliasArgs()
        {
        }
    }

    public sealed class RoleAliasState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the role alias.
        /// </summary>
        [Input("alias")]
        public Input<string>? Alias { get; set; }

        /// <summary>
        /// The ARN assigned by AWS to this role alias.
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// The duration of the credential, in seconds. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 900 seconds (15 minutes) to 3600 seconds (60 minutes).
        /// </summary>
        [Input("credentialDuration")]
        public Input<int>? CredentialDuration { get; set; }

        /// <summary>
        /// The identity of the role to which the alias refers.
        /// </summary>
        [Input("roleArn")]
        public Input<string>? RoleArn { get; set; }

        public RoleAliasState()
        {
        }
    }
}