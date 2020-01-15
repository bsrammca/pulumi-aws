// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Cognito.Inputs
{

    public sealed class UserPoolEmailConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Instruct Cognito to either use its built-in functional or Amazon SES to send out emails.
        /// </summary>
        [Input("emailSendingAccount")]
        public Input<string>? EmailSendingAccount { get; set; }

        /// <summary>
        /// The REPLY-TO email address.
        /// </summary>
        [Input("replyToEmailAddress")]
        public Input<string>? ReplyToEmailAddress { get; set; }

        /// <summary>
        /// The ARN of the email source.
        /// </summary>
        [Input("sourceArn")]
        public Input<string>? SourceArn { get; set; }

        public UserPoolEmailConfigurationArgs()
        {
        }
    }
}
