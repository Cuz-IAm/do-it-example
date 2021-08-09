//배열 컴포넌트는 성능에 영향을 많이 영향을 준다.
//속도를 높이기 위해서, 배열 컴포넌트는 키값을 설정해주는 것이 좋다.
//키값을 설정해주면 리액트 엔진이 그 컴포넌트를 기억해놓았다가, 재활용할 수 있기 때문이다.
//키값은 최대한 고유한 키값을 사용하는게 좋다.
//따라서 예를 들면
import React from 'react';
class Todolist extends React.Component {
  render() {
    const todoList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '공부하기', finished: true },
    ];
    return (
      <React.Fragment>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div> //<>과 </>를 써주어도 된다.
        ))}
      </React.Fragment>
    );
  }
}

export default Todolist;
