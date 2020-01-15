// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Glue.Inputs
{

    public sealed class CatalogTableStorageDescriptorSortColumnArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the column.
        /// </summary>
        [Input("column", required: true)]
        public Input<string> Column { get; set; } = null!;

        /// <summary>
        /// Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).
        /// </summary>
        [Input("sortOrder", required: true)]
        public Input<int> SortOrder { get; set; } = null!;

        public CatalogTableStorageDescriptorSortColumnArgs()
        {
        }
    }
}
