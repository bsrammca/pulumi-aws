// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Outposts
{
    public static class GetOutposts
    {
        /// <summary>
        /// Provides details about multiple Outposts.
        /// 
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Aws = Pulumi.Aws;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var example = Output.Create(Aws.Outposts.GetOutposts.InvokeAsync(new Aws.Outposts.GetOutpostsArgs
        ///         {
        ///             SiteId = data.Aws_outposts_site.Id,
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetOutpostsResult> InvokeAsync(GetOutpostsArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetOutpostsResult>("aws:outposts/getOutposts:getOutposts", args ?? new GetOutpostsArgs(), options.WithVersion());
    }


    public sealed class GetOutpostsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Availability Zone name.
        /// </summary>
        [Input("availabilityZone")]
        public string? AvailabilityZone { get; set; }

        /// <summary>
        /// Availability Zone identifier.
        /// </summary>
        [Input("availabilityZoneId")]
        public string? AvailabilityZoneId { get; set; }

        /// <summary>
        /// Site identifier.
        /// </summary>
        [Input("siteId")]
        public string? SiteId { get; set; }

        public GetOutpostsArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetOutpostsResult
    {
        /// <summary>
        /// Set of Amazon Resource Names (ARNs).
        /// </summary>
        public readonly ImmutableArray<string> Arns;
        public readonly string AvailabilityZone;
        public readonly string AvailabilityZoneId;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Set of identifiers.
        /// </summary>
        public readonly ImmutableArray<string> Ids;
        public readonly string SiteId;

        [OutputConstructor]
        private GetOutpostsResult(
            ImmutableArray<string> arns,

            string availabilityZone,

            string availabilityZoneId,

            string id,

            ImmutableArray<string> ids,

            string siteId)
        {
            Arns = arns;
            AvailabilityZone = availabilityZone;
            AvailabilityZoneId = availabilityZoneId;
            Id = id;
            Ids = ids;
            SiteId = siteId;
        }
    }
}