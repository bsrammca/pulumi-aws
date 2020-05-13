// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a Kinesis Video Stream resource. Amazon Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for analytics, machine learning (ML), playback, and other processing.
 *
 * For more details, see the [Amazon Kinesis Documentation](https://aws.amazon.com/documentation/kinesis/).
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const defaultVideoStream = new aws.kinesis.VideoStream("default", {
 *     dataRetentionInHours: 1,
 *     deviceName: "kinesis-video-device-name",
 *     mediaType: "video/h264",
 *     tags: {
 *         Name: "kinesis-video-stream",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/kinesis_video_stream.html.markdown.
 */
export class VideoStream extends pulumi.CustomResource {
    /**
     * Get an existing VideoStream resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VideoStreamState, opts?: pulumi.CustomResourceOptions): VideoStream {
        return new VideoStream(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:kinesis/videoStream:VideoStream';

    /**
     * Returns true if the given object is an instance of VideoStream.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VideoStream {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VideoStream.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) specifying the Stream (same as `id`)
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * A time stamp that indicates when the stream was created.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. The default value is `0`, indicating that the stream does not persist data.
     */
    public readonly dataRetentionInHours!: pulumi.Output<number | undefined>;
    /**
     * The name of the device that is writing to the stream. **In the current implementation, Kinesis Video Streams does not use this name.**
     */
    public readonly deviceName!: pulumi.Output<string | undefined>;
    /**
     * The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data. If no key ID is specified, the default, Kinesis Video-managed key (`aws/kinesisvideo`) is used.
     */
    public readonly kmsKeyId!: pulumi.Output<string>;
    /**
     * The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see [Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml). If you choose to specify the MediaType, see [Naming Requirements](https://tools.ietf.org/html/rfc6838#section-4.2) for guidelines.
     */
    public readonly mediaType!: pulumi.Output<string | undefined>;
    /**
     * A name to identify the stream. This is unique to the
     * AWS account and region the Stream is created in.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A map of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The version of the stream.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a VideoStream resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VideoStreamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VideoStreamArgs | VideoStreamState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as VideoStreamState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["creationTime"] = state ? state.creationTime : undefined;
            inputs["dataRetentionInHours"] = state ? state.dataRetentionInHours : undefined;
            inputs["deviceName"] = state ? state.deviceName : undefined;
            inputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            inputs["mediaType"] = state ? state.mediaType : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as VideoStreamArgs | undefined;
            inputs["dataRetentionInHours"] = args ? args.dataRetentionInHours : undefined;
            inputs["deviceName"] = args ? args.deviceName : undefined;
            inputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            inputs["mediaType"] = args ? args.mediaType : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["creationTime"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(VideoStream.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VideoStream resources.
 */
export interface VideoStreamState {
    /**
     * The Amazon Resource Name (ARN) specifying the Stream (same as `id`)
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * A time stamp that indicates when the stream was created.
     */
    readonly creationTime?: pulumi.Input<string>;
    /**
     * The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. The default value is `0`, indicating that the stream does not persist data.
     */
    readonly dataRetentionInHours?: pulumi.Input<number>;
    /**
     * The name of the device that is writing to the stream. **In the current implementation, Kinesis Video Streams does not use this name.**
     */
    readonly deviceName?: pulumi.Input<string>;
    /**
     * The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data. If no key ID is specified, the default, Kinesis Video-managed key (`aws/kinesisvideo`) is used.
     */
    readonly kmsKeyId?: pulumi.Input<string>;
    /**
     * The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see [Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml). If you choose to specify the MediaType, see [Naming Requirements](https://tools.ietf.org/html/rfc6838#section-4.2) for guidelines.
     */
    readonly mediaType?: pulumi.Input<string>;
    /**
     * A name to identify the stream. This is unique to the
     * AWS account and region the Stream is created in.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The version of the stream.
     */
    readonly version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VideoStream resource.
 */
export interface VideoStreamArgs {
    /**
     * The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. The default value is `0`, indicating that the stream does not persist data.
     */
    readonly dataRetentionInHours?: pulumi.Input<number>;
    /**
     * The name of the device that is writing to the stream. **In the current implementation, Kinesis Video Streams does not use this name.**
     */
    readonly deviceName?: pulumi.Input<string>;
    /**
     * The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data. If no key ID is specified, the default, Kinesis Video-managed key (`aws/kinesisvideo`) is used.
     */
    readonly kmsKeyId?: pulumi.Input<string>;
    /**
     * The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see [Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml). If you choose to specify the MediaType, see [Naming Requirements](https://tools.ietf.org/html/rfc6838#section-4.2) for guidelines.
     */
    readonly mediaType?: pulumi.Input<string>;
    /**
     * A name to identify the stream. This is unique to the
     * AWS account and region the Stream is created in.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
