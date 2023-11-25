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

export type AssetType = {
    uid: string,
    mimeType: string,
    bucketName: string,
    bucketType: AssetsBucketTypeEnum
}