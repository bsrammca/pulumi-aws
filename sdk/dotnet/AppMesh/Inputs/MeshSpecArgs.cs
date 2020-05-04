// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.AppMesh.Inputs
{

    public sealed class MeshSpecArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The egress filter rules for the service mesh.
        /// </summary>
        [Input("egressFilter")]
        public Input<Inputs.MeshSpecEgressFilterArgs>? EgressFilter { get; set; }

        public MeshSpecArgs()
        {
        }
    }
}