// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.S3.Inputs
{

    public sealed class BucketNotificationQueueArgs : Pulumi.ResourceArgs
    {
        [Input("events", required: true)]
        private InputList<string>? _events;

        /// <summary>
        /// Specifies [event](http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html#notification-how-to-event-types-and-destinations) for which to send notifications.
        /// </summary>
        public InputList<string> Events
        {
            get => _events ?? (_events = new InputList<string>());
            set => _events = value;
        }

        /// <summary>
        /// Specifies object key name prefix.
        /// </summary>
        [Input("filterPrefix")]
        public Input<string>? FilterPrefix { get; set; }

        /// <summary>
        /// Specifies object key name suffix.
        /// </summary>
        [Input("filterSuffix")]
        public Input<string>? FilterSuffix { get; set; }

        /// <summary>
        /// Specifies unique identifier for each of the notification configurations.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Specifies Amazon SQS queue ARN.
        /// </summary>
        [Input("queueArn", required: true)]
        public Input<string> QueueArn { get; set; } = null!;

        public BucketNotificationQueueArgs()
        {
        }
    }
}
