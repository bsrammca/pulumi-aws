// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Inputs
{

    public sealed class InventoryDestinationBucketEncryptionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies to use server-side encryption with AWS KMS-managed keys to encrypt the inventory file (documented below).
        /// </summary>
        [Input("sseKms")]
        public Input<Inputs.InventoryDestinationBucketEncryptionSseKmsArgs>? SseKms { get; set; }

        /// <summary>
        /// Specifies to use server-side encryption with Amazon S3-managed keys (SSE-S3) to encrypt the inventory file.
        /// </summary>
        [Input("sseS3")]
        public Input<Inputs.InventoryDestinationBucketEncryptionSseS3Args>? SseS3 { get; set; }

        public InventoryDestinationBucketEncryptionArgs()
        {
        }
    }
}
