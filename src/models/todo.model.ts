import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    mysql: {
      nullable: 'NO'
    }
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    mysql: {
      nullable: 'NO'
    }
  })
  title: string;

  @property({
    type: 'string',
    mysql: {
      nullable: 'YES'
    }
  })
  desc?: string;

  @property({
    type: 'boolean',
    mysql: {
      nullable: 'NO'
    }
  })
  isComplete?: boolean;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
