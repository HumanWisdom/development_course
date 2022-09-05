
export interface PartnershipReport {
    AffName:        string;
    AffRefCode:     string;
    BalanceAmt:     number;
    WithdrawnAmt:   number;
    IncomeReport:   IncomeReport[];
    IncomeActivity: IncomeActivity[];
    BankDet:string;
    ByPaypal:number;
}

export interface IncomeActivity {
    SubscriptionId: string;
    Level:          string;
    Comm_Earned:    string;
    CreatedOn:      string;
    Comm_PaidDt:    string;
}

export interface IncomeReport {
    Level:          string;
    CommPercent:    string;
    CommEarned:     string;
    RevenueEarned:  string;
    SubscribersCnt: string;
    PartnersCnt:    string;
    Year:           string;
}
