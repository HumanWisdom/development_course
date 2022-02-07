
export interface CoachAvailabilityInfo{
    Id: string;
    StartDate:          string;
    EndDate:       string;
    StartTime:     string;
    EndTime:    string;
    Days:       string;
    TimeZone:      string;
}

export interface CoachAvailabilityInfoDetail{
    Id: string;
    CoachAvailabilityInfoId:string;
    StartDate:          string;
    EndDate:       string;
    StartTime:     any;
    EndTime:    any;
    Day:       string;
}
