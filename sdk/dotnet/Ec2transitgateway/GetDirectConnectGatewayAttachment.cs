// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2TransitGateway
{
    public static partial class Invokes
    {
        /// <summary>
        /// Get information on an EC2 Transit Gateway's attachment to a Direct Connect Gateway.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ec2_transit_gateway_dx_gateway_attachment.html.markdown.
        /// </summary>
        public static Task<GetDirectConnectGatewayAttachmentResult> GetDirectConnectGatewayAttachment(GetDirectConnectGatewayAttachmentArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDirectConnectGatewayAttachmentResult>("aws:ec2transitgateway/getDirectConnectGatewayAttachment:getDirectConnectGatewayAttachment", args ?? InvokeArgs.Empty, options.WithVersion());
    }


    public sealed class GetDirectConnectGatewayAttachmentArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Identifier of the Direct Connect Gateway.
        /// </summary>
        [Input("dxGatewayId", required: true)]
        public string DxGatewayId { get; set; } = null!;

        [Input("tags")]
        private Dictionary<string, object>? _tags;
        public Dictionary<string, object> Tags
        {
            get => _tags ?? (_tags = new Dictionary<string, object>());
            set => _tags = value;
        }

        /// <summary>
        /// Identifier of the EC2 Transit Gateway.
        /// </summary>
        [Input("transitGatewayId", required: true)]
        public string TransitGatewayId { get; set; } = null!;

        public GetDirectConnectGatewayAttachmentArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDirectConnectGatewayAttachmentResult
    {
        public readonly string DxGatewayId;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Key-value tags for the EC2 Transit Gateway Attachment
        /// </summary>
        public readonly ImmutableDictionary<string, object> Tags;
        public readonly string TransitGatewayId;

        [OutputConstructor]
        private GetDirectConnectGatewayAttachmentResult(
            string dxGatewayId,

            string id,

            ImmutableDictionary<string, object> tags,

            string transitGatewayId)
        {
            DxGatewayId = dxGatewayId;
            Id = id;
            Tags = tags;
            TransitGatewayId = transitGatewayId;
        }
    }
}
