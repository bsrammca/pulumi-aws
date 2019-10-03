// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package lambda

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/lambda_function.html.markdown.
type Function struct {
	s *pulumi.ResourceState
}

// NewFunction registers a new resource with the given unique name, arguments, and options.
func NewFunction(ctx *pulumi.Context,
	name string, args *FunctionArgs, opts ...pulumi.ResourceOpt) (*Function, error) {
	if args == nil || args.Handler == nil {
		return nil, errors.New("missing required argument 'Handler'")
	}
	if args == nil || args.Role == nil {
		return nil, errors.New("missing required argument 'Role'")
	}
	if args == nil || args.Runtime == nil {
		return nil, errors.New("missing required argument 'Runtime'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["deadLetterConfig"] = nil
		inputs["description"] = nil
		inputs["environment"] = nil
		inputs["code"] = nil
		inputs["name"] = nil
		inputs["handler"] = nil
		inputs["kmsKeyArn"] = nil
		inputs["layers"] = nil
		inputs["memorySize"] = nil
		inputs["publish"] = nil
		inputs["reservedConcurrentExecutions"] = nil
		inputs["role"] = nil
		inputs["runtime"] = nil
		inputs["s3Bucket"] = nil
		inputs["s3Key"] = nil
		inputs["s3ObjectVersion"] = nil
		inputs["sourceCodeHash"] = nil
		inputs["tags"] = nil
		inputs["timeout"] = nil
		inputs["tracingConfig"] = nil
		inputs["vpcConfig"] = nil
	} else {
		inputs["deadLetterConfig"] = args.DeadLetterConfig
		inputs["description"] = args.Description
		inputs["environment"] = args.Environment
		inputs["code"] = args.Code
		inputs["name"] = args.Name
		inputs["handler"] = args.Handler
		inputs["kmsKeyArn"] = args.KmsKeyArn
		inputs["layers"] = args.Layers
		inputs["memorySize"] = args.MemorySize
		inputs["publish"] = args.Publish
		inputs["reservedConcurrentExecutions"] = args.ReservedConcurrentExecutions
		inputs["role"] = args.Role
		inputs["runtime"] = args.Runtime
		inputs["s3Bucket"] = args.S3Bucket
		inputs["s3Key"] = args.S3Key
		inputs["s3ObjectVersion"] = args.S3ObjectVersion
		inputs["sourceCodeHash"] = args.SourceCodeHash
		inputs["tags"] = args.Tags
		inputs["timeout"] = args.Timeout
		inputs["tracingConfig"] = args.TracingConfig
		inputs["vpcConfig"] = args.VpcConfig
	}
	inputs["arn"] = nil
	inputs["invokeArn"] = nil
	inputs["lastModified"] = nil
	inputs["qualifiedArn"] = nil
	inputs["sourceCodeSize"] = nil
	inputs["version"] = nil
	s, err := ctx.RegisterResource("aws:lambda/function:Function", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Function{s: s}, nil
}

// GetFunction gets an existing Function resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetFunction(ctx *pulumi.Context,
	name string, id pulumi.ID, state *FunctionState, opts ...pulumi.ResourceOpt) (*Function, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["deadLetterConfig"] = state.DeadLetterConfig
		inputs["description"] = state.Description
		inputs["environment"] = state.Environment
		inputs["code"] = state.Code
		inputs["name"] = state.Name
		inputs["handler"] = state.Handler
		inputs["invokeArn"] = state.InvokeArn
		inputs["kmsKeyArn"] = state.KmsKeyArn
		inputs["lastModified"] = state.LastModified
		inputs["layers"] = state.Layers
		inputs["memorySize"] = state.MemorySize
		inputs["publish"] = state.Publish
		inputs["qualifiedArn"] = state.QualifiedArn
		inputs["reservedConcurrentExecutions"] = state.ReservedConcurrentExecutions
		inputs["role"] = state.Role
		inputs["runtime"] = state.Runtime
		inputs["s3Bucket"] = state.S3Bucket
		inputs["s3Key"] = state.S3Key
		inputs["s3ObjectVersion"] = state.S3ObjectVersion
		inputs["sourceCodeHash"] = state.SourceCodeHash
		inputs["sourceCodeSize"] = state.SourceCodeSize
		inputs["tags"] = state.Tags
		inputs["timeout"] = state.Timeout
		inputs["tracingConfig"] = state.TracingConfig
		inputs["version"] = state.Version
		inputs["vpcConfig"] = state.VpcConfig
	}
	s, err := ctx.ReadResource("aws:lambda/function:Function", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Function{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Function) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Function) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The Amazon Resource Name (ARN) identifying your Lambda Function.
func (r *Function) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// Nested block to configure the function's *dead letter queue*. See details below.
func (r *Function) DeadLetterConfig() *pulumi.Output {
	return r.s.State["deadLetterConfig"]
}

// Description of what your Lambda Function does.
func (r *Function) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// The Lambda environment's configuration settings. Fields documented below.
func (r *Function) Environment() *pulumi.Output {
	return r.s.State["environment"]
}

// The path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
func (r *Function) Code() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["code"])
}

