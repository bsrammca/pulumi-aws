// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {CannedAcl} from "./cannedAcl";

/**
 * Provides a S3 bucket resource.
 */
export class Bucket extends pulumi.CustomResource {
    /**
     * Get an existing Bucket resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BucketState, opts?: pulumi.CustomResourceOptions): Bucket {
        return new Bucket(name, <any>state, { ...opts, id: id });
    }

    /**
     * Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`.
     */
    public readonly accelerationStatus: pulumi.Output<string>;
    /**
     * The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Defaults to "private".
     */
    public readonly acl: pulumi.Output<string | undefined>;
    /**
     * The ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
     */
    public readonly arn: pulumi.Output<string>;
    /**
     * The ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.
     */
    public readonly bucket: pulumi.Output<string>;
    /**
     * The bucket domain name. Will be of format `bucketname.s3.amazonaws.com`.
     */
    public /*out*/ readonly bucketDomainName: pulumi.Output<string>;
    /**
     * Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`.
     */
    public readonly bucketPrefix: pulumi.Output<string | undefined>;
    /**
     * The bucket region-specific domain name. The bucket domain name including the region name, please refer [here](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for format. Note: The AWS CloudFront allows specifying S3 region-specific endpoint when creating S3 origin, it will prevent [redirect issues](https://forums.aws.amazon.com/thread.jspa?threadID=216814) from CloudFront to S3 Origin URL.
     */
    public /*out*/ readonly bucketRegionalDomainName: pulumi.Output<string>;
    /**
     * A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
     */
    public readonly corsRules: pulumi.Output<{ allowedHeaders?: string[], allowedMethods: string[], allowedOrigins: string[], exposeHeaders?: string[], maxAgeSeconds?: number }[] | undefined>;
    /**
     * A boolean that indicates all objects should be deleted from the bucket so that the bucket can be destroyed without error. These objects are *not* recoverable.
     */
    public readonly forceDestroy: pulumi.Output<boolean | undefined>;
    /**
     * The [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
     */
    public readonly hostedZoneId: pulumi.Output<string>;
    /**
     * A configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) (documented below).
     */
    public readonly lifecycleRules: pulumi.Output<{ abortIncompleteMultipartUploadDays?: number, enabled: boolean, expirations?: { date?: string, days?: number, expiredObjectDeleteMarker?: boolean }[], id: string, noncurrentVersionExpirations?: { days?: number }[], noncurrentVersionTransitions?: { days?: number, storageClass: string }[], prefix?: string, tags?: {[key: string]: any}, transitions?: { date?: string, days?: number, storageClass: string }[] }[] | undefined>;
    /**
     * A settings of [bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) (documented below).
     */
    public readonly loggings: pulumi.Output<{ targetBucket: string, targetPrefix?: string }[] | undefined>;
    /**
     * A valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), Terraform may view the policy as constantly changing in a `terraform plan`. In this case, please make sure you use the verbose/specific version of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    public readonly policy: pulumi.Output<string | undefined>;
    /**
     * If specified, the AWS region this bucket should reside in. Otherwise, the region used by the callee.
     */
    public readonly region: pulumi.Output<string>;
    /**
     * A configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html) (documented below).
     */
    public readonly replicationConfiguration: pulumi.Output<{ role: string, rules: { destination: { accessControlTranslation?: { owner: string }, accountId?: string, bucket: string, replicaKmsKeyId?: string, storageClass?: string }, filter?: { prefix?: string, tags?: {[key: string]: any} }, id?: string, prefix?: string, priority?: number, sourceSelectionCriteria?: { sseKmsEncryptedObjects?: { enabled: boolean } }, status: string }[] } | undefined>;
    /**
     * Specifies who should bear the cost of Amazon S3 data transfer.
     * Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur
     * the costs of any data transfer. See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html)
     * developer guide for more information.
     */
    public readonly requestPayer: pulumi.Output<string>;
    /**
     * A configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) (documented below)
     */
    public readonly serverSideEncryptionConfiguration: pulumi.Output<{ rule: { applyServerSideEncryptionByDefault: { kmsMasterKeyId?: string, sseAlgorithm: string } } } | undefined>;
    /**
     * A mapping of tags that identifies subset of objects to which the rule applies.
     * The rule applies only to objects having all the tags in its tagset.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
     */
    public readonly versioning: pulumi.Output<{ enabled?: boolean, mfaDelete?: boolean }>;
    /**
     * A website object (documented below).
     */
    public readonly website: pulumi.Output<{ errorDocument?: string, indexDocument?: string, redirectAllRequestsTo?: string, routingRules?: string } | undefined>;
    /**
     * The domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records.
     */
    public readonly websiteDomain: pulumi.Output<string>;
    /**
     * The website endpoint, if the bucket is configured with a website. If not, this will be an empty string.
     */
    public readonly websiteEndpoint: pulumi.Output<string>;

