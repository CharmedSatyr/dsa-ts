import { name } from 'faker';
import Student from '../tacker';

describe('`Student` class', () => {
  it('should instantiate a `student`', () => {
    const student = new Student('bob', 'jane', 'leroy jenkins');
  });
});

// console.log(user.yes())
