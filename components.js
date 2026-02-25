// Componentes Reutilizáveis - DeMolay Amazonas

// Renderizar Header
function renderHeader() {
  const headerHTML = `
    <header class="border-t-4 border-blue-900 bg-white shadow-sm relative z-50">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        
        <!-- LOGO -->
        <div class="flex items-center space-x-3">
          <a href="index.html">
            <img src="images/logo.png" alt="DeMolay Amazonas" class="h-10">
          </a>
        </div>

        <!-- MENU -->
        <nav>
          <ul class="flex space-x-8 font-medium text-gray-800 relative">
            <li><a href="index.html" class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700">Home</a></li>

            <!-- DEMOLAY -->
            <li class="relative group">
              <button class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700 bg-transparent border-0 cursor-pointer">
                DeMolay ▾
              </button>
              <ul
                class="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg py-2 w-56"
              >
                <li><a href="historia-ordem.html" class="block px-4 py-2 hover:bg-gray-100">História da Ordem</a></li>
                <li><a href="historia-brasil.html" class="block px-4 py-2 hover:bg-gray-100">A Ordem no Brasil</a></li>
                <li><a href="historia-capitulos.html" class="block px-4 py-2 hover:bg-gray-100">Capítulos do Amazonas</a></li>
              </ul>
            </li>

            <!-- GCE-AM -->
            <li class="relative group">
              <button class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700 bg-transparent border-0 cursor-pointer">
                GCE-AM ▾
              </button>
              <ul
                class="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg py-2 w-56"
              >
                <li><a href="grande-conselho.html" class="block px-4 py-2 hover:bg-gray-100">Grande Conselho</a></li>
                <li><a href="gabinete-estadual.html" class="block px-4 py-2 hover:bg-gray-100">Gabinete Estadual</a></li>
                <li><a href="alumni.html" class="block px-4 py-2 hover:bg-gray-100">Alumni Amazonas</a></li>
                <li><a href="organizacoes.html" class="block px-4 py-2 hover:bg-gray-100">Organizações</a></li>
              </ul>
            </li>

            <li>
              <a href="https://ocaminhocomecaaqui.com.br" target="_blank"
                 class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700">
                Seja um DeMolay
              </a>
            </li>
            <li>
              <a href="fale-conosco.html"
                 class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700">
                Fale Conosco
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;
  
  const headerElement = document.querySelector('[data-component="header"]');
  if (headerElement) {
    headerElement.innerHTML = headerHTML;
  }
}

// Renderizar Footer
function renderFooter() {
  const footerHTML = `
    <footer class="bg-blue-900 text-white mt-12">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Sobre -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-red-700">Sobre DeMolay</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              A Ordem DeMolay é uma organização internacional dedicada ao desenvolvimento de líderes 
              e ao caráter dos jovens homens.
            </p>
          </div>

          <!-- Links Rápidos -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-red-700">Links Rápidos</h3>
            <ul class="text-gray-300 text-sm space-y-2">
              <li><a href="index.html" class="hover:text-red-700 transition">Home</a></li>
              <li><a href="historia-ordem.html" class="hover:text-red-700 transition">História da Ordem</a></li>
              <li><a href="grande-conselho.html" class="hover:text-red-700 transition">Grande Conselho</a></li>
              <li><a href="fale-conosco.html" class="hover:text-red-700 transition">Fale Conosco</a></li>
            </ul>
          </div>

          <!-- Contato -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-red-700">Contato</h3>
            <p class="text-gray-300 text-sm mb-2">
              <strong>Email:</strong> contato@demolayamazonas.com.br
            </p>
            <p class="text-gray-300 text-sm mb-4">
              <strong>Telefone:</strong> (92) 3000-0000
            </p>
            <div class="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" class="text-gray-300 hover:text-red-700 transition text-xl">f</a>
              <a href="https://www.instagram.com" target="_blank" class="text-gray-300 hover:text-red-700 transition text-xl">📷</a>
              <a href="https://www.youtube.com" target="_blank" class="text-gray-300 hover:text-red-700 transition text-xl">▶</a>
            </div>
          </div>
        </div>

        <div class="border-t border-blue-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Grande Conselho Estadual da Ordem DeMolay do Amazonas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `;
  
  const footerElement = document.querySelector('[data-component="footer"]');
  if (footerElement) {
    footerElement.innerHTML = footerHTML;
  }
}

// Inicializar Abas
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');

      // Remove classe active de todos os buttons e contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Adiciona classe active ao button e content clicado
      button.classList.add('active');
      document.querySelector(`[data-tab-content="${tabName}"]`).classList.add('active');
    });
  });

  // Ativar primeira aba por padrão
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initTabs();
});
