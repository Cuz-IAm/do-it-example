//Asynchronous Function
//알고 있는 개념이긴 한데 잠깐 보고는 지나가자.
function work1(onDone) {
  setTimeout(() => onDone('작업1 완료', 100));
}

function work2(onDone) {
  setTimeout(() => onDone('작업2 완료', 200));
}

function work3(onDone) {
  setTimeout(() => onDone('작업3 완료'), 300);
}

function urgentWork() {
  console.log('긴급 작업');
}

work1(function (msg1) {
  console.log('done after 100ms' + msg1);
  work2(function (msg2) {
    console.log('done after 200ms' + msg2);
    work3(function (msg3) {
      console.log('done after 300ms' + msg3);
    });
  });
});
urgentWork();