    /**
     * Create a Bucket resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: BucketArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BucketArgs | BucketState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: BucketState = argsOrState as BucketState | undefined;
            inputs["accelerationStatus"] = state ? state.accelerationStatus : undefined;
            inputs["acl"] = state ? state.acl : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["bucket"] = state ? state.bucket : undefined;
            inputs["bucketDomainName"] = state ? state.bucketDomainName : undefined;
            inputs["bucketPrefix"] = state ? state.bucketPrefix : undefined;
            inputs["bucketRegionalDomainName"] = state ? state.bucketRegionalDomainName : undefined;
            inputs["corsRules"] = state ? state.corsRules : undefined;
            inputs["forceDestroy"] = state ? state.forceDestroy : undefined;
            inputs["hostedZoneId"] = state ? state.hostedZoneId : undefined;
            inputs["lifecycleRules"] = state ? state.lifecycleRules : undefined;
            inputs["loggings"] = state ? state.loggings : undefined;
            inputs["policy"] = state ? state.policy : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["replicationConfiguration"] = state ? state.replicationConfiguration : undefined;
            inputs["requestPayer"] = state ? state.requestPayer : undefined;
            inputs["serverSideEncryptionConfiguration"] = state ? state.serverSideEncryptionConfiguration : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["versioning"] = state ? state.versioning : undefined;
            inputs["website"] = state ? state.website : undefined;
            inputs["websiteDomain"] = state ? state.websiteDomain : undefined;
            inputs["websiteEndpoint"] = state ? state.websiteEndpoint : undefined;
        } else {
            const args = argsOrState as BucketArgs | undefined;
            inputs["accelerationStatus"] = args ? args.accelerationStatus : undefined;
            inputs["acl"] = args ? args.acl : undefined;
            inputs["arn"] = args ? args.arn : undefined;
            inputs["bucket"] = args ? args.bucket : undefined;
            inputs["bucketPrefix"] = args ? args.bucketPrefix : undefined;
            inputs["corsRules"] = args ? args.corsRules : undefined;
            inputs["forceDestroy"] = args ? args.forceDestroy : undefined;
            inputs["hostedZoneId"] = args ? args.hostedZoneId : undefined;
            inputs["lifecycleRules"] = args ? args.lifecycleRules : undefined;
            inputs["loggings"] = args ? args.loggings : undefined;
            inputs["policy"] = args ? args.policy : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["replicationConfiguration"] = args ? args.replicationConfiguration : undefined;
            inputs["requestPayer"] = args ? args.requestPayer : undefined;
            inputs["serverSideEncryptionConfiguration"] = args ? args.serverSideEncryptionConfiguration : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["versioning"] = args ? args.versioning : undefined;
            inputs["website"] = args ? args.website : undefined;
            inputs["websiteDomain"] = args ? args.websiteDomain : undefined;
            inputs["websiteEndpoint"] = args ? args.websiteEndpoint : undefined;
            inputs["bucketDomainName"] = undefined /*out*/;
            inputs["bucketRegionalDomainName"] = undefined /*out*/;
        }
        super("aws:s3/bucket:Bucket", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Bucket resources.
 */
export interface BucketState {
    /**
     * Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`.
     */
    readonly accelerationStatus?: pulumi.Input<string>;
    /**
     * The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Defaults to "private".
     */
    readonly acl?: pulumi.Input<string | CannedAcl>;
    /**
     * The ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.
     */
    readonly bucket?: pulumi.Input<string>;
    /**
     * The bucket domain name. Will be of format `bucketname.s3.amazonaws.com`.
     */
    readonly bucketDomainName?: pulumi.Input<string>;
    /**
     * Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`.
     */
    readonly bucketPrefix?: pulumi.Input<string>;
    /**
     * The bucket region-specific domain name. The bucket domain name including the region name, please refer [here](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for format. Note: The AWS CloudFront allows specifying S3 region-specific endpoint when creating S3 origin, it will prevent [redirect issues](https://forums.aws.amazon.com/thread.jspa?threadID=216814) from CloudFront to S3 Origin URL.
     */
    readonly bucketRegionalDomainName?: pulumi.Input<string>;
    /**
     * A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
     */
    readonly corsRules?: pulumi.Input<pulumi.Input<{ allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>, allowedMethods: pulumi.Input<pulumi.Input<string>[]>, allowedOrigins: pulumi.Input<pulumi.Input<string>[]>, exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>, maxAgeSeconds?: pulumi.Input<number> }>[]>;
    /**
     * A boolean that indicates all objects should be deleted from the bucket so that the bucket can be destroyed without error. These objects are *not* recoverable.
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * The [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
     */
    readonly hostedZoneId?: pulumi.Input<string>;
    /**
     * A configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) (documented below).
     */
    readonly lifecycleRules?: pulumi.Input<pulumi.Input<{ abortIncompleteMultipartUploadDays?: pulumi.Input<number>, enabled: pulumi.Input<boolean>, expirations?: pulumi.Input<pulumi.Input<{ date?: pulumi.Input<string>, days?: pulumi.Input<number>, expiredObjectDeleteMarker?: pulumi.Input<boolean> }>[]>, id?: pulumi.Input<string>, noncurrentVersionExpirations?: pulumi.Input<pulumi.Input<{ days?: pulumi.Input<number> }>[]>, noncurrentVersionTransitions?: pulumi.Input<pulumi.Input<{ days?: pulumi.Input<number>, storageClass: pulumi.Input<string> }>[]>, prefix?: pulumi.Input<string>, tags?: pulumi.Input<{[key: string]: any}>, transitions?: pulumi.Input<pulumi.Input<{ date?: pulumi.Input<string>, days?: pulumi.Input<number>, storageClass: pulumi.Input<string> }>[]> }>[]>;
    /**
     * A settings of [bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) (documented below).
     */
    readonly loggings?: pulumi.Input<pulumi.Input<{ targetBucket: pulumi.Input<string>, targetPrefix?: pulumi.Input<string> }>[]>;
    /**
     * A valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), Terraform may view the policy as constantly changing in a `terraform plan`. In this case, please make sure you use the verbose/specific version of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    readonly policy?: pulumi.Input<string>;
    /**
     * If specified, the AWS region this bucket should reside in. Otherwise, the region used by the callee.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * A configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html) (documented below).
     */
    readonly replicationConfiguration?: pulumi.Input<{ role: pulumi.Input<string>, rules: pulumi.Input<pulumi.Input<{ destination: pulumi.Input<{ accessControlTranslation?: pulumi.Input<{ owner: pulumi.Input<string> }>, accountId?: pulumi.Input<string>, bucket: pulumi.Input<string>, replicaKmsKeyId?: pulumi.Input<string>, storageClass?: pulumi.Input<string> }>, filter?: pulumi.Input<{ prefix?: pulumi.Input<string>, tags?: pulumi.Input<{[key: string]: any}> }>, id?: pulumi.Input<string>, prefix?: pulumi.Input<string>, priority?: pulumi.Input<number>, sourceSelectionCriteria?: pulumi.Input<{ sseKmsEncryptedObjects?: pulumi.Input<{ enabled: pulumi.Input<boolean> }> }>, status: pulumi.Input<string> }>[]> }>;
    /**
     * Specifies who should bear the cost of Amazon S3 data transfer.
     * Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur
     * the costs of any data transfer. See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html)
     * developer guide for more information.
     */
    readonly requestPayer?: pulumi.Input<string>;
    /**
     * A configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) (documented below)
     */
    readonly serverSideEncryptionConfiguration?: pulumi.Input<{ rule: pulumi.Input<{ applyServerSideEncryptionByDefault: pulumi.Input<{ kmsMasterKeyId?: pulumi.Input<string>, sseAlgorithm: pulumi.Input<string> }> }> }>;
    /**
     * A mapping of tags that identifies subset of objects to which the rule applies.
     * The rule applies only to objects having all the tags in its tagset.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
     */
    readonly versioning?: pulumi.Input<{ enabled?: pulumi.Input<boolean>, mfaDelete?: pulumi.Input<boolean> }>;
    /**
     * A website object (documented below).
     */
    readonly website?: pulumi.Input<{ errorDocument?: pulumi.Input<string>, indexDocument?: pulumi.Input<string>, redirectAllRequestsTo?: pulumi.Input<string>, routingRules?: pulumi.Input<string> }>;
    /**
     * The domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records.
     */
    readonly websiteDomain?: pulumi.Input<string>;
    /**
     * The website endpoint, if the bucket is configured with a website. If not, this will be an empty string.
     */
    readonly websiteEndpoint?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Bucket resource.
 */
export interface BucketArgs {
    /**
     * Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`.
     */
    readonly accelerationStatus?: pulumi.Input<string>;
    /**
     * The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Defaults to "private".
     */
    readonly acl?: pulumi.Input<string | CannedAcl>;
    /**
     * The ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.
     */
    readonly bucket?: pulumi.Input<string>;
    /**
     * Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`.
     */
    readonly bucketPrefix?: pulumi.Input<string>;
    /**
     * A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
     */
    readonly corsRules?: pulumi.Input<pulumi.Input<{ allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>, allowedMethods: pulumi.Input<pulumi.Input<string>[]>, allowedOrigins: pulumi.Input<pulumi.Input<string>[]>, exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>, maxAgeSeconds?: pulumi.Input<number> }>[]>;
    /**
     * A boolean that indicates all objects should be deleted from the bucket so that the bucket can be destroyed without error. These objects are *not* recoverable.
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * The [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
     */
    readonly hostedZoneId?: pulumi.Input<string>;
    /**
     * A configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) (documented below).
     */
    readonly lifecycleRules?: pulumi.Input<pulumi.Input<{ abortIncompleteMultipartUploadDays?: pulumi.Input<number>, enabled: pulumi.Input<boolean>, expirations?: pulumi.Input<pulumi.Input<{ date?: pulumi.Input<string>, days?: pulumi.Input<number>, expiredObjectDeleteMarker?: pulumi.Input<boolean> }>[]>, id?: pulumi.Input<string>, noncurrentVersionExpirations?: pulumi.Input<pulumi.Input<{ days?: pulumi.Input<number> }>[]>, noncurrentVersionTransitions?: pulumi.Input<pulumi.Input<{ days?: pulumi.Input<number>, storageClass: pulumi.Input<string> }>[]>, prefix?: pulumi.Input<string>, tags?: pulumi.Input<{[key: string]: any}>, transitions?: pulumi.Input<pulumi.Input<{ date?: pulumi.Input<string>, days?: pulumi.Input<number>, storageClass: pulumi.Input<string> }>[]> }>[]>;
    /**
     * A settings of [bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) (documented below).
     */
    readonly loggings?: pulumi.Input<pulumi.Input<{ targetBucket: pulumi.Input<string>, targetPrefix?: pulumi.Input<string> }>[]>;
    /**
     * A valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), Terraform may view the policy as constantly changing in a `terraform plan`. In this case, please make sure you use the verbose/specific version of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    readonly policy?: pulumi.Input<string>;
    /**
     * If specified, the AWS region this bucket should reside in. Otherwise, the region used by the callee.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * A configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html) (documented below).
     */
    readonly replicationConfiguration?: pulumi.Input<{ role: pulumi.Input<string>, rules: pulumi.Input<pulumi.Input<{ destination: pulumi.Input<{ accessControlTranslation?: pulumi.Input<{ owner: pulumi.Input<string> }>, accountId?: pulumi.Input<string>, bucket: pulumi.Input<string>, replicaKmsKeyId?: pulumi.Input<string>, storageClass?: pulumi.Input<string> }>, filter?: pulumi.Input<{ prefix?: pulumi.Input<string>, tags?: pulumi.Input<{[key: string]: any}> }>, id?: pulumi.Input<string>, prefix?: pulumi.Input<string>, priority?: pulumi.Input<number>, sourceSelectionCriteria?: pulumi.Input<{ sseKmsEncryptedObjects?: pulumi.Input<{ enabled: pulumi.Input<boolean> }> }>, status: pulumi.Input<string> }>[]> }>;
    /**
     * Specifies who should bear the cost of Amazon S3 data transfer.
     * Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur
     * the costs of any data transfer. See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html)
     * developer guide for more information.
     */
    readonly requestPayer?: pulumi.Input<string>;
    /**
     * A configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) (documented below)
     */
    readonly serverSideEncryptionConfiguration?: pulumi.Input<{ rule: pulumi.Input<{ applyServerSideEncryptionByDefault: pulumi.Input<{ kmsMasterKeyId?: pulumi.Input<string>, sseAlgorithm: pulumi.Input<string> }> }> }>;
    /**
     * A mapping of tags that identifies subset of objects to which the rule applies.
     * The rule applies only to objects having all the tags in its tagset.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
     */
    readonly versioning?: pulumi.Input<{ enabled?: pulumi.Input<boolean>, mfaDelete?: pulumi.Input<boolean> }>;
    /**
     * A website object (documented below).
     */
    readonly website?: pulumi.Input<{ errorDocument?: pulumi.Input<string>, indexDocument?: pulumi.Input<string>, redirectAllRequestsTo?: pulumi.Input<string>, routingRules?: pulumi.Input<string> }>;
    /**
     * The domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records.
     */
    readonly websiteDomain?: pulumi.Input<string>;
    /**
     * The website endpoint, if the bucket is configured with a website. If not, this will be an empty string.
     */
    readonly websiteEndpoint?: pulumi.Input<string>;
}
