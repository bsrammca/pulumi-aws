// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a Kinesis Firehose Delivery Stream resource. Amazon Kinesis Firehose is a fully managed, elastic service to easily deliver real-time data streams to destinations such as Amazon S3 and Amazon Redshift.
 *
 * For more details, see the [Amazon Kinesis Firehose Documentation](https://aws.amazon.com/documentation/firehose/).
 *
 * ## Example Usage
 *
 * ### Extended S3 Destination
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const bucket = new aws.s3.Bucket("bucket", {
 *     acl: "private",
 * });
 * const firehoseRole = new aws.iam.Role("firehoseRole", {
 *     assumeRolePolicy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": "sts:AssumeRole",
 *       "Principal": {
 *         "Service": "firehose.amazonaws.com"
 *       },
 *       "Effect": "Allow",
 *       "Sid": ""
 *     }
 *   ]
 * }
 * `,
 * });
 * const lambdaIam = new aws.iam.Role("lambdaIam", {
 *     assumeRolePolicy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": "sts:AssumeRole",
 *       "Principal": {
 *         "Service": "lambda.amazonaws.com"
 *       },
 *       "Effect": "Allow",
 *       "Sid": ""
 *     }
 *   ]
 * }
 * `,
 * });
 * const lambdaProcessor = new aws.lambda.Function("lambdaProcessor", {
 *     code: new pulumi.asset.FileArchive("lambda.zip"),
 *     handler: "exports.handler",
 *     role: lambdaIam.arn,
 *     runtime: "nodejs8.10",
 * });
 * const extendedS3Stream = new aws.kinesis.FirehoseDeliveryStream("extendedS3Stream", {
 *     destination: "extendedS3",
 *     extendedS3Configuration: {
 *         bucketArn: bucket.arn,
 *         processingConfiguration: {
 *             enabled: true,
 *             processors: [{
 *                 parameters: [{
 *                     parameterName: "LambdaArn",
 *                     parameterValue: pulumi.interpolate`${lambdaProcessor.arn}:$LATEST`,
 *                 }],
 *                 type: "Lambda",
 *             }],
 *         },
 *         roleArn: firehoseRole.arn,
 *     },
 * });
 * ```
 *
 * ### S3 Destination
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const bucket = new aws.s3.Bucket("bucket", {
 *     acl: "private",
 * });
 * const firehoseRole = new aws.iam.Role("firehoseRole", {
 *     assumeRolePolicy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": "sts:AssumeRole",
 *       "Principal": {
 *         "Service": "firehose.amazonaws.com"
 *       },
 *       "Effect": "Allow",
 *       "Sid": ""
 *     }
 *   ]
 * }
 * `,
 * });
 * const testStream = new aws.kinesis.FirehoseDeliveryStream("testStream", {
 *     destination: "s3",
 *     s3Configuration: {
 *         bucketArn: bucket.arn,
 *         roleArn: firehoseRole.arn,
 *     },
 * });
 * ```
 *
 * ### Redshift Destination
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const testCluster = new aws.redshift.Cluster("testCluster", {
 *     clusterIdentifier: "tf-redshift-cluster-%d",
 *     clusterType: "single-node",
 *     databaseName: "test",
 *     masterPassword: "T3stPass",
 *     masterUsername: "testuser",
 *     nodeType: "dc1.large",
 * });
 * const testStream = new aws.kinesis.FirehoseDeliveryStream("testStream", {
 *     destination: "redshift",
 *     redshiftConfiguration: {
 *         clusterJdbcurl: pulumi.interpolate`jdbc:redshift://${testCluster.endpoint}/${testCluster.databaseName}`,
 *         copyOptions: "delimiter '|'", // the default delimiter
 *         dataTableColumns: "test-col",
 *         dataTableName: "test-table",
 *         password: "T3stPass",
 *         roleArn: aws_iam_role_firehose_role.arn,
 *         s3BackupConfiguration: {
 *             bucketArn: aws_s3_bucket_bucket.arn,
 *             bufferInterval: 300,
 *             bufferSize: 15,
 *             compressionFormat: "GZIP",
 *             roleArn: aws_iam_role_firehose_role.arn,
 *         },
 *         s3BackupMode: "Enabled",
 *         username: "testuser",
 *     },
 *     s3Configuration: {
 *         bucketArn: aws_s3_bucket_bucket.arn,
 *         bufferInterval: 400,
 *         bufferSize: 10,
 *         compressionFormat: "GZIP",
 *         roleArn: aws_iam_role_firehose_role.arn,
 *     },
 * });
 * ```
 *
 * ### Elasticsearch Destination
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const testCluster = new aws.elasticsearch.Domain("testCluster", {});
 * const testStream = new aws.kinesis.FirehoseDeliveryStream("testStream", {
 *     destination: "elasticsearch",
 *     elasticsearchConfiguration: {
 *         domainArn: testCluster.arn,
 *         indexName: "test",
 *         processingConfiguration: {
 *             enabled: true,
 *             processors: [{
 *                 parameters: [{
 *                     parameterName: "LambdaArn",
 *                     parameterValue: pulumi.interpolate`${aws_lambda_function_lambda_processor.arn}:$LATEST`,
 *                 }],
 *                 type: "Lambda",
 *             }],
 *         },
 *         roleArn: aws_iam_role_firehose_role.arn,
 *         typeName: "test",
 *     },
 *     s3Configuration: {
 *         bucketArn: aws_s3_bucket_bucket.arn,
 *         bufferInterval: 400,
 *         bufferSize: 10,
 *         compressionFormat: "GZIP",
 *         roleArn: aws_iam_role_firehose_role.arn,
 *     },
 * });
 * ```
 *
 * ### Splunk Destination
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const testStream = new aws.kinesis.FirehoseDeliveryStream("testStream", {
 *     destination: "splunk",
 *     s3Configuration: {
 *         bucketArn: aws_s3_bucket_bucket.arn,
 *         bufferInterval: 400,
 *         bufferSize: 10,
 *         compressionFormat: "GZIP",
 *         roleArn: aws_iam_role_firehose.arn,
 *     },
 *     splunkConfiguration: {
 *         hecAcknowledgmentTimeout: 600,
 *         hecEndpoint: "https://http-inputs-mydomain.splunkcloud.com:443",
 *         hecEndpointType: "Event",
 *         hecToken: "51D4DA16-C61B-4F5F-8EC7-ED4301342A4A",
 *         s3BackupMode: "FailedEventsOnly",
 *     },
 * });
 * ```
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
    /**
     * Configuration options if elasticsearch is the destination. More details are given below.
     */
    public readonly elasticsearchConfiguration!: pulumi.Output<outputs.kinesis.FirehoseDeliveryStreamElasticsearchConfiguration | undefined>;
    /**
     * Enhanced configuration options for the s3 destination. More details are given below.
     */
    public readonly extendedS3Configuration!: pulumi.Output<outputs.kinesis.FirehoseDeliveryStreamExtendedS3Configuration | undefined>;
    /**
     * Allows the ability to specify the kinesis stream that is used as the source of the firehose delivery stream.
     */
    public readonly kinesisSourceConfiguration!: pulumi.Output<outputs.kinesis.FirehoseDeliveryStreamKinesisSourceConfiguration | undefined>;
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
    public readonly redshiftConfiguration!: pulumi.Output<outputs.kinesis.FirehoseDeliveryStreamRedshiftConfiguration | undefined>;
    /**
     * Required for non-S3 destinations. For S3 destination, use `extendedS3Configuration` instead. Configuration options for the s3 destination (or the intermediate bucket if the destination
     * is redshift). More details are given below.
     */
    public readonly s3Configuration!: pulumi.Output<outputs.kinesis.FirehoseDeliveryStreamS3Configuration | undefined>;
    /**
     * Encrypt at rest options.
     * Server-side encryption should not be enabled when a kinesis stream is configured as the source of the firehose delivery stream.
     */
    public readonly serverSideEncryption!: pulumi.Output<outputs.kinesis.FirehoseDeliveryStreamServerSideEncryption | undefined>;
    public readonly splunkConfiguration!: pulumi.Output<outputs.kinesis.FirehoseDeliveryStreamSplunkConfiguration | undefined>;
    /**
     * A map of tags to assign to the resource.
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
            inputs["serverSideEncryption"] = state ? state.serverSideEncryption : undefined;
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
            inputs["serverSideEncryption"] = args ? args.serverSideEncryption : undefined;
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
    /**
     * Configuration options if elasticsearch is the destination. More details are given below.
     */
    readonly elasticsearchConfiguration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamElasticsearchConfiguration>;
    /**
     * Enhanced configuration options for the s3 destination. More details are given below.
     */
    readonly extendedS3Configuration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamExtendedS3Configuration>;
    /**
     * Allows the ability to specify the kinesis stream that is used as the source of the firehose delivery stream.
     */
    readonly kinesisSourceConfiguration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamKinesisSourceConfiguration>;
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
    readonly redshiftConfiguration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamRedshiftConfiguration>;
    /**
     * Required for non-S3 destinations. For S3 destination, use `extendedS3Configuration` instead. Configuration options for the s3 destination (or the intermediate bucket if the destination
     * is redshift). More details are given below.
     */
    readonly s3Configuration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamS3Configuration>;
    /**
     * Encrypt at rest options.
     * Server-side encryption should not be enabled when a kinesis stream is configured as the source of the firehose delivery stream.
     */
    readonly serverSideEncryption?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamServerSideEncryption>;
    readonly splunkConfiguration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamSplunkConfiguration>;
    /**
     * A map of tags to assign to the resource.
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
    /**
     * Configuration options if elasticsearch is the destination. More details are given below.
     */
    readonly elasticsearchConfiguration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamElasticsearchConfiguration>;
    /**
     * Enhanced configuration options for the s3 destination. More details are given below.
     */
    readonly extendedS3Configuration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamExtendedS3Configuration>;
    /**
     * Allows the ability to specify the kinesis stream that is used as the source of the firehose delivery stream.
     */
    readonly kinesisSourceConfiguration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamKinesisSourceConfiguration>;
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
    readonly redshiftConfiguration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamRedshiftConfiguration>;
    /**
     * Required for non-S3 destinations. For S3 destination, use `extendedS3Configuration` instead. Configuration options for the s3 destination (or the intermediate bucket if the destination
     * is redshift). More details are given below.
     */
    readonly s3Configuration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamS3Configuration>;
    /**
     * Encrypt at rest options.
     * Server-side encryption should not be enabled when a kinesis stream is configured as the source of the firehose delivery stream.
     */
    readonly serverSideEncryption?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamServerSideEncryption>;
    readonly splunkConfiguration?: pulumi.Input<inputs.kinesis.FirehoseDeliveryStreamSplunkConfiguration>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the table version for the output data schema. Defaults to `LATEST`.
     */
    readonly versionId?: pulumi.Input<string>;
}
