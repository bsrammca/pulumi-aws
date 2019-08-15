// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

export class TopicRule extends pulumi.CustomResource {
    /**
     * Get an existing TopicRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TopicRuleState, opts?: pulumi.CustomResourceOptions): TopicRule {
        return new TopicRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:iot/topicRule:TopicRule';

    /**
     * Returns true if the given object is an instance of TopicRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TopicRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TopicRule.__pulumiType;
    }

    /**
     * The ARN of the topic rule
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly cloudwatchAlarm!: pulumi.Output<outputApi.iot.TopicRuleCloudwatchAlarm | undefined>;
    public readonly cloudwatchMetric!: pulumi.Output<outputApi.iot.TopicRuleCloudwatchMetric | undefined>;
    /**
     * The description of the rule.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly dynamodb!: pulumi.Output<outputApi.iot.TopicRuleDynamodb | undefined>;
    public readonly elasticsearch!: pulumi.Output<outputApi.iot.TopicRuleElasticsearch | undefined>;
    /**
     * Specifies whether the rule is enabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    public readonly firehose!: pulumi.Output<outputApi.iot.TopicRuleFirehose | undefined>;
    public readonly kinesis!: pulumi.Output<outputApi.iot.TopicRuleKinesis | undefined>;
    public readonly lambda!: pulumi.Output<outputApi.iot.TopicRuleLambda | undefined>;
    /**
     * The name of the rule.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly republish!: pulumi.Output<outputApi.iot.TopicRuleRepublish | undefined>;
    public readonly s3!: pulumi.Output<outputApi.iot.TopicRuleS3 | undefined>;
    public readonly sns!: pulumi.Output<outputApi.iot.TopicRuleSns | undefined>;
    /**
     * The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference (http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference) in the AWS IoT Developer Guide.
     */
    public readonly sql!: pulumi.Output<string>;
    /**
     * The version of the SQL rules engine to use when evaluating the rule.
     */
    public readonly sqlVersion!: pulumi.Output<string>;
    public readonly sqs!: pulumi.Output<outputApi.iot.TopicRuleSqs | undefined>;

