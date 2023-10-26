export type AssetsAythType = {
    bucketName: string,
    bucketType: AssetsBucketTypeEnum,
    premission: AssetsAythPermissionTypeEnum
}

export enum AssetsBucketTypeEnum {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}

export enum AssetsAythPermissionTypeEnum {
    READ_ONLY = 'READ_ONLY',
    READ_WRITE = 'READ_WRITE',
}