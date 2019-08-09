// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Retrieve information about an EKS Cluster.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = pulumi.output(aws.eks.getCluster({
 *     name: "example",
 * }));
 * 
 * export const endpoint = example.endpoint;
 * export const kubeconfigCertificateAuthorityData = example.certificateAuthority.data;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/eks_cluster.html.markdown.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> & GetClusterResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetClusterResult> = pulumi.runtime.invoke("aws:eks/getCluster:getCluster", {
        "name": args.name,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterArgs {
    /**
     * The name of the cluster
     */
    readonly name: string;
}

/**
 * A collection of values returned by getCluster.
 */
export interface GetClusterResult {
    /**
     * The Amazon Resource Name (ARN) of the cluster.
     */
    readonly arn: string;
    /**
     * Nested attribute containing `certificate-authority-data` for your cluster.
     */
    readonly certificateAuthority: { data: string };
    /**
     * The Unix epoch time stamp in seconds for when the cluster was created.
     */
    readonly createdAt: string;
    /**
     * The enabled control plane logs.
     */
    readonly enabledClusterLogTypes: string[];
    /**
     * The endpoint for your Kubernetes API server.
     */
    readonly endpoint: string;
    readonly name: string;
    /**
     * The platform version for the cluster.
     */
    readonly platformVersion: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.
     */
    readonly roleArn: string;
    /**
     * The Kubernetes server version for the cluster.
     */
    readonly version: string;
    /**
     * Nested attribute containing VPC configuration for the cluster.
     */
    readonly vpcConfig: { endpointPrivateAccess: boolean, endpointPublicAccess: boolean, securityGroupIds: string[], subnetIds: string[], vpcId: string };
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
