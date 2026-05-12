// Componentes Reutilizáveis - DeMolay Amazonas

// Renderizar Header
function renderHeader() {
  const pathPrefix = window.location.pathname.includes('/pages/') ? '../' : '';
  const pageHref = page => `${pathPrefix}pages/${page}`;
  const rootHref = `${pathPrefix}index.html`;
  const assetHref = asset => `${pathPrefix}assets/${asset}`;

  const headerHTML = `
    <header class="border-t-4 border-blue-900 bg-white shadow-sm relative z-50">
      <div class="container mx-auto flex justify-between items-center py-4 px-0">

        <a href="${rootHref}" class="flex items-center" aria-label="Voltar para a página inicial DeMolay Amazonas">
          <img 
            src="${assetHref('images/logo.png')}" 
            alt="DeMolay Amazonas" 
            class="h-10 w-auto object-contain -ml-3"
          >
        </a>

        <!-- HAMBURGER (mobile only) -->
        <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-800 focus:outline-none" aria-label="Menu">
          <svg id="icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg id="icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- DESKTOP NAV -->
        <nav class="desktop-nav hidden md:block">
          <ul class="flex space-x-8 font-medium text-gray-800 relative">
            <li><a href="${rootHref}" class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700">Home</a></li>
            <li><a href="${pageHref('historia-ordem.html')}" class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700">Ordem DeMolay</a></li>
            <li class="relative group">
              <button class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700 bg-transparent border-0 cursor-pointer font-medium">
                DeMolay Amazonas ▾
              </button>
              <ul class="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg py-2 w-56">
                <li><a href="${pageHref('grande-conselho.html')}" class="block px-4 py-2 hover:bg-gray-100">Grande Conselho Estadual</a></li>
                <li><a href="${pageHref('gabinete-estadual.html')}" class="block px-4 py-2 hover:bg-gray-100">Gabinete Estadual</a></li>
                <li><a href="${pageHref('historia-capitulos.html')}" class="block px-4 py-2 hover:bg-gray-100">Capítulos</a></li>
                <li><a href="${pageHref('priorados-nobres-cavaleiros.html')}" class="block px-4 py-2 hover:bg-gray-100">Priorados</a></li>
                <li><a href="${pageHref('castelos-escudeiros.html')}" class="block px-4 py-2 hover:bg-gray-100">Castelos de Escudeiros</a></li>
                <li><a href="${pageHref('clube-maes-amigos.html')}" class="block px-4 py-2 hover:bg-gray-100">Clube de Mães e Amigos</a></li>
                <li><a href="${pageHref('corte-chevaliers.html')}" class="block px-4 py-2 hover:bg-gray-100">Corte de Chevaliers</a></li>
                <li><a href="${pageHref('academia-amazonense-demolay-letras.html')}" class="block px-4 py-2 hover:bg-gray-100">Academia de Letras</a></li>
                <li><a href="${pageHref('alumni.html')}" class="block px-4 py-2 hover:bg-gray-100">DeMolay Alumni</a></li>
              </ul>
            </li>
            <li><a href="${pageHref('eventos.html')}" class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700">Eventos</a></li>
            <li><a href="https://ocaminhocomecaaqui.com.br" target="_blank" rel="noopener noreferrer" class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700">Seja um DeMolay</a></li>
            <li><a href="${pageHref('fead-doacoes.html')}" class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700">Fundo de Amparo</a></li>
            <li><a href="${pageHref('fale-conosco.html')}" class="hover:text-blue-900 border-b-2 border-transparent hover:border-red-700">Fale Conosco</a></li>
          </ul>
        </nav>
      </div>

      <!-- MOBILE NAV -->
      <nav id="mobile-nav" class="mobile-nav md:hidden hidden border-t border-gray-100 bg-white">
        <ul class="font-medium text-gray-800 divide-y divide-gray-100">
          <li><a href="${rootHref}" class="block px-6 py-3 hover:bg-gray-50 hover:text-blue-900">Home</a></li>
          <li><a href="${pageHref('historia-ordem.html')}" class="block px-6 py-3 hover:bg-gray-50 hover:text-blue-900">Ordem DeMolay</a></li>
          <li>
            <ul class="pb-2">
              <li class="px-6 pt-3 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-widest">DeMolay Amazonas</li>
              <li><a href="${pageHref('grande-conselho.html')}" class="block px-8 py-2 hover:bg-gray-50 hover:text-blue-900">Grande Conselho Estadual</a></li>
              <li><a href="${pageHref('gabinete-estadual.html')}" class="block px-8 py-2 hover:bg-gray-50 hover:text-blue-900">Gabinete Estadual</a></li>
              <li><a href="${pageHref('historia-capitulos.html')}" class="block px-8 py-2 hover:bg-gray-50 hover:text-blue-900">Capítulos DeMolays</a></li>
              <li><a href="${pageHref('priorados-nobres-cavaleiros.html')}" class="block px-8 py-2 hover:bg-gray-50 hover:text-blue-900">Priorados de Nobres Cavaleiros</a></li>
              <li><a href="${pageHref('castelos-escudeiros.html')}" class="block px-8 py-2 hover:bg-gray-50 hover:text-blue-900">Castelos de Escudeiros</a></li>
              <li><a href="${pageHref('clube-maes-amigos.html')}" class="block px-8 py-2 hover:bg-gray-50 hover:text-blue-900">Clube de Mães e Amigos</a></li>
              <li><a href="${pageHref('corte-chevaliers.html')}" class="block px-8 py-2 hover:bg-gray-50 hover:text-blue-900">Corte de Chevaliers</a></li>
              <li><a href="${pageHref('academia-amazonense-demolay-letras.html')}" class="block px-8 py-2 hover:bg-gray-50 hover:text-blue-900">Academia Amazonense DeMolay de Letras</a></li>
              <li><a href="${pageHref('alumni.html')}" class="block px-8 py-2 hover:bg-gray-50 hover:text-blue-900">DeMolay Alumni Amazonas</a></li>
            </ul>
          </li>
          <li><a href="${pageHref('eventos.html')}" class="block px-6 py-3 hover:bg-gray-50 hover:text-blue-900">Eventos</a></li>
          <li><a href="https://ocaminhocomecaaqui.com.br" target="_blank" rel="noopener noreferrer" class="block px-6 py-3 hover:bg-gray-50 hover:text-blue-900">Seja um DeMolay</a></li>
          <li><a href="${pageHref('fead-doacoes.html')}" class="block px-6 py-3 hover:bg-gray-50 hover:text-blue-900">Fundo de Amparo</a></li>
          <li><a href="${pageHref('fale-conosco.html')}" class="block px-6 py-3 hover:bg-gray-50 hover:text-blue-900">Fale Conosco</a></li>
        </ul>
      </nav>
    </header>
  `;

  const headerElement = document.querySelector('[data-component="header"]');
  if (headerElement) {
    headerElement.innerHTML = headerHTML;

    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('mobile-nav');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');

    if (btn && nav) {
      btn.addEventListener('click', () => {
        nav.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', String(!nav.classList.contains('hidden')));
      });

      // Close mobile menu after clicking any navigation link
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.add('hidden');
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }
}

// Renderizar Footer
function renderFooter() {
  const pathPrefix = window.location.pathname.includes('/pages/') ? '../' : '';
  const pageHref = page => `${pathPrefix}pages/${page}`;
  const rootHref = `${pathPrefix}index.html`;
  const assetHref = asset => `${pathPrefix}assets/${asset}`;

  const footerHTML = `
    <footer class="bg-blue-900 text-white mt-12">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Sobre -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-red-700">Sobre DeMolay</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              A Ordem DeMolay é uma organização internacional dedicada ao desenvolvimento de líderes 
              e ao caráter dos jovens rapazes.
            </p>
          </div>

          <!-- Links Rápidos -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-red-700">Links Rápidos</h3>
            <ul class="text-gray-300 text-sm space-y-2">
              <li><a href="${rootHref}" class="hover:text-red-700 transition">Home</a></li>
              <li><a href="${pageHref('historia-ordem.html')}" class="hover:text-red-700 transition">História da Ordem</a></li>
              <li><a href="${pageHref('grande-conselho.html')}" class="hover:text-red-700 transition">Grande Conselho</a></li>
              <li><a href="${pageHref('fale-conosco.html')}" class="hover:text-red-700 transition">Fale Conosco</a></li>
            </ul>
          </div>

          <!-- Contato -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-red-700">Contato</h3>
            <p class="text-gray-300 text-sm mb-2">
              <strong>Email:</strong> gce@demolayamazonas.org.br
            </p>
            <p class="text-gray-300 text-sm mb-4">
              <strong>Telefone:</strong> (92) 98159-1015
            </p>
            <div class="flex gap-4">
              <a href="https://www.instagram.com/demolay.amazonas/" target="_blank" class="text-gray-300 hover:text-red-700 transition">
                <img src="${assetHref('images/instagram.png')}" alt="Instagram" class="h-6 w-6">
              </a>
            </div>
          </div>
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
