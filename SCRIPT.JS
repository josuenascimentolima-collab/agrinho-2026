// =============================================
// SCRIPT.JS - AGRINHO 2026
// Interatividade, animações e comportamentos dinâmicos
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🚜 AGRINHO 2026 - Script carregado com sucesso!', 'color: #2e8b57; font-weight: bold;');

    // ======================
    // 1. Menu Mobile
    // ======================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Animação do ícone hambúrguer (se usar spans)
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.transition = 'all 0.3s ease';
            });
        });
    }

    // ======================
    // 2. Smooth Scroll para links internos
    // ======================
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    
    linksInternos.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Fecha menu mobile se estiver aberto
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (menuToggle) menuToggle.classList.remove('active');
                }
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======================
    // 3. Animações ao rolar a página (Scroll Reveal)
    // ======================
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            
            if (elementPosition < viewportHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Executa uma vez no carregamento
    animateOnScroll();

    // ======================
    // 4. Validação de Formulário (Inscrição / Contato)
    // ======================
    const form = document.getElementById('form-inscricao') || document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                // Remove classes anteriores
                input.classList.remove('error', 'success');
                
                if (input.required && !input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                }
                
                // Validação específica de email
                if (input.type === 'email' && input.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        input.classList.add('error');
                        isValid = false;
                    }
                }
            });
            
            if (isValid) {
                // Simulação de envio
                const btnSubmit = form.querySelector('button[type="submit"]');
                const originalText = btnSubmit.innerHTML;
                
                btnSubmit.innerHTML = '🌱 Enviando...';
                btnSubmit.disabled = true;
                
                setTimeout(() => {
                    alert('✅ Inscrição realizada com sucesso! Obrigado por participar do AGRINHO 2026!');
                    form.reset();
                    btnSubmit.innerHTML = originalText;
                    btnSubmit.disabled = false;
                }, 1500);
            } else {
                alert('⚠️ Por favor, preencha todos os campos obrigatórios corretamente.');
            }
        });
    }

    // ======================
    // 5. Contador Regressivo (se houver seção de data do evento)
    // ======================
    function iniciarContadorRegressivo(dataAlvo) {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;

        const targetDate = new Date(dataAlvo).getTime();

        const updateCountdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(updateCountdown);
                countdownElement.innerHTML = '<h3>🎉 O evento começou!</h3>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <div class="countdown-item"><span>${days}</span><small>dias</small></div>
                <div class="countdown-item"><span>${hours}</span><small>horas</small></div>
                <div class="countdown-item"><span>${minutes}</span><small>min</small></div>
                <div class="countdown-item"><span>${seconds}</span><small>seg</small></div>
            `;
        }, 1000);
    }

    // Exemplo: iniciar contador (mude a data conforme necessário)
    // iniciarContadorRegressivo('2026-05-15T09:00:00');

    // ======================
    // 6. Galeria / Cards interativos (hover + clique)
    // ======================
    const cards = document.querySelectorAll('.card-atividade, .card-projeto');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
            
            // Fecha outros cards expandidos
            cards.forEach(otherCard => {
                if (otherCard !== card) otherCard.classList.remove('expanded');
            });
        });
    });

    // ======================
    // 7. Botão "Voltar ao topo"
    // ======================
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2e8b57;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ======================
    // Inicializações finais
    // ======================
    console.log('%c✅ Todas as interatividades do AGRINHO 2026 foram carregadas!', 'color: #2e8b57; font-weight: bold;');
});
