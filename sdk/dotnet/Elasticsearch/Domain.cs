// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticSearch
{
    /// <summary>
    /// Manages an AWS Elasticsearch Domain.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/elasticsearch_domain.html.markdown.
    /// </summary>
    public partial class Domain : Pulumi.CustomResource
    {
        /// <summary>
        /// IAM policy document specifying the access policies for the domain
        /// </summary>
        [Output("accessPolicies")]
        public Output<string> AccessPolicies { get; private set; } = null!;

        /// <summary>
        /// Key-value string pairs to specify advanced configuration options.
        /// Note that the values for these configuration options must be strings (wrapped in quotes) or they
        /// may be wrong and cause a perpetual diff, causing this provider to want to recreate your Elasticsearch
        /// domain on every apply.
        /// </summary>
        [Output("advancedOptions")]
        public Output<ImmutableDictionary<string, object>> AdvancedOptions { get; private set; } = null!;

        /// <summary>
        /// Amazon Resource Name (ARN) of the domain.
        /// </summary>
        [Output("arn")]
        public Output<string> Arn { get; private set; } = null!;

        /// <summary>
        /// Cluster configuration of the domain, see below.
        /// </summary>
        [Output("clusterConfig")]
        public Output<Outputs.DomainClusterConfig> ClusterConfig { get; private set; } = null!;

        [Output("cognitoOptions")]
        public Output<Outputs.DomainCognitoOptions?> CognitoOptions { get; private set; } = null!;

        /// <summary>
        /// Unique identifier for the domain.
        /// </summary>
        [Output("domainId")]
        public Output<string> DomainId { get; private set; } = null!;

        /// <summary>
        /// Name of the domain.
        /// </summary>
        [Output("domainName")]
        public Output<string> DomainName { get; private set; } = null!;

        /// <summary>
        /// EBS related options, may be required based on chosen [instance size](https://aws.amazon.com/elasticsearch-service/pricing/). See below.
        /// </summary>
        [Output("ebsOptions")]
        public Output<Outputs.DomainEbsOptions> EbsOptions { get; private set; } = null!;

        /// <summary>
        /// The version of Elasticsearch to deploy. Defaults to `1.5`
        /// </summary>
        [Output("elasticsearchVersion")]
        public Output<string?> ElasticsearchVersion { get; private set; } = null!;

        /// <summary>
        /// Encrypt at rest options. Only available for [certain instance types](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-supported-instance-types.html). See below.
        /// </summary>
        [Output("encryptAtRest")]
        public Output<Outputs.DomainEncryptAtRest> EncryptAtRest { get; private set; } = null!;

        /// <summary>
        /// Domain-specific endpoint used to submit index, search, and data upload requests.
        /// </summary>
        [Output("endpoint")]
        public Output<string> Endpoint { get; private set; } = null!;

        /// <summary>
        /// Domain-specific endpoint for kibana without https scheme.
        /// * `vpc_options.0.availability_zones` - If the domain was created inside a VPC, the names of the availability zones the configured `subnet_ids` were created inside.
        /// * `vpc_options.0.vpc_id` - If the domain was created inside a VPC, the ID of the VPC.
        /// </summary>
        [Output("kibanaEndpoint")]
        public Output<string> KibanaEndpoint { get; private set; } = null!;

        /// <summary>
        /// Options for publishing slow logs to CloudWatch Logs.
        /// </summary>
        [Output("logPublishingOptions")]
        public Output<ImmutableArray<Outputs.DomainLogPublishingOption>> LogPublishingOptions { get; private set; } = null!;

        /// <summary>
        /// Node-to-node encryption options. See below.
        /// </summary>
        [Output("nodeToNodeEncryption")]
        public Output<Outputs.DomainNodeToNodeEncryption> NodeToNodeEncryption { get; private set; } = null!;

        /// <summary>
        /// Snapshot related options, see below.
        /// </summary>
        [Output("snapshotOptions")]
        public Output<Outputs.DomainSnapshotOptions?> SnapshotOptions { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, object>?> Tags { get; private set; } = null!;

        /// <summary>
        /// VPC related options, see below. Adding or removing this configuration forces a new resource ([documentation](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-vpc-limitations)).
        /// </summary>
        [Output("vpcOptions")]
        public Output<Outputs.DomainVpcOptions?> VpcOptions { get; private set; } = null!;


        /// <summary>
        /// Create a Domain resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Domain(string name, DomainArgs? args = null, CustomResourceOptions? options = null)
            : base("aws:elasticsearch/domain:Domain", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private Domain(string name, Input<string> id, DomainState? state = null, CustomResourceOptions? options = null)
            : base("aws:elasticsearch/domain:Domain", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Domain resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Domain Get(string name, Input<string> id, DomainState? state = null, CustomResourceOptions? options = null)
        {
            return new Domain(name, id, state, options);
        }
    }

    public sealed class DomainArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// IAM policy document specifying the access policies for the domain
        /// </summary>
        [Input("accessPolicies")]
        public Input<string>? AccessPolicies { get; set; }

        [Input("advancedOptions")]
        private InputMap<object>? _advancedOptions;

        /// <summary>
        /// Key-value string pairs to specify advanced configuration options.
        /// Note that the values for these configuration options must be strings (wrapped in quotes) or they
        /// may be wrong and cause a perpetual diff, causing this provider to want to recreate your Elasticsearch
        /// domain on every apply.
        /// </summary>
        public InputMap<object> AdvancedOptions
        {
            get => _advancedOptions ?? (_advancedOptions = new InputMap<object>());
            set => _advancedOptions = value;
        }

        /// <summary>
        /// Cluster configuration of the domain, see below.
        /// </summary>
        [Input("clusterConfig")]
        public Input<Inputs.DomainClusterConfigArgs>? ClusterConfig { get; set; }

        [Input("cognitoOptions")]
        public Input<Inputs.DomainCognitoOptionsArgs>? CognitoOptions { get; set; }

        /// <summary>
        /// Name of the domain.
        /// </summary>
        [Input("domainName")]
        public Input<string>? DomainName { get; set; }

        /// <summary>
        /// EBS related options, may be required based on chosen [instance size](https://aws.amazon.com/elasticsearch-service/pricing/). See below.
        /// </summary>
        [Input("ebsOptions")]
        public Input<Inputs.DomainEbsOptionsArgs>? EbsOptions { get; set; }

        /// <summary>
        /// The version of Elasticsearch to deploy. Defaults to `1.5`
        /// </summary>
        [Input("elasticsearchVersion")]
        public Input<string>? ElasticsearchVersion { get; set; }

        /// <summary>
        /// Encrypt at rest options. Only available for [certain instance types](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-supported-instance-types.html). See below.
        /// </summary>
        [Input("encryptAtRest")]
        public Input<Inputs.DomainEncryptAtRestArgs>? EncryptAtRest { get; set; }

        [Input("logPublishingOptions")]
        private InputList<Inputs.DomainLogPublishingOptionArgs>? _logPublishingOptions;

        /// <summary>
        /// Options for publishing slow logs to CloudWatch Logs.
        /// </summary>
        public InputList<Inputs.DomainLogPublishingOptionArgs> LogPublishingOptions
        {
            get => _logPublishingOptions ?? (_logPublishingOptions = new InputList<Inputs.DomainLogPublishingOptionArgs>());
            set => _logPublishingOptions = value;
        }

        /// <summary>
        /// Node-to-node encryption options. See below.
        /// </summary>
        [Input("nodeToNodeEncryption")]
        public Input<Inputs.DomainNodeToNodeEncryptionArgs>? NodeToNodeEncryption { get; set; }

        /// <summary>
        /// Snapshot related options, see below.
        /// </summary>
        [Input("snapshotOptions")]
        public Input<Inputs.DomainSnapshotOptionsArgs>? SnapshotOptions { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        /// <summary>
        /// VPC related options, see below. Adding or removing this configuration forces a new resource ([documentation](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-vpc-limitations)).
        /// </summary>
        [Input("vpcOptions")]
        public Input<Inputs.DomainVpcOptionsArgs>? VpcOptions { get; set; }

        public DomainArgs()
        {
        }
    }

    public sealed class DomainState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// IAM policy document specifying the access policies for the domain
        /// </summary>
        [Input("accessPolicies")]
        public Input<string>? AccessPolicies { get; set; }

        [Input("advancedOptions")]
        private InputMap<object>? _advancedOptions;

        /// <summary>
        /// Key-value string pairs to specify advanced configuration options.
        /// Note that the values for these configuration options must be strings (wrapped in quotes) or they
        /// may be wrong and cause a perpetual diff, causing this provider to want to recreate your Elasticsearch
        /// domain on every apply.
        /// </summary>
        public InputMap<object> AdvancedOptions
        {
            get => _advancedOptions ?? (_advancedOptions = new InputMap<object>());
            set => _advancedOptions = value;
        }

        /// <summary>
        /// Amazon Resource Name (ARN) of the domain.
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// Cluster configuration of the domain, see below.
        /// </summary>
        [Input("clusterConfig")]
        public Input<Inputs.DomainClusterConfigGetArgs>? ClusterConfig { get; set; }

        [Input("cognitoOptions")]
        public Input<Inputs.DomainCognitoOptionsGetArgs>? CognitoOptions { get; set; }

        /// <summary>
        /// Unique identifier for the domain.
        /// </summary>
        [Input("domainId")]
        public Input<string>? DomainId { get; set; }

        /// <summary>
        /// Name of the domain.
        /// </summary>
        [Input("domainName")]
        public Input<string>? DomainName { get; set; }

        /// <summary>
        /// EBS related options, may be required based on chosen [instance size](https://aws.amazon.com/elasticsearch-service/pricing/). See below.
        /// </summary>
        [Input("ebsOptions")]
        public Input<Inputs.DomainEbsOptionsGetArgs>? EbsOptions { get; set; }

        /// <summary>
        /// The version of Elasticsearch to deploy. Defaults to `1.5`
        /// </summary>
        [Input("elasticsearchVersion")]
        public Input<string>? ElasticsearchVersion { get; set; }

        /// <summary>
        /// Encrypt at rest options. Only available for [certain instance types](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-supported-instance-types.html). See below.
        /// </summary>
        [Input("encryptAtRest")]
        public Input<Inputs.DomainEncryptAtRestGetArgs>? EncryptAtRest { get; set; }

        /// <summary>
        /// Domain-specific endpoint used to submit index, search, and data upload requests.
        /// </summary>
        [Input("endpoint")]
        public Input<string>? Endpoint { get; set; }

        /// <summary>
        /// Domain-specific endpoint for kibana without https scheme.
        /// * `vpc_options.0.availability_zones` - If the domain was created inside a VPC, the names of the availability zones the configured `subnet_ids` were created inside.
        /// * `vpc_options.0.vpc_id` - If the domain was created inside a VPC, the ID of the VPC.
        /// </summary>
        [Input("kibanaEndpoint")]
        public Input<string>? KibanaEndpoint { get; set; }

        [Input("logPublishingOptions")]
        private InputList<Inputs.DomainLogPublishingOptionGetArgs>? _logPublishingOptions;

        /// <summary>
        /// Options for publishing slow logs to CloudWatch Logs.
        /// </summary>
        public InputList<Inputs.DomainLogPublishingOptionGetArgs> LogPublishingOptions
        {
            get => _logPublishingOptions ?? (_logPublishingOptions = new InputList<Inputs.DomainLogPublishingOptionGetArgs>());
            set => _logPublishingOptions = value;
        }

        /// <summary>
        /// Node-to-node encryption options. See below.
        /// </summary>
        [Input("nodeToNodeEncryption")]
        public Input<Inputs.DomainNodeToNodeEncryptionGetArgs>? NodeToNodeEncryption { get; set; }

        /// <summary>
        /// Snapshot related options, see below.
        /// </summary>
        [Input("snapshotOptions")]
        public Input<Inputs.DomainSnapshotOptionsGetArgs>? SnapshotOptions { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        /// <summary>
        /// VPC related options, see below. Adding or removing this configuration forces a new resource ([documentation](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-vpc-limitations)).
        /// </summary>
        [Input("vpcOptions")]
        public Input<Inputs.DomainVpcOptionsGetArgs>? VpcOptions { get; set; }

        public DomainState()
        {
        }
    }
}
