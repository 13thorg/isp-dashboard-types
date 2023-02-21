export declare type RootLevelGroupType = {
    _id?: string;
    name: string;
    deletable: boolean;
    createdAt: Date;
    updatedAt: Date;
};
export declare type GroupType = {
    _id?: string;
    name: string;
    groupBy: string | RootLevelGroupType;
    key: string;
    createdAt: Date;
    updatedAt: Date;
};
