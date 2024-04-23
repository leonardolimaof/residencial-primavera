// Função para salvar o status de um apartamento no localStorage
function saveStatus(apartment, status) {
    localStorage.setItem(apartment, status);
  }

  // Função para carregar o status de um apartamento do localStorage
  function loadStatus(apartment) {
    return localStorage.getItem(apartment) || 'pago'; // Padrão para "pago" se o status não estiver definido
  }

  // Função para carregar os status dos apartamentos ao carregar a página
  document.addEventListener('DOMContentLoaded', function() {
    // Adicione o ID único para cada select e carregue o status correspondente
    document.querySelectorAll('select[data-apartment]').forEach(function(select) {
      const apartmentId = select.getAttribute('data-apartment');
      select.value = loadStatus(apartmentId);
    });
  });

// Carregar valores salvos ao carregar a página
window.onload = function() {
for (let i = 101; i <= 404; i++) {
  const savedAtraso = localStorage.getItem(`selectedAtraso_apartamento_${i}`);
  if (savedAtraso !== null) {
    document.getElementById(`atraso_apartamento_${i}`).value = savedAtraso;
  }
}
};

// Adicionar ouvinte de evento para salvar o valor ao alterar o select
document.querySelectorAll('[name="atraso"]').forEach(select => {
select.addEventListener('change', function() {
  const selectedAtraso = this.value;
  const apartamento = this.getAttribute('data-apartamento');
  localStorage.setItem(`selectedAtraso_apartamento_${apartamento}`, selectedAtraso);
});
});



document.getElementById('btnSalvarComoJPG').addEventListener('click', function() {
  // Capturar o elemento container
  const container = document.querySelector('.container');

  // Usar html2canvas para capturar o conteúdo do container como uma imagem
  html2canvas(container).then(canvas => {
    // Converter o canvas para uma imagem JPG
    const imgData = canvas.toDataURL('image/jpeg');

    // Criar um link para download da imagem
    const link = document.createElement('a');
    link.download = 'website_snapshot.jpg'; // Nome do arquivo
    link.href = imgData;
    link.click(); // Simular o clique no link para iniciar o download
  });
});
