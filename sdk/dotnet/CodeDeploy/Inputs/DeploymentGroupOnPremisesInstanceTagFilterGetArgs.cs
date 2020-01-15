// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.CodeDeploy.Inputs
{

    public sealed class DeploymentGroupOnPremisesInstanceTagFilterGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The key of the tag filter.
        /// </summary>
        [Input("key")]
        public Input<string>? Key { get; set; }

        /// <summary>
        /// The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        /// <summary>
        /// The value of the tag filter.
        /// </summary>
        [Input("value")]
        public Input<string>? Value { get; set; }

        public DeploymentGroupOnPremisesInstanceTagFilterGetArgs()
        {
        }
    }
}
