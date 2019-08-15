// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a Kinesis Firehose Delivery Stream resource. Amazon Kinesis Firehose is a fully managed, elastic service to easily deliver real-time data streams to destinations such as Amazon S3 and Amazon Redshift.
 * 
 * For more details, see the [Amazon Kinesis Firehose Documentation][1].
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/kinesis_firehose_delivery_stream.html.markdown.
 */
export class FirehoseDeliveryStream extends pulumi.CustomResource {
    /**
     * Get an existing FirehoseDeliveryStream resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirehoseDeliveryStreamState, opts?: pulumi.CustomResourceOptions): FirehoseDeliveryStream {
        return new FirehoseDeliveryStream(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:kinesis/firehoseDeliveryStream:FirehoseDeliveryStream';

    /**
     * Returns true if the given object is an instance of FirehoseDeliveryStream.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirehoseDeliveryStream {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirehoseDeliveryStream.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) specifying the Stream
     */
    public readonly arn!: pulumi.Output<string>;
    /**
     * This is the destination to where the data is delivered. The only options are `s3` (Deprecated, use `extendedS3` instead), `extendedS3`, `redshift`, `elasticsearch`, and `splunk`.
     */
    public readonly destination!: pulumi.Output<string>;
    public readonly destinationId!: pulumi.Output<string>;
    public readonly elasticsearchConfiguration!: pulumi.Output<outputApi.kinesis.FirehoseDeliveryStreamElasticsearchConfiguration | undefined>;
    /**
     * Enhanced configuration options for the s3 destination. More details are given below.
     */
    public readonly extendedS3Configuration!: pulumi.Output<outputApi.kinesis.FirehoseDeliveryStreamExtendedS3Configuration | undefined>;
    /**
     * Allows the ability to specify the kinesis stream that is used as the source of the firehose delivery stream.
     */
    public readonly kinesisSourceConfiguration!: pulumi.Output<outputApi.kinesis.FirehoseDeliveryStreamKinesisSourceConfiguration | undefined>;
    /**
     * A name to identify the stream. This is unique to the
     * AWS account and region the Stream is created in.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Configuration options if redshift is the destination.
     * Using `redshiftConfiguration` requires the user to also specify a
     * `s3Configuration` block. More details are given below.
     */
    public readonly redshiftConfiguration!: pulumi.Output<outputApi.kinesis.FirehoseDeliveryStreamRedshiftConfiguration | undefined>;
    /**
     * Required for non-S3 destinations. For S3 destination, use `extendedS3Configuration` instead. Configuration options for the s3 destination (or the intermediate bucket if the destination
     * is redshift). More details are given below.
     */
    public readonly s3Configuration!: pulumi.Output<outputApi.kinesis.FirehoseDeliveryStreamS3Configuration | undefined>;
    public readonly splunkConfiguration!: pulumi.Output<outputApi.kinesis.FirehoseDeliveryStreamSplunkConfiguration | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Specifies the table version for the output data schema. Defaults to `LATEST`.
     */
    public readonly versionId!: pulumi.Output<string>;

