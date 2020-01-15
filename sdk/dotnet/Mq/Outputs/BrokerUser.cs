// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Mq.Outputs
{

    [OutputType]
    public sealed class BrokerUser
    {
        /// <summary>
        /// Whether to enable access to the [ActiveMQ Web Console](http://activemq.apache.org/web-console.html) for the user.
        /// </summary>
        public readonly bool? ConsoleAccess;
        /// <summary>
        /// The list of groups (20 maximum) to which the ActiveMQ user belongs.
        /// </summary>
        public readonly ImmutableArray<string> Groups;
        /// <summary>
        /// The password of the user. It must be 12 to 250 characters long, at least 4 unique characters, and must not contain commas.
        /// </summary>
        public readonly string Password;
        /// <summary>
        /// The username of the user.
        /// </summary>
        public readonly string Username;

        [OutputConstructor]
        private BrokerUser(
            bool? consoleAccess,

            ImmutableArray<string> groups,

            string password,

            string username)
        {
            ConsoleAccess = consoleAccess;
            Groups = groups;
            Password = password;
            Username = username;
        }
    }
}
