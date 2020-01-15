// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Organizations.Inputs
{

    public sealed class OrganizationAccountArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// ARN of the root
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// Email of the account
        /// </summary>
        [Input("email")]
        public Input<string>? Email { get; set; }

        /// <summary>
        /// Identifier of the root
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the policy type
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public OrganizationAccountArgs()
        {
        }
    }
}
