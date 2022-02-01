export interface CoachInfo {
    Id:                    number;
    ProfilePic:            string;
    Gender:                string;
    Title:                 string;
    Name:                  string;
    Email:                 string;
    Address:               string;
    City:                  string;
    Country:               string;
    State:                 string;
    Primary_CTC:           string;
    Secondary_CTC:         string;
    Consult_StrtTime:      string;
    Consult_EndTime:       string;
    PerSessionFee:         string;
    PerSessionFee_Curr:    string;
    PayPalID:              string;
    NationalID_Front:      string;
    NationalID_Back:       string;
    WorkExp:               number;
    Coach_Certificates:    CoachCertificate[];
    Coach_Specializations: string[];
    Coach_Languages:       string[];
    Coach_Websites:        string[];
    Coach_Qualifications:  string[];
    NationalID_BackImgPath: string;
    NationalID_FrontImgPath:string;
    RegSubmit: number;
    Description:string;
}

export interface CoachCertificate {
    CertificationName: string;
    Certificates:      string;
}
