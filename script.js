(function () {
  const credenciais = ['bWV1QGVtYWlsLmNvbQ==', 'bWluaGFzZW5oYTEyMw==']; 

  window.login = function (event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const emailCorreto = atob(credenciais[0]);
    const senhaCorreta = atob(credenciais[1]);

    if (email === emailCorreto && senha === senhaCorreta) {
      sessionStorage.setItem('logado', 'true');
      window.location.href = 'home.html';
    } else {
      alert('Dados de email e senha não conferem');
    }
    return false;
  };
})();
