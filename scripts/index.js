  document.getElementById('playRedirectBtn').addEventListener('click', function () {
    const audio = document.getElementById('audio');
    
    // Mainkan musik
    audio.play().then(() => {
      // Tunggu sebentar (opsional), lalu redirect
      setTimeout(() => {
        window.location.href = "home.html"; // Ganti dengan URL tujuanmu
      }, 500); // 0.5 detik agar musik sempat mulai
    }).catch(err => {
      console.error("Gagal memutar musik:", err);
      window.location.href = "home.html"; // tetap redirect meski musik gagal
    });
  });