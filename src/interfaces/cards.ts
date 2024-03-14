export enum ETasksStatus {
    Backlog = 'Backlog',
    Ready = 'Ready',
    InProgress = 'In Progress',
    Finished = 'Finished',
}

export interface ICard {
    id: string,
    title: string,
    description: string,
    status: ETasksStatus
}


