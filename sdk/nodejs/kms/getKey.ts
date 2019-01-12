// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to get detailed information about 
 * the specified KMS Key with flexible key id input. 
 * This can be useful to reference key alias 
 * without having to hard code the ARN as input.
 */
export function getKey(args: GetKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyResult> {
    return pulumi.runtime.invoke("aws:kms/getKey:getKey", {
        "grantTokens": args.grantTokens,
        "keyId": args.keyId,
    }, opts);
}

/**
 * A collection of arguments for invoking getKey.
 */
export interface GetKeyArgs {
    /**
     * List of grant tokens
     */
    readonly grantTokens?: string[];
    /**
     * Key identifier which can be one of the following format:
     * * Key ID. E.g: `1234abcd-12ab-34cd-56ef-1234567890ab`
     * * Key ARN. E.g.: `arn:aws:kms:us-east-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
     * * Alias name. E.g.: `alias/my-key`
     * * Alias ARN: E.g.: `arn:aws:kms:us-east-1:111122223333:alias/my-key`
     */
    readonly keyId: string;
}

/**
 * A collection of values returned by getKey.
 */
export interface GetKeyResult {
    readonly arn: string;
    readonly awsAccountId: string;
    readonly creationDate: string;
    readonly deletionDate: string;
    readonly description: string;
    readonly enabled: boolean;
    readonly expirationModel: string;
    readonly keyManager: string;
    readonly keyState: string;
    readonly keyUsage: string;
    readonly origin: string;
    readonly validTo: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
