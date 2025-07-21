// Active la caméra
    const video = document.getElementById('camera');
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
      .then(stream => {
        video.srcObject = stream;
      })
      .catch(err => {
        alert("Impossible d'accéder à la caméra");
        console.error(err);
      });