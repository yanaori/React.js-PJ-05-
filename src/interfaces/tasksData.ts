import { ETasksStatus } from './cards';

const tasksData = [
  {
    id: '1',
    title: 'Login page – performance issues',
    description: 'This is a sample card description',
    status: ETasksStatus.Backlog
  },
  {
    id: '1.1',
    title: 'Sprint bugfix',
    description: 'This is a sample card description',
    status: ETasksStatus.Backlog
  },
  {
    id: '2',
    title: 'Shop page – performance issues',
    description: 'This is another sample card description',
    status: ETasksStatus.Ready
  },
  {
    id: '2.1',
    title: 'Checkout bugfix',
    description: 'This is another sample card description',
    status: ETasksStatus.Ready
  },
  {
    id: '2.2',
    title: 'Shop bug1',
    description: 'This is another sample card description',
    status: ETasksStatus.Ready
  },
  {
    id: '2.3',
    title: 'Shop bug2',
    description: 'This is another sample card description',
    status: ETasksStatus.Ready
  },
  {
    id: '2.4',
    title: 'Shop bug3',
    description: 'This is another sample card description',
    status: ETasksStatus.Ready
  },
  {
    id: '2.5',
    title: 'Shop bug4',
    description: 'This is another sample card description',
    status: ETasksStatus.Ready
  },
  {
    id: '2.6',
    title: 'Shop bug5',
    description: 'This is another sample card description',
    status: ETasksStatus.Ready
  },
  {
    id: '2.7',
    title: 'Shop bug6',
    description: 'This is another sample card description',
    status: ETasksStatus.Ready
  },
  {
    id: '2.8',
    title: 'Shop page – performance issues',
    description: 'This is another sample card description',
    status: ETasksStatus.Ready
  },
  {
    id: '3',
    title: 'User page – performance issues',
    description: 'This is a third sample card description',
    status: ETasksStatus.InProgress
  },
  {
    id: '3.1',
    title: 'Auth bugfix',
    description: 'This is a third sample card description',
    status: ETasksStatus.InProgress
  },
  {
    id: '4',
    title: 'Main page – performance issues',
    description: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.',
    status: ETasksStatus.Finished
  },
  {
    id: '4.1',
    title: 'Main page bugfix',
    description: 'This is a third sample card description',
    status: ETasksStatus.Finished
  }
];

export default tasksData;