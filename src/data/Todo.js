import Immutable from 'immutable';

const Todo = Immutable.Record({
  id: '',
  complete: false,
  draft: false,
  text: '',
});

export default Todo;