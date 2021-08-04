//스로틀은 디바운스와 유사하지만 중간에 입력이 들어오면
//이전에 요청한 작업을 주기적으로 계속 실행한다. 지연실행되는 동안 중복으로 실행을 요청하면 다시 시작하지 않고 씹는다.
//말그대로 스로틀해서 조절.
//페이스북에서 무한 스크롤하면 다음 타임라인 로딩을 하는 기능이 이것으로 구현되었다.
function throttle(func, delay) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      //lastran값이 정해지지 않을 때->처음 실행되었을 때
      func.call(context, ...args); //서버 요청 함수 시작
      lastRan = Date.now(); //서버 요청했을 때의 시간 저장
    } else {
      //처음 실행된 이후
      if (lastFunc) clearTimeout(lastFunc); //lastFunc값이 존재한다면
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= delay) {
          //설정한 딜레이 시간보다 기존 실행되던 것의 딜레이가 더 길다면
          func.call(context, ...args); //서버요청 다시 실행
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}
let checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = Window.pageYOffset;
  const pageBottomPosition = Document.body.offsetHeight - Window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    console.log('다음 페이지 로딩');
  }
};
let infiniteScroll = throttle(checkPosition, 300);
Window.addEventListener('scroll', infiniteScroll);
