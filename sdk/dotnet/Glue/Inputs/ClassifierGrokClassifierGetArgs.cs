// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Glue.Inputs
{

    public sealed class ClassifierGrokClassifierGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// An identifier of the data format that the classifier matches.
        /// </summary>
        [Input("classification", required: true)]
        public Input<string> Classification { get; set; } = null!;

        /// <summary>
        /// Custom grok patterns used by this classifier.
        /// </summary>
        [Input("customPatterns")]
        public Input<string>? CustomPatterns { get; set; }

        /// <summary>
        /// The grok pattern used by this classifier.
        /// </summary>
        [Input("grokPattern", required: true)]
        public Input<string> GrokPattern { get; set; } = null!;

        public ClassifierGrokClassifierGetArgs()
        {
        }
    }
}
