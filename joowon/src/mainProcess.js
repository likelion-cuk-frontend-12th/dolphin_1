function mainProcess(hook) {
  console.log("메인 프로세스의 1단계 작업이 시작됩니다. ");
  console.log("메인 프로세스의 2단계 작업이 시작됩니다. ");
  console.log("메인 프로세스의 3단계 작업이 시작됩니다. ");
  hook();
  console.log("메인 프로세스의 4단계 작업이 시작됩니다. ");
  console.log("메인 프로세스의 5단계 작업이 시작됩니다. ");
}

mainProcess(() => {
  console.log("엄마 나 콘솔나왔어!");
});