// A unique name for your Lambda Function.
func (r *Function) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The function [entrypoint][3] in your code.
func (r *Function) Handler() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["handler"])
}

// The ARN to be used for invoking Lambda Function from API Gateway - to be used in [`apigateway.Integration`](https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html)'s `uri`
func (r *Function) InvokeArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["invokeArn"])
}

// The ARN for the KMS encryption key.
func (r *Function) KmsKeyArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["kmsKeyArn"])
}

// The date this resource was last modified.
func (r *Function) LastModified() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["lastModified"])
}

// List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers][10]
func (r *Function) Layers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["layers"])
}

// Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits][5]
func (r *Function) MemorySize() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["memorySize"])
}

// Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.
func (r *Function) Publish() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["publish"])
}

// The Amazon Resource Name (ARN) identifying your Lambda Function Version
// (if versioning is enabled via `publish = true`).
func (r *Function) QualifiedArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["qualifiedArn"])
}

// The amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency][9]
func (r *Function) ReservedConcurrentExecutions() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["reservedConcurrentExecutions"])
}

// IAM role attached to the Lambda Function. This governs both who / what can invoke your Lambda Function, as well as what resources our Lambda Function has access to. See [Lambda Permission Model][4] for more details.
func (r *Function) Role() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["role"])
}

// See [Runtimes][6] for valid values.
func (r *Function) Runtime() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["runtime"])
}

// The S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
func (r *Function) S3Bucket() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["s3Bucket"])
}

// The S3 key of an object containing the function's deployment package. Conflicts with `filename`.
func (r *Function) S3Key() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["s3Key"])
}

// The object version containing the function's deployment package. Conflicts with `filename`.
func (r *Function) S3ObjectVersion() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["s3ObjectVersion"])
}

// Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3Key`. The usual way to set this is `filebase64sha256("file.zip")` (this provider 0.11.12 and later) or `base64sha256(file("file.zip"))` (this provider 0.11.11 and earlier), where "file.zip" is the local filename of the lambda function source archive.
func (r *Function) SourceCodeHash() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sourceCodeHash"])
}

// The size in bytes of the function .zip file.
func (r *Function) SourceCodeSize() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sourceCodeSize"])
}

// A mapping of tags to assign to the object.
func (r *Function) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// The amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits][5]
func (r *Function) Timeout() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["timeout"])
}

func (r *Function) TracingConfig() *pulumi.Output {
	return r.s.State["tracingConfig"]
}

// Latest published version of your Lambda Function.
func (r *Function) Version() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["version"])
}

// Provide this to allow your function to access your VPC. Fields documented below. See [Lambda in VPC][7]
func (r *Function) VpcConfig() *pulumi.Output {
	return r.s.State["vpcConfig"]
}

