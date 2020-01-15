// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Budgets
{
    /// <summary>
    /// Provides a budgets budget resource. Budgets use the cost visualisation provided by Cost Explorer to show you the status of your budgets, to provide forecasts of your estimated costs, and to track your AWS usage, including your free tier usage.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/budgets_budget.html.markdown.
    /// </summary>
    public partial class Budget : Pulumi.CustomResource
    {
        /// <summary>
        /// The ID of the target account for budget. Will use current user's account_id by default if omitted.
        /// </summary>
        [Output("accountId")]
        public Output<string> AccountId { get; private set; } = null!;

        /// <summary>
        /// Whether this budget tracks monetary cost or usage.
        /// </summary>
        [Output("budgetType")]
        public Output<string> BudgetType { get; private set; } = null!;

        /// <summary>
        /// Map of CostFilters key/value pairs to apply to the budget.
        /// </summary>
        [Output("costFilters")]
        public Output<ImmutableDictionary<string, object>> CostFilters { get; private set; } = null!;

        /// <summary>
        /// Object containing CostTypes The types of cost included in a budget, such as tax and subscriptions..
        /// </summary>
        [Output("costTypes")]
        public Output<Outputs.BudgetCostTypes> CostTypes { get; private set; } = null!;

        /// <summary>
        /// The amount of cost or usage being measured for a budget.
        /// </summary>
        [Output("limitAmount")]
        public Output<string> LimitAmount { get; private set; } = null!;

        /// <summary>
        /// The unit of measurement used for the budget forecast, actual spend, or budget threshold, such as dollars or GB. See [Spend](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/data-type-spend.html) documentation.
        /// </summary>
        [Output("limitUnit")]
        public Output<string> LimitUnit { get; private set; } = null!;

        /// <summary>
        /// The name of a budget. Unique within accounts.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The prefix of the name of a budget. Unique within accounts.
        /// </summary>
        [Output("namePrefix")]
        public Output<string> NamePrefix { get; private set; } = null!;

        /// <summary>
        /// Object containing Budget Notifications. Can be used multiple times to define more than one budget notification
        /// </summary>
        [Output("notifications")]
        public Output<ImmutableArray<Outputs.BudgetNotification>> Notifications { get; private set; } = null!;

        /// <summary>
        /// The end of the time period covered by the budget. There are no restrictions on the end date. Format: `2017-01-01_12:00`.
        /// </summary>
        [Output("timePeriodEnd")]
        public Output<string?> TimePeriodEnd { get; private set; } = null!;

        /// <summary>
        /// The start of the time period covered by the budget. The start date must come before the end date. Format: `2017-01-01_12:00`.
        /// </summary>
        [Output("timePeriodStart")]
        public Output<string> TimePeriodStart { get; private set; } = null!;

        /// <summary>
        /// The length of time until a budget resets the actual and forecasted spend. Valid values: `MONTHLY`, `QUARTERLY`, `ANNUALLY`.
        /// </summary>
        [Output("timeUnit")]
        public Output<string> TimeUnit { get; private set; } = null!;


        /// <summary>
        /// Create a Budget resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Budget(string name, BudgetArgs args, CustomResourceOptions? options = null)
            : base("aws:budgets/budget:Budget", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private Budget(string name, Input<string> id, BudgetState? state = null, CustomResourceOptions? options = null)
            : base("aws:budgets/budget:Budget", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Budget resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Budget Get(string name, Input<string> id, BudgetState? state = null, CustomResourceOptions? options = null)
        {
            return new Budget(name, id, state, options);
        }
    }

    public sealed class BudgetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the target account for budget. Will use current user's account_id by default if omitted.
        /// </summary>
        [Input("accountId")]
        public Input<string>? AccountId { get; set; }

        /// <summary>
        /// Whether this budget tracks monetary cost or usage.
        /// </summary>
        [Input("budgetType", required: true)]
        public Input<string> BudgetType { get; set; } = null!;

        [Input("costFilters")]
        private InputMap<object>? _costFilters;

        /// <summary>
        /// Map of CostFilters key/value pairs to apply to the budget.
        /// </summary>
        public InputMap<object> CostFilters
        {
            get => _costFilters ?? (_costFilters = new InputMap<object>());
            set => _costFilters = value;
        }

        /// <summary>
        /// Object containing CostTypes The types of cost included in a budget, such as tax and subscriptions..
        /// </summary>
        [Input("costTypes")]
        public Input<Inputs.BudgetCostTypesArgs>? CostTypes { get; set; }

        /// <summary>
        /// The amount of cost or usage being measured for a budget.
        /// </summary>
        [Input("limitAmount", required: true)]
        public Input<string> LimitAmount { get; set; } = null!;

        /// <summary>
        /// The unit of measurement used for the budget forecast, actual spend, or budget threshold, such as dollars or GB. See [Spend](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/data-type-spend.html) documentation.
        /// </summary>
        [Input("limitUnit", required: true)]
        public Input<string> LimitUnit { get; set; } = null!;

        /// <summary>
        /// The name of a budget. Unique within accounts.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The prefix of the name of a budget. Unique within accounts.
        /// </summary>
        [Input("namePrefix")]
        public Input<string>? NamePrefix { get; set; }

        [Input("notifications")]
        private InputList<Inputs.BudgetNotificationArgs>? _notifications;

        /// <summary>
        /// Object containing Budget Notifications. Can be used multiple times to define more than one budget notification
        /// </summary>
        public InputList<Inputs.BudgetNotificationArgs> Notifications
        {
            get => _notifications ?? (_notifications = new InputList<Inputs.BudgetNotificationArgs>());
            set => _notifications = value;
        }

        /// <summary>
        /// The end of the time period covered by the budget. There are no restrictions on the end date. Format: `2017-01-01_12:00`.
        /// </summary>
        [Input("timePeriodEnd")]
        public Input<string>? TimePeriodEnd { get; set; }

        /// <summary>
        /// The start of the time period covered by the budget. The start date must come before the end date. Format: `2017-01-01_12:00`.
        /// </summary>
        [Input("timePeriodStart", required: true)]
        public Input<string> TimePeriodStart { get; set; } = null!;

        /// <summary>
        /// The length of time until a budget resets the actual and forecasted spend. Valid values: `MONTHLY`, `QUARTERLY`, `ANNUALLY`.
        /// </summary>
        [Input("timeUnit", required: true)]
        public Input<string> TimeUnit { get; set; } = null!;

        public BudgetArgs()
        {
        }
    }

    public sealed class BudgetState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the target account for budget. Will use current user's account_id by default if omitted.
        /// </summary>
        [Input("accountId")]
        public Input<string>? AccountId { get; set; }

        /// <summary>
        /// Whether this budget tracks monetary cost or usage.
        /// </summary>
        [Input("budgetType")]
        public Input<string>? BudgetType { get; set; }

        [Input("costFilters")]
        private InputMap<object>? _costFilters;

        /// <summary>
        /// Map of CostFilters key/value pairs to apply to the budget.
        /// </summary>
        public InputMap<object> CostFilters
        {
            get => _costFilters ?? (_costFilters = new InputMap<object>());
            set => _costFilters = value;
        }

        /// <summary>
        /// Object containing CostTypes The types of cost included in a budget, such as tax and subscriptions..
        /// </summary>
        [Input("costTypes")]
        public Input<Inputs.BudgetCostTypesGetArgs>? CostTypes { get; set; }

        /// <summary>
        /// The amount of cost or usage being measured for a budget.
        /// </summary>
        [Input("limitAmount")]
        public Input<string>? LimitAmount { get; set; }

        /// <summary>
        /// The unit of measurement used for the budget forecast, actual spend, or budget threshold, such as dollars or GB. See [Spend](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/data-type-spend.html) documentation.
        /// </summary>
        [Input("limitUnit")]
        public Input<string>? LimitUnit { get; set; }

        /// <summary>
        /// The name of a budget. Unique within accounts.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The prefix of the name of a budget. Unique within accounts.
        /// </summary>
        [Input("namePrefix")]
        public Input<string>? NamePrefix { get; set; }

        [Input("notifications")]
        private InputList<Inputs.BudgetNotificationGetArgs>? _notifications;

        /// <summary>
        /// Object containing Budget Notifications. Can be used multiple times to define more than one budget notification
        /// </summary>
        public InputList<Inputs.BudgetNotificationGetArgs> Notifications
        {
            get => _notifications ?? (_notifications = new InputList<Inputs.BudgetNotificationGetArgs>());
            set => _notifications = value;
        }

        /// <summary>
        /// The end of the time period covered by the budget. There are no restrictions on the end date. Format: `2017-01-01_12:00`.
        /// </summary>
        [Input("timePeriodEnd")]
        public Input<string>? TimePeriodEnd { get; set; }

        /// <summary>
        /// The start of the time period covered by the budget. The start date must come before the end date. Format: `2017-01-01_12:00`.
        /// </summary>
        [Input("timePeriodStart")]
        public Input<string>? TimePeriodStart { get; set; }

        /// <summary>
        /// The length of time until a budget resets the actual and forecasted spend. Valid values: `MONTHLY`, `QUARTERLY`, `ANNUALLY`.
        /// </summary>
        [Input("timeUnit")]
        public Input<string>? TimeUnit { get; set; }

        public BudgetState()
        {
        }
    }
}
