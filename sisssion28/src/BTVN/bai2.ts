type callback = () => void;
function delayedCallback(callBack:callback,delayMs: number): void {
  setTimeout(() => {
    callBack();
  }, delayMs);
}

function printFunction() {
  console.log("đã trôi qua 1 thời gian");
}

delayedCallback(printFunction, 2000);           