// Input properties used for looking up and filtering Function resources.
type FunctionState struct {
	// The Amazon Resource Name (ARN) identifying your Lambda Function.
	Arn interface{}
	// Nested block to configure the function's *dead letter queue*. See details below.
	DeadLetterConfig interface{}
	// Description of what your Lambda Function does.
	Description interface{}
	// The Lambda environment's configuration settings. Fields documented below.
	Environment interface{}
	// The path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
	Code interface{}
	// A unique name for your Lambda Function.
	Name interface{}
	// The function [entrypoint][3] in your code.
	Handler interface{}
	// The ARN to be used for invoking Lambda Function from API Gateway - to be used in [`apigateway.Integration`](https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html)'s `uri`
	InvokeArn interface{}
	// The ARN for the KMS encryption key.
	KmsKeyArn interface{}
	// The date this resource was last modified.
	LastModified interface{}
	// List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers][10]
	Layers interface{}
	// Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits][5]
	MemorySize interface{}
	// Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.
	Publish interface{}
	// The Amazon Resource Name (ARN) identifying your Lambda Function Version
	// (if versioning is enabled via `publish = true`).
	QualifiedArn interface{}
	// The amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency][9]
	ReservedConcurrentExecutions interface{}
	// IAM role attached to the Lambda Function. This governs both who / what can invoke your Lambda Function, as well as what resources our Lambda Function has access to. See [Lambda Permission Model][4] for more details.
	Role interface{}
	// See [Runtimes][6] for valid values.
	Runtime interface{}
	// The S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
	S3Bucket interface{}
	// The S3 key of an object containing the function's deployment package. Conflicts with `filename`.
	S3Key interface{}
	// The object version containing the function's deployment package. Conflicts with `filename`.
	S3ObjectVersion interface{}
	// Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3Key`. The usual way to set this is `filebase64sha256("file.zip")` (this provider 0.11.12 and later) or `base64sha256(file("file.zip"))` (this provider 0.11.11 and earlier), where "file.zip" is the local filename of the lambda function source archive.
	SourceCodeHash interface{}
	// The size in bytes of the function .zip file.
	SourceCodeSize interface{}
	// A mapping of tags to assign to the object.
	Tags interface{}
	// The amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits][5]
	Timeout interface{}
	TracingConfig interface{}
	// Latest published version of your Lambda Function.
	Version interface{}
	// Provide this to allow your function to access your VPC. Fields documented below. See [Lambda in VPC][7]
	VpcConfig interface{}
}

// The set of arguments for constructing a Function resource.
type FunctionArgs struct {
	// Nested block to configure the function's *dead letter queue*. See details below.
	DeadLetterConfig interface{}
	// Description of what your Lambda Function does.
	Description interface{}
	// The Lambda environment's configuration settings. Fields documented below.
	Environment interface{}
	// The path to the function's deployment package within the local filesystem. If defined, The `s3_`-prefixed options cannot be used.
	Code interface{}
	// A unique name for your Lambda Function.
	Name interface{}
	// The function [entrypoint][3] in your code.
	Handler interface{}
	// The ARN for the KMS encryption key.
	KmsKeyArn interface{}
	// List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers][10]
	Layers interface{}
	// Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits][5]
	MemorySize interface{}
	// Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.
	Publish interface{}
	// The amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency][9]
	ReservedConcurrentExecutions interface{}
	// IAM role attached to the Lambda Function. This governs both who / what can invoke your Lambda Function, as well as what resources our Lambda Function has access to. See [Lambda Permission Model][4] for more details.
	Role interface{}
	// See [Runtimes][6] for valid values.
	Runtime interface{}
	// The S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function.
	S3Bucket interface{}
	// The S3 key of an object containing the function's deployment package. Conflicts with `filename`.
	S3Key interface{}
	// The object version containing the function's deployment package. Conflicts with `filename`.
	S3ObjectVersion interface{}
	// Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3Key`. The usual way to set this is `filebase64sha256("file.zip")` (this provider 0.11.12 and later) or `base64sha256(file("file.zip"))` (this provider 0.11.11 and earlier), where "file.zip" is the local filename of the lambda function source archive.
	SourceCodeHash interface{}
	// A mapping of tags to assign to the object.
	Tags interface{}
	// The amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits][5]
	Timeout interface{}
	TracingConfig interface{}
	// Provide this to allow your function to access your VPC. Fields documented below. See [Lambda in VPC][7]
	VpcConfig interface{}
}
