// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Kinesis.Inputs
{

    public sealed class FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Defaults to `true`. Set it to `false` if you want to disable format conversion while preserving the configuration details.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("processors")]
        private InputList<Inputs.FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorGetArgs>? _processors;

        /// <summary>
        /// Array of data processors. More details are given below
        /// </summary>
        public InputList<Inputs.FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorGetArgs> Processors
        {
            get => _processors ?? (_processors = new InputList<Inputs.FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorGetArgs>());
            set => _processors = value;
        }

        public FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationGetArgs()
        {
        }
    }
}
