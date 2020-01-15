// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Mq.Inputs
{

    public sealed class BrokerLogsGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Enables audit logging. User management action made using JMX or the ActiveMQ Web Console is logged. Defaults to `false`.
        /// </summary>
        [Input("audit")]
        public Input<bool>? Audit { get; set; }

        /// <summary>
        /// Enables general logging via CloudWatch. Defaults to `false`.
        /// </summary>
        [Input("general")]
        public Input<bool>? General { get; set; }

        public BrokerLogsGetArgs()
        {
        }
    }
}
