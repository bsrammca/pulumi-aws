// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ecs.Inputs
{

    public sealed class ServiceOrderedPlacementStrategyGetArgs : Pulumi.ResourceArgs
    {
        [Input("field")]
        public Input<string>? Field { get; set; }

        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public ServiceOrderedPlacementStrategyGetArgs()
        {
        }
    }
}
