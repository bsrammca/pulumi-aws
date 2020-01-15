// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.LB.Outputs
{

    [OutputType]
    public sealed class ListenerRuleActionRedirect
    {
        /// <summary>
        /// The hostname. This component is not percent-encoded. The hostname can contain `#{host}`. Defaults to `#{host}`.
        /// </summary>
        public readonly string? Host;
        /// <summary>
        /// The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}. Defaults to `/#{path}`.
        /// </summary>
        public readonly string? Path;
        /// <summary>
        /// The port. Specify a value from `1` to `65535` or `#{port}`. Defaults to `#{port}`.
        /// </summary>
        public readonly string? Port;
        /// <summary>
        /// The protocol. Valid values are `HTTP`, `HTTPS`, or `#{protocol}`. Defaults to `#{protocol}`.
        /// </summary>
        public readonly string? Protocol;
        /// <summary>
        /// The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?". Defaults to `#{query}`.
        /// </summary>
        public readonly string? Query;
        /// <summary>
        /// The HTTP response code. Valid values are `2XX`, `4XX`, or `5XX`.
        /// </summary>
        public readonly string StatusCode;

        [OutputConstructor]
        private ListenerRuleActionRedirect(
            string? host,

            string? path,

            string? port,

            string? protocol,

            string? query,

            string statusCode)
        {
            Host = host;
            Path = path;
            Port = port;
            Protocol = protocol;
            Query = query;
            StatusCode = statusCode;
        }
    }
}
