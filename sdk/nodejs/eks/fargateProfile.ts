// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an EKS Fargate Profile.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.eks.FargateProfile("example", {
 *     clusterName: aws_eks_cluster.example.name,
 *     podExecutionRoleArn: aws_iam_role.example.arn,
 *     subnetIds: aws_subnet.example.map(__item => __item.id),
 *     selector: [{
 *         namespace: "example",
 *     }],
 * });
 * ```
 *
 * ### Example IAM Role for EKS Fargate Profile
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.iam.Role("example", {assumeRolePolicy: JSON.stringify({
 *     Statement: [{
 *         Action: "sts:AssumeRole",
 *         Effect: "Allow",
 *         Principal: {
 *             Service: "eks-fargate-pods.amazonaws.com",
 *         },
 *     }],
 *     Version: "2012-10-17",
 * })});
 * const example-AmazonEKSFargatePodExecutionRolePolicy = new aws.iam.RolePolicyAttachment("example-AmazonEKSFargatePodExecutionRolePolicy", {
 *     policyArn: "arn:aws:iam::aws:policy/AmazonEKSFargatePodExecutionRolePolicy",
 *     role: example.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/eks_fargate_profile.html.markdown.
 */
export class FargateProfile extends pulumi.CustomResource {
    /**
     * Get an existing FargateProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FargateProfileState, opts?: pulumi.CustomResourceOptions): FargateProfile {
        return new FargateProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:eks/fargateProfile:FargateProfile';

    /**
     * Returns true if the given object is an instance of FargateProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FargateProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FargateProfile.__pulumiType;
    }

    /**
     * Amazon Resource Name (ARN) of the EKS Fargate Profile.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Name of the EKS Cluster.
     */
    public readonly clusterName!: pulumi.Output<string>;
    /**
     * Name of the EKS Fargate Profile.
     */
    public readonly fargateProfileName!: pulumi.Output<string>;
    /**
     * Amazon Resource Name (ARN) of the IAM Role that provides permissions for the EKS Fargate Profile.
     */
    public readonly podExecutionRoleArn!: pulumi.Output<string>;
    /**
     * Configuration block(s) for selecting Kubernetes Pods to execute with this EKS Fargate Profile. Detailed below.
     */
    public readonly selectors!: pulumi.Output<outputs.eks.FargateProfileSelector[]>;
    /**
     * Status of the EKS Fargate Profile.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Identifiers of private EC2 Subnets to associate with the EKS Fargate Profile. These subnets must have the following resource tag: `kubernetes.io/cluster/CLUSTER_NAME` (where `CLUSTER_NAME` is replaced with the name of the EKS Cluster).
     */
    public readonly subnetIds!: pulumi.Output<string[] | undefined>;
    /**
     * Key-value map of resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a FargateProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FargateProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FargateProfileArgs | FargateProfileState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FargateProfileState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["clusterName"] = state ? state.clusterName : undefined;
            inputs["fargateProfileName"] = state ? state.fargateProfileName : undefined;
            inputs["podExecutionRoleArn"] = state ? state.podExecutionRoleArn : undefined;
            inputs["selectors"] = state ? state.selectors : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["subnetIds"] = state ? state.subnetIds : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as FargateProfileArgs | undefined;
            if (!args || args.clusterName === undefined) {
                throw new Error("Missing required property 'clusterName'");
            }
            if (!args || args.podExecutionRoleArn === undefined) {
                throw new Error("Missing required property 'podExecutionRoleArn'");
            }
            if (!args || args.selectors === undefined) {
                throw new Error("Missing required property 'selectors'");
            }
            inputs["clusterName"] = args ? args.clusterName : undefined;
            inputs["fargateProfileName"] = args ? args.fargateProfileName : undefined;
            inputs["podExecutionRoleArn"] = args ? args.podExecutionRoleArn : undefined;
            inputs["selectors"] = args ? args.selectors : undefined;
            inputs["subnetIds"] = args ? args.subnetIds : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(FargateProfile.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FargateProfile resources.
 */
export interface FargateProfileState {
    /**
     * Amazon Resource Name (ARN) of the EKS Fargate Profile.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Name of the EKS Cluster.
     */
    readonly clusterName?: pulumi.Input<string>;
    /**
     * Name of the EKS Fargate Profile.
     */
    readonly fargateProfileName?: pulumi.Input<string>;
    /**
     * Amazon Resource Name (ARN) of the IAM Role that provides permissions for the EKS Fargate Profile.
     */
    readonly podExecutionRoleArn?: pulumi.Input<string>;
    /**
     * Configuration block(s) for selecting Kubernetes Pods to execute with this EKS Fargate Profile. Detailed below.
     */
    readonly selectors?: pulumi.Input<pulumi.Input<inputs.eks.FargateProfileSelector>[]>;
    /**
     * Status of the EKS Fargate Profile.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * Identifiers of private EC2 Subnets to associate with the EKS Fargate Profile. These subnets must have the following resource tag: `kubernetes.io/cluster/CLUSTER_NAME` (where `CLUSTER_NAME` is replaced with the name of the EKS Cluster).
     */
    readonly subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Key-value map of resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a FargateProfile resource.
 */
export interface FargateProfileArgs {
    /**
     * Name of the EKS Cluster.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * Name of the EKS Fargate Profile.
     */
    readonly fargateProfileName?: pulumi.Input<string>;
    /**
     * Amazon Resource Name (ARN) of the IAM Role that provides permissions for the EKS Fargate Profile.
     */
    readonly podExecutionRoleArn: pulumi.Input<string>;
    /**
     * Configuration block(s) for selecting Kubernetes Pods to execute with this EKS Fargate Profile. Detailed below.
     */
    readonly selectors: pulumi.Input<pulumi.Input<inputs.eks.FargateProfileSelector>[]>;
    /**
     * Identifiers of private EC2 Subnets to associate with the EKS Fargate Profile. These subnets must have the following resource tag: `kubernetes.io/cluster/CLUSTER_NAME` (where `CLUSTER_NAME` is replaced with the name of the EKS Cluster).
     */
    readonly subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Key-value map of resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
