// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Inputs
{

    public sealed class InventoryFilterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The prefix that is prepended to all inventory results.
        /// </summary>
        [Input("prefix")]
        public Input<string>? Prefix { get; set; }

        public InventoryFilterArgs()
        {
        }
    }
}
