// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Cognito.Inputs
{

    public sealed class UserPoolSchemaNumberAttributeConstraintsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The maximum value of an attribute that is of the number data type.
        /// </summary>
        [Input("maxValue")]
        public Input<string>? MaxValue { get; set; }

        /// <summary>
        /// The minimum value of an attribute that is of the number data type.
        /// </summary>
        [Input("minValue")]
        public Input<string>? MinValue { get; set; }

        public UserPoolSchemaNumberAttributeConstraintsArgs()
        {
        }
    }
}
