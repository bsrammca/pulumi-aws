// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.MediaPackage.Inputs
{

    public sealed class ChannelHlsIngestGetArgs : Pulumi.ResourceArgs
    {
        [Input("ingestEndpoints")]
        private InputList<Inputs.ChannelHlsIngestIngestEndpointGetArgs>? _ingestEndpoints;

        /// <summary>
        /// A list of the ingest endpoints
        /// </summary>
        public InputList<Inputs.ChannelHlsIngestIngestEndpointGetArgs> IngestEndpoints
        {
            get => _ingestEndpoints ?? (_ingestEndpoints = new InputList<Inputs.ChannelHlsIngestIngestEndpointGetArgs>());
            set => _ingestEndpoints = value;
        }

        public ChannelHlsIngestGetArgs()
        {
        }
    }
}
