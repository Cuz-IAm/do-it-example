import React from 'react';

class StateExample extends React.Component {
  constructor(props) {
    super(props); //자식클래스의 생성자를 만들기 위해선 부모클래스의 인스턴스가 당연히 필요함.
    //왜냐하면 부모클래스에게서 프로퍼티들을 받아와야 하거든
    //따라서 부모클래스의 인스턴스를 만드는 super()함수를 이용한다.
    //state를 정의
    this.state = {
      loading: true,
      formData: 'no data',
    };
    //나중에 설명해준다는군
    this.handleData = this.handleData.bind(this);
    //4초 후에 handleData함수를 호출한다.
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';
    const { formData } = this.state;
    this.setState({
      loading: false,
      formData: data + formData,
    });
    console.log('loading 값', this.state.loading);
  }

  render() {
    return (
      <div>
        {/*state데이터는 this.state로 접근 가능합니다*/}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
//state를 사용할 때 주의점
//1.constructor에서 반드시 초기화할 것
//2.state값을 변경할 때는 setState()(상태관리 함수)를 반드시 사용할 것
//3.setState()함수는 비동기로 처리되고, setState()코드 이후로 연결된 함수들의 실행이 완료된 시점에
//화면 동기화를 거친다.=>그래서 state값을 직접 바꾸지 않고 setState함수를 이용해서 바꾼다.
//몰론 화면 출력을 강제로 바로바로 시키는 법(forceUpdate())도 있긴한데 잘 안쓴다고 함.
