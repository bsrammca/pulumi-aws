// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Sagemaker.Inputs
{

    public sealed class ModelPrimaryContainerGetArgs : Pulumi.ResourceArgs
    {
        [Input("containerHostname")]
        public Input<string>? ContainerHostname { get; set; }

        [Input("environment")]
        private InputMap<object>? _environment;
        public InputMap<object> Environment
        {
            get => _environment ?? (_environment = new InputMap<object>());
            set => _environment = value;
        }

        [Input("image", required: true)]
        public Input<string> Image { get; set; } = null!;

        [Input("modelDataUrl")]
        public Input<string>? ModelDataUrl { get; set; }

        public ModelPrimaryContainerGetArgs()
        {
        }
    }
}
