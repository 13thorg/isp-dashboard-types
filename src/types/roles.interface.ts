
export enum RolesEnum {
    CREATE_ROLES = "CREATE_ROLES",
    UPDATE_ROLES = "UPDATE_ROLES",
    READ_ROLES = "READ_ROLES",
    DELETE_ROLES = "DELETE_ROLES",
    
    CREATE_ADMINS = "CREATE_ADMINS",
    UPDATE_ADMINS = "UPDATE_ADMINS",
    READ_ADMINS = "READ_ADMINS",
    DELETE_ADMINS = "DELETE_ADMINS",
    
    CREATE_CUSTOMERS = "CREATE_CUSTOMERS",
    UPDATE_CUSTOMERS = "UPDATE_CUSTOMERS",
    READ_CUSTOMERS = "READ_CUSTOMERS",
    DELETE_CUSTOMERS = "DELETE_CUSTOMERS",
    
    CREATE_DEVICES = "CREATE_DEVICES",
    UPDATE_DEVICES = "UPDATE_DEVICES",
    READ_DEVICES = "READ_DEVICES",
    DELETE_DEVICES = "DELETE_DEVICES",
    
    CREATE_PLANS = "CREATE_PLANS",
    UPDATE_PLANS = "UPDATE_PLANS",
    READ_PLANS = "READ_PLANS",
    DELETE_PLANS = "DELETE_PLANS",
    
    CREATE_ORDERS = "CREATE_ORDERS",
    UPDATE_ORDERS = "UPDATE_ORDERS",
    READ_ORDERS = "READ_ORDERS",
    DELETE_ORDERS = "DELETE_ORDERS",
    
    CREATE_INVOICES = "CREATE_INVOICES",
    UPDATE_INVOICES = "UPDATE_INVOICES",
    READ_INVOICES = "READ_INVOICES",
    DELETE_INVOICES = "DELETE_INVOICES",
    
    CREATE_TRANSACTIONS = "CREATE_TRANSACTIONS",
    UPDATE_TRANSACTIONS = "UPDATE_TRANSACTIONS",
    READ_TRANSACTIONS = "READ_TRANSACTIONS",
    DELETE_TRANSACTIONS = "DELETE_TRANSACTIONS",
    
    CREATE_GROUPS = "CREATE_GROUPS",
    UPDATE_GROUPS = "UPDATE_GROUPS",
    READ_GROUPS = "READ_GROUPS",
    DELETE_GROUPS = "DELETE_GROUPS",
    
    UPSET_CONFIGS = "UPSET_CONFIGS",
    READ_CONFIGS = "READ_CONFIGS",
    
    CREATE_SMS_TEMPLATE = "CREATE_SMS_TEMPLATE",
    UPDATE_SMS_TEMPLATE = "UPDATE_SMS_TEMPLATE",
    READ_SMS_TEMPLATE = "READ_SMS_TEMPLATE",
    DELETE_SMS_TEMPLATE = "DELETE_SMS_TEMPLATE",
    
    CREATE_EMAIL_TEMPLATE = "CREATE_EMAIL_TEMPLATE",
    UPDATE_EMAIL_TEMPLATE = "UPDATE_EMAIL_TEMPLATE",
    READ_EMAIL_TEMPLATE = "READ_EMAIL_TEMPLATE",
    DELETE_EMAIL_TEMPLATE = "DELETE_EMAIL_TEMPLATE",
    
    CREATE_NOTIFICATION_TEMPLATE = "CREATE_NOTIFICATION_TEMPLATE",
    UPDATE_NOTIFICATION_TEMPLATE = "UPDATE_NOTIFICATION_TEMPLATE",
    READ_NOTIFICATION_TEMPLATE = "READ_NOTIFICATION_TEMPLATE",
    DELETE_NOTIFICATION_TEMPLATE = "DELETE_NOTIFICATION_TEMPLATE",
    
    CREATE_SMS_HISTORY = "CREATE_SMS_HISTORY",
    UPDATE_SMS_HISTORY = "UPDATE_SMS_HISTORY",
    READ_SMS_HISTORY = "READ_SMS_HISTORY",
    DELETE_SMS_HISTORY = "DELETE_SMS_HISTORY",

    CREATE_EMAIL_HISTORY = "CREATE_EMAIL_HISTORY",
    UPDATE_EMAIL_HISTORY = "UPDATE_EMAIL_HISTORY",
    READ_EMAIL_HISTORY = "READ_EMAIL_HISTORY",
    DELETE_EMAIL_HISTORY = "DELETE_EMAIL_HISTORY",

    CREATE_NOTIFICATION_HISTORY = "CREATE_NOTIFICATION_HISTORY",
    UPDATE_NOTIFICATION_HISTORY = "UPDATE_NOTIFICATION_HISTORY",
    READ_NOTIFICATION_HISTORY = "READ_NOTIFICATION_HISTORY",
    DELETE_NOTIFICATION_HISTORY = "DELETE_NOTIFICATION_HISTORY",

    CREATE_OTT = "CREATE_OTT",
    UPDATE_OTT = "UPDATE_OTT",
    READ_OTT = "READ_OTT",
    DELETE_OTT = "DELETE_OTT",

    CREATE_NEW_JOINING = "CREATE_NEW_JOINING",
    UPDATE_NEW_JOINING = "UPDATE_NEW_JOINING",
    READ_NEW_JOINING = "READ_NEW_JOINING",
    DELETE_NEW_JOINING = "DELETE_NEW_JOINING",

    CREATE_GATEWAY = "CREATE_GATEWAY",
    UPDATE_GATEWAY = "UPDATE_GATEWAY",
    READ_GATEWAY = "READ_GATEWAY",
    DELETE_GATEWAY = "DELETE_GATEWAY",

    CREATE_PROMOTION = "CREATE_PROMOTION",
    UPDATE_PROMOTION = "UPDATE_PROMOTION",
    READ_PROMOTION = "READ_PROMOTION",
    DELETE_PROMOTION = "DELETE_PROMOTION",
}

export type RolesType = {
    _id?: string,
    name: string,
    roles: { [key in RolesEnum]: boolean },
    deleteable: boolean
    createdAt?: Date,
    updatedAt?: Date
}