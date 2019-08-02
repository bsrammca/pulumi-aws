// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package fms

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a resource to associate/disassociate an AWS Firewall Manager administrator account. This operation must be performed in the `us-east-1` region.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/fms_admin_account.html.markdown.
type AdminAccount struct {
	s *pulumi.ResourceState
}

// NewAdminAccount registers a new resource with the given unique name, arguments, and options.
func NewAdminAccount(ctx *pulumi.Context,
	name string, args *AdminAccountArgs, opts ...pulumi.ResourceOpt) (*AdminAccount, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["accountId"] = nil
	} else {
		inputs["accountId"] = args.AccountId
	}
	s, err := ctx.RegisterResource("aws:fms/adminAccount:AdminAccount", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &AdminAccount{s: s}, nil
}

// GetAdminAccount gets an existing AdminAccount resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAdminAccount(ctx *pulumi.Context,
	name string, id pulumi.ID, state *AdminAccountState, opts ...pulumi.ResourceOpt) (*AdminAccount, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["accountId"] = state.AccountId
	}
	s, err := ctx.ReadResource("aws:fms/adminAccount:AdminAccount", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &AdminAccount{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *AdminAccount) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *AdminAccount) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The AWS account ID to associate with AWS Firewall Manager as the AWS Firewall Manager administrator account. This can be an AWS Organizations master account or a member account. Defaults to the current account. Must be configured to perform drift detection.
func (r *AdminAccount) AccountId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["accountId"])
}

// Input properties used for looking up and filtering AdminAccount resources.
type AdminAccountState struct {
	// The AWS account ID to associate with AWS Firewall Manager as the AWS Firewall Manager administrator account. This can be an AWS Organizations master account or a member account. Defaults to the current account. Must be configured to perform drift detection.
	AccountId interface{}
}

// The set of arguments for constructing a AdminAccount resource.
type AdminAccountArgs struct {
	// The AWS account ID to associate with AWS Firewall Manager as the AWS Firewall Manager administrator account. This can be an AWS Organizations master account or a member account. Defaults to the current account. Must be configured to perform drift detection.
	AccountId interface{}
}
