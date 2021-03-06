// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package servicequotas

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages an individual Service Quota.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v2/go/aws/servicequotas"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := servicequotas.NewServiceQuota(ctx, "example", &servicequotas.ServiceQuotaArgs{
// 			QuotaCode:   pulumi.String("L-F678F1CE"),
// 			ServiceCode: pulumi.String("vpc"),
// 			Value:       pulumi.Float64(75),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type ServiceQuota struct {
	pulumi.CustomResourceState

	// Whether the service quota can be increased.
	Adjustable pulumi.BoolOutput `pulumi:"adjustable"`
	// Amazon Resource Name (ARN) of the service quota.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// Default value of the service quota.
	DefaultValue pulumi.Float64Output `pulumi:"defaultValue"`
	// Code of the service quota to track. For example: `L-F678F1CE`. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html).
	QuotaCode pulumi.StringOutput `pulumi:"quotaCode"`
	// Name of the quota.
	QuotaName     pulumi.StringOutput `pulumi:"quotaName"`
	RequestId     pulumi.StringOutput `pulumi:"requestId"`
	RequestStatus pulumi.StringOutput `pulumi:"requestStatus"`
	// Code of the service to track. For example: `vpc`. Available values can be found with the [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html).
	ServiceCode pulumi.StringOutput `pulumi:"serviceCode"`
	// Name of the service.
	ServiceName pulumi.StringOutput `pulumi:"serviceName"`
	// Float specifying the desired value for the service quota. If the desired value is higher than the current value, a quota increase request is submitted. When a known request is submitted and pending, the value reflects the desired value of the pending request.
	Value pulumi.Float64Output `pulumi:"value"`
}

// NewServiceQuota registers a new resource with the given unique name, arguments, and options.
func NewServiceQuota(ctx *pulumi.Context,
	name string, args *ServiceQuotaArgs, opts ...pulumi.ResourceOption) (*ServiceQuota, error) {
	if args == nil || args.QuotaCode == nil {
		return nil, errors.New("missing required argument 'QuotaCode'")
	}
	if args == nil || args.ServiceCode == nil {
		return nil, errors.New("missing required argument 'ServiceCode'")
	}
	if args == nil || args.Value == nil {
		return nil, errors.New("missing required argument 'Value'")
	}
	if args == nil {
		args = &ServiceQuotaArgs{}
	}
	var resource ServiceQuota
	err := ctx.RegisterResource("aws:servicequotas/serviceQuota:ServiceQuota", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetServiceQuota gets an existing ServiceQuota resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetServiceQuota(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ServiceQuotaState, opts ...pulumi.ResourceOption) (*ServiceQuota, error) {
	var resource ServiceQuota
	err := ctx.ReadResource("aws:servicequotas/serviceQuota:ServiceQuota", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ServiceQuota resources.
type serviceQuotaState struct {
	// Whether the service quota can be increased.
	Adjustable *bool `pulumi:"adjustable"`
	// Amazon Resource Name (ARN) of the service quota.
	Arn *string `pulumi:"arn"`
	// Default value of the service quota.
	DefaultValue *float64 `pulumi:"defaultValue"`
	// Code of the service quota to track. For example: `L-F678F1CE`. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html).
	QuotaCode *string `pulumi:"quotaCode"`
	// Name of the quota.
	QuotaName     *string `pulumi:"quotaName"`
	RequestId     *string `pulumi:"requestId"`
	RequestStatus *string `pulumi:"requestStatus"`
	// Code of the service to track. For example: `vpc`. Available values can be found with the [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html).
	ServiceCode *string `pulumi:"serviceCode"`
	// Name of the service.
	ServiceName *string `pulumi:"serviceName"`
	// Float specifying the desired value for the service quota. If the desired value is higher than the current value, a quota increase request is submitted. When a known request is submitted and pending, the value reflects the desired value of the pending request.
	Value *float64 `pulumi:"value"`
}

type ServiceQuotaState struct {
	// Whether the service quota can be increased.
	Adjustable pulumi.BoolPtrInput
	// Amazon Resource Name (ARN) of the service quota.
	Arn pulumi.StringPtrInput
	// Default value of the service quota.
	DefaultValue pulumi.Float64PtrInput
	// Code of the service quota to track. For example: `L-F678F1CE`. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html).
	QuotaCode pulumi.StringPtrInput
	// Name of the quota.
	QuotaName     pulumi.StringPtrInput
	RequestId     pulumi.StringPtrInput
	RequestStatus pulumi.StringPtrInput
	// Code of the service to track. For example: `vpc`. Available values can be found with the [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html).
	ServiceCode pulumi.StringPtrInput
	// Name of the service.
	ServiceName pulumi.StringPtrInput
	// Float specifying the desired value for the service quota. If the desired value is higher than the current value, a quota increase request is submitted. When a known request is submitted and pending, the value reflects the desired value of the pending request.
	Value pulumi.Float64PtrInput
}

func (ServiceQuotaState) ElementType() reflect.Type {
	return reflect.TypeOf((*serviceQuotaState)(nil)).Elem()
}

type serviceQuotaArgs struct {
	// Code of the service quota to track. For example: `L-F678F1CE`. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html).
	QuotaCode string `pulumi:"quotaCode"`
	// Code of the service to track. For example: `vpc`. Available values can be found with the [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html).
	ServiceCode string `pulumi:"serviceCode"`
	// Float specifying the desired value for the service quota. If the desired value is higher than the current value, a quota increase request is submitted. When a known request is submitted and pending, the value reflects the desired value of the pending request.
	Value float64 `pulumi:"value"`
}

// The set of arguments for constructing a ServiceQuota resource.
type ServiceQuotaArgs struct {
	// Code of the service quota to track. For example: `L-F678F1CE`. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html).
	QuotaCode pulumi.StringInput
	// Code of the service to track. For example: `vpc`. Available values can be found with the [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html).
	ServiceCode pulumi.StringInput
	// Float specifying the desired value for the service quota. If the desired value is higher than the current value, a quota increase request is submitted. When a known request is submitted and pending, the value reflects the desired value of the pending request.
	Value pulumi.Float64Input
}

func (ServiceQuotaArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*serviceQuotaArgs)(nil)).Elem()
}
