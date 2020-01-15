// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.OpsWorks.Outputs
{

    [OutputType]
    public sealed class StackCustomCookbooksSource
    {
        public readonly string? Password;
        public readonly string? Revision;
        public readonly string? SshKey;
        public readonly string Type;
        public readonly string Url;
        public readonly string? Username;

        [OutputConstructor]
        private StackCustomCookbooksSource(
            string? password,

            string? revision,

            string? sshKey,

            string type,

            string url,

            string? username)
        {
            Password = password;
            Revision = revision;
            SshKey = sshKey;
            Type = type;
            Url = url;
            Username = username;
        }
    }
}
