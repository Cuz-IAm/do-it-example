//디바운스와 스로틀
//지연처리를 효과적으로 다룰 수 있게 된다.
//디바운스는 어떤 내용을 입력하다가 특정 시간 대기하고 있으면
//마지막 입력을 바탕으로 서버 요청을 하는 방법이다.
//네이버나 구글의 검색창에서 내용을 입력할 때는 아무내용도 나오지 않다가
//멈추면 연관검색어 목록이 나타나는 것이 디바운스로 구현한 기능이다.

//입력과 동시에 지연함수를 실행하되
//만약에 대기시간 중간에 입력이 들어오면 대기를 멈추고 새롭게 지연함수를 실행하도록 한다.
export function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}
const run=debounce(val=>console.log(val),100);
run('a');
run('b');
run(2);
//2출력