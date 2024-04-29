
function test() {
    if (window.AndroidHandler) {
      window.AndroidHandler.showToast("Hello from JavaScript!");
    }
  }


  function test1(str) {
    if (window.AndroidHandler) {
      window.AndroidHandler.showToast(str);
    }
  }

  function ProfileEventReceived(p1) {
    alert(p1);
  }

  window.addEventListener('ProfileEventReceived', function (obj) {
    console.log(obj);
    alert(obj);

    // Perform the download action here
  });