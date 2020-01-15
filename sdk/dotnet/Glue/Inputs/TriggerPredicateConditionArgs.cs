// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Glue.Inputs
{

    public sealed class TriggerPredicateConditionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The condition crawl state. Currently, the values supported are `RUNNING`, `SUCCEEDED`, `CANCELLED`, and `FAILED`. If this is specified, `crawler_name` must also be specified. Conflicts with `state`.
        /// </summary>
        [Input("crawlState")]
        public Input<string>? CrawlState { get; set; }

        /// <summary>
        /// The name of the crawler to watch. If this is specified, `crawl_state` must also be specified. Conflicts with `job_name`.
        /// </summary>
        [Input("crawlerName")]
        public Input<string>? CrawlerName { get; set; }

        /// <summary>
        /// The name of the job to watch. If this is specified, `state` must also be specified. Conflicts with `crawler_name`.
        /// </summary>
        [Input("jobName")]
        public Input<string>? JobName { get; set; }

        /// <summary>
        /// A logical operator. Defaults to `EQUALS`.
        /// </summary>
        [Input("logicalOperator")]
        public Input<string>? LogicalOperator { get; set; }

        /// <summary>
        /// The condition job state. Currently, the values supported are `SUCCEEDED`, `STOPPED`, `TIMEOUT` and `FAILED`. If this is specified, `job_name` must also be specified. Conflicts with `crawler_state`.
        /// </summary>
        [Input("state")]
        public Input<string>? State { get; set; }

        public TriggerPredicateConditionArgs()
        {
        }
    }
}
