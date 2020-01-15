// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Pinpoint.Inputs
{

    public sealed class AppQuietTimeArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The default end time for quiet time in ISO 8601 format. Required if `start` is set
        /// </summary>
        [Input("end")]
        public Input<string>? End { get; set; }

        /// <summary>
        /// The default start time for quiet time in ISO 8601 format. Required if `end` is set
        /// </summary>
        [Input("start")]
        public Input<string>? Start { get; set; }

        public AppQuietTimeArgs()
        {
        }
    }
}
