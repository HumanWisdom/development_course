
export class ProgramModel {
moduleId:string;
path:string;
lastScreen :string;
moduleName:string;
firstScreen:string;
}


export enum ProgramType {
None=0,
Adults=9,
Children=10,
Teenagers=11,
Parents=12,
Young_Adults=13
}

export enum SubscriptionType {
    Monthly = 1,
    Annual = 2
}