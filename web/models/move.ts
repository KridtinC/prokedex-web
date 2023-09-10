
export interface Move {
    name: string
    details: MoveDetail[]
    url: string
}

export interface MoveDetail {
    learnMethod: LearnMethod
    learnAt: number
    learnVersion: LearnVersion
}

export enum LearnMethod {
    EGG = 'egg',
    LEVEL = 'level'
}

export enum LearnVersion {
    GS = 'gold-silver',
    CRYSTAL = 'crystal'
}