    /**
     * Create a FirehoseDeliveryStream resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirehoseDeliveryStreamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirehoseDeliveryStreamArgs | FirehoseDeliveryStreamState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FirehoseDeliveryStreamState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["destination"] = state ? state.destination : undefined;
            inputs["destinationId"] = state ? state.destinationId : undefined;
            inputs["elasticsearchConfiguration"] = state ? state.elasticsearchConfiguration : undefined;
            inputs["extendedS3Configuration"] = state ? state.extendedS3Configuration : undefined;
            inputs["kinesisSourceConfiguration"] = state ? state.kinesisSourceConfiguration : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["redshiftConfiguration"] = state ? state.redshiftConfiguration : undefined;
            inputs["s3Configuration"] = state ? state.s3Configuration : undefined;
            inputs["splunkConfiguration"] = state ? state.splunkConfiguration : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["versionId"] = state ? state.versionId : undefined;
        } else {
            const args = argsOrState as FirehoseDeliveryStreamArgs | undefined;
            if (!args || args.destination === undefined) {
                throw new Error("Missing required property 'destination'");
            }
            inputs["arn"] = args ? args.arn : undefined;
            inputs["destination"] = args ? args.destination : undefined;
            inputs["destinationId"] = args ? args.destinationId : undefined;
            inputs["elasticsearchConfiguration"] = args ? args.elasticsearchConfiguration : undefined;
            inputs["extendedS3Configuration"] = args ? args.extendedS3Configuration : undefined;
            inputs["kinesisSourceConfiguration"] = args ? args.kinesisSourceConfiguration : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["redshiftConfiguration"] = args ? args.redshiftConfiguration : undefined;
            inputs["s3Configuration"] = args ? args.s3Configuration : undefined;
            inputs["splunkConfiguration"] = args ? args.splunkConfiguration : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["versionId"] = args ? args.versionId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(FirehoseDeliveryStream.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FirehoseDeliveryStream resources.
 */
export interface FirehoseDeliveryStreamState {
    /**
     * The Amazon Resource Name (ARN) specifying the Stream
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * This is the destination to where the data is delivered. The only options are `s3` (Deprecated, use `extendedS3` instead), `extendedS3`, `redshift`, `elasticsearch`, and `splunk`.
     */
    readonly destination?: pulumi.Input<string>;
    readonly destinationId?: pulumi.Input<string>;
    readonly elasticsearchConfiguration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamElasticsearchConfiguration>;
    /**
     * Enhanced configuration options for the s3 destination. More details are given below.
     */
    readonly extendedS3Configuration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamExtendedS3Configuration>;
    /**
     * Allows the ability to specify the kinesis stream that is used as the source of the firehose delivery stream.
     */
    readonly kinesisSourceConfiguration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamKinesisSourceConfiguration>;
    /**
     * A name to identify the stream. This is unique to the
     * AWS account and region the Stream is created in.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Configuration options if redshift is the destination.
     * Using `redshiftConfiguration` requires the user to also specify a
     * `s3Configuration` block. More details are given below.
     */
    readonly redshiftConfiguration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamRedshiftConfiguration>;
    /**
     * Required for non-S3 destinations. For S3 destination, use `extendedS3Configuration` instead. Configuration options for the s3 destination (or the intermediate bucket if the destination
     * is redshift). More details are given below.
     */
    readonly s3Configuration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamS3Configuration>;
    readonly splunkConfiguration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamSplunkConfiguration>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the table version for the output data schema. Defaults to `LATEST`.
     */
    readonly versionId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirehoseDeliveryStream resource.
 */
export interface FirehoseDeliveryStreamArgs {
    /**
     * The Amazon Resource Name (ARN) specifying the Stream
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * This is the destination to where the data is delivered. The only options are `s3` (Deprecated, use `extendedS3` instead), `extendedS3`, `redshift`, `elasticsearch`, and `splunk`.
     */
    readonly destination: pulumi.Input<string>;
    readonly destinationId?: pulumi.Input<string>;
    readonly elasticsearchConfiguration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamElasticsearchConfiguration>;
    /**
     * Enhanced configuration options for the s3 destination. More details are given below.
     */
    readonly extendedS3Configuration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamExtendedS3Configuration>;
    /**
     * Allows the ability to specify the kinesis stream that is used as the source of the firehose delivery stream.
     */
    readonly kinesisSourceConfiguration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamKinesisSourceConfiguration>;
    /**
     * A name to identify the stream. This is unique to the
     * AWS account and region the Stream is created in.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Configuration options if redshift is the destination.
     * Using `redshiftConfiguration` requires the user to also specify a
     * `s3Configuration` block. More details are given below.
     */
    readonly redshiftConfiguration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamRedshiftConfiguration>;
    /**
     * Required for non-S3 destinations. For S3 destination, use `extendedS3Configuration` instead. Configuration options for the s3 destination (or the intermediate bucket if the destination
     * is redshift). More details are given below.
     */
    readonly s3Configuration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamS3Configuration>;
    readonly splunkConfiguration?: pulumi.Input<inputApi.kinesis.FirehoseDeliveryStreamSplunkConfiguration>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the table version for the output data schema. Defaults to `LATEST`.
     */
    readonly versionId?: pulumi.Input<string>;
}
