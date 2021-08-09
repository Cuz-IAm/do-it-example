//배열 컴포넌트(컴포넌트를 배열형태로 만들어 사용)
//배열 컴포넌트는 어디다 쓸까? 게시판이나 유튜브 영상목록등 반복되는 컴포넌트를 활용할 때 good
//배열 컴포넌트는 어떻게 만들고 사용할까?
//배열에다가 여러 데이터를 넣어놓음. map함수!를 실행시켜서 배열에서 데이터를 꺼낸 뒤 jsx를 리턴하도록 한다.
//*map함수,filter함수를 알아놔야 함!
import React from 'react';

class ListExamples extends React.Component {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    priceList.map((price) => <div> 가격: {price}원</div>);
    return (
      <div>
        <label>가격목록</label>
        {priceList.map((price) => (
          <div> 가격: {price}원</div>
        ))}
      </div>
    );
  }
}

export default ListExamples;