    /**
     * Create a TopicRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TopicRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TopicRuleArgs | TopicRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TopicRuleState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["cloudwatchAlarm"] = state ? state.cloudwatchAlarm : undefined;
            inputs["cloudwatchMetric"] = state ? state.cloudwatchMetric : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["dynamodb"] = state ? state.dynamodb : undefined;
            inputs["elasticsearch"] = state ? state.elasticsearch : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["firehose"] = state ? state.firehose : undefined;
            inputs["kinesis"] = state ? state.kinesis : undefined;
            inputs["lambda"] = state ? state.lambda : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["republish"] = state ? state.republish : undefined;
            inputs["s3"] = state ? state.s3 : undefined;
            inputs["sns"] = state ? state.sns : undefined;
            inputs["sql"] = state ? state.sql : undefined;
            inputs["sqlVersion"] = state ? state.sqlVersion : undefined;
            inputs["sqs"] = state ? state.sqs : undefined;
        } else {
            const args = argsOrState as TopicRuleArgs | undefined;
            if (!args || args.enabled === undefined) {
                throw new Error("Missing required property 'enabled'");
            }
            if (!args || args.sql === undefined) {
                throw new Error("Missing required property 'sql'");
            }
            if (!args || args.sqlVersion === undefined) {
                throw new Error("Missing required property 'sqlVersion'");
            }
            inputs["cloudwatchAlarm"] = args ? args.cloudwatchAlarm : undefined;
            inputs["cloudwatchMetric"] = args ? args.cloudwatchMetric : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["dynamodb"] = args ? args.dynamodb : undefined;
            inputs["elasticsearch"] = args ? args.elasticsearch : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["firehose"] = args ? args.firehose : undefined;
            inputs["kinesis"] = args ? args.kinesis : undefined;
            inputs["lambda"] = args ? args.lambda : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["republish"] = args ? args.republish : undefined;
            inputs["s3"] = args ? args.s3 : undefined;
            inputs["sns"] = args ? args.sns : undefined;
            inputs["sql"] = args ? args.sql : undefined;
            inputs["sqlVersion"] = args ? args.sqlVersion : undefined;
            inputs["sqs"] = args ? args.sqs : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(TopicRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TopicRule resources.
 */
export interface TopicRuleState {
    /**
     * The ARN of the topic rule
     */
    readonly arn?: pulumi.Input<string>;
    readonly cloudwatchAlarm?: pulumi.Input<inputApi.iot.TopicRuleCloudwatchAlarm>;
    readonly cloudwatchMetric?: pulumi.Input<inputApi.iot.TopicRuleCloudwatchMetric>;
    /**
     * The description of the rule.
     */
    readonly description?: pulumi.Input<string>;
    readonly dynamodb?: pulumi.Input<inputApi.iot.TopicRuleDynamodb>;
    readonly elasticsearch?: pulumi.Input<inputApi.iot.TopicRuleElasticsearch>;
    /**
     * Specifies whether the rule is enabled.
     */
    readonly enabled?: pulumi.Input<boolean>;
    readonly firehose?: pulumi.Input<inputApi.iot.TopicRuleFirehose>;
    readonly kinesis?: pulumi.Input<inputApi.iot.TopicRuleKinesis>;
    readonly lambda?: pulumi.Input<inputApi.iot.TopicRuleLambda>;
    /**
     * The name of the rule.
     */
    readonly name?: pulumi.Input<string>;
    readonly republish?: pulumi.Input<inputApi.iot.TopicRuleRepublish>;
    readonly s3?: pulumi.Input<inputApi.iot.TopicRuleS3>;
    readonly sns?: pulumi.Input<inputApi.iot.TopicRuleSns>;
    /**
     * The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference (http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference) in the AWS IoT Developer Guide.
     */
    readonly sql?: pulumi.Input<string>;
    /**
     * The version of the SQL rules engine to use when evaluating the rule.
     */
    readonly sqlVersion?: pulumi.Input<string>;
    readonly sqs?: pulumi.Input<inputApi.iot.TopicRuleSqs>;
}

/**
 * The set of arguments for constructing a TopicRule resource.
 */
export interface TopicRuleArgs {
    readonly cloudwatchAlarm?: pulumi.Input<inputApi.iot.TopicRuleCloudwatchAlarm>;
    readonly cloudwatchMetric?: pulumi.Input<inputApi.iot.TopicRuleCloudwatchMetric>;
    /**
     * The description of the rule.
     */
    readonly description?: pulumi.Input<string>;
    readonly dynamodb?: pulumi.Input<inputApi.iot.TopicRuleDynamodb>;
    readonly elasticsearch?: pulumi.Input<inputApi.iot.TopicRuleElasticsearch>;
    /**
     * Specifies whether the rule is enabled.
     */
    readonly enabled: pulumi.Input<boolean>;
    readonly firehose?: pulumi.Input<inputApi.iot.TopicRuleFirehose>;
    readonly kinesis?: pulumi.Input<inputApi.iot.TopicRuleKinesis>;
    readonly lambda?: pulumi.Input<inputApi.iot.TopicRuleLambda>;
    /**
     * The name of the rule.
     */
    readonly name?: pulumi.Input<string>;
    readonly republish?: pulumi.Input<inputApi.iot.TopicRuleRepublish>;
    readonly s3?: pulumi.Input<inputApi.iot.TopicRuleS3>;
    readonly sns?: pulumi.Input<inputApi.iot.TopicRuleSns>;
    /**
     * The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference (http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference) in the AWS IoT Developer Guide.
     */
    readonly sql: pulumi.Input<string>;
    /**
     * The version of the SQL rules engine to use when evaluating the rule.
     */
    readonly sqlVersion: pulumi.Input<string>;
    readonly sqs?: pulumi.Input<inputApi.iot.TopicRuleSqs>;
}
