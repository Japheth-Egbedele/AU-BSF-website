// Mobile menu toggle
(function(){
            const btn = document.querySelector('.hamburger');
            const menu = document.getElementById('mobile-menu');
            const backdrop = document.getElementById('menu-backdrop');
            if(!btn || !menu || !backdrop) return;

            function openMenu(){
                btn.classList.add('is-active');
                btn.setAttribute('aria-expanded','true');
                menu.classList.add('open');
                backdrop.classList.add('open');
                menu.setAttribute('aria-hidden','false');
                backdrop.setAttribute('aria-hidden','false');
            }
            function closeMenu(){
                btn.classList.remove('is-active');
                btn.setAttribute('aria-expanded','false');
                menu.classList.remove('open');
                backdrop.classList.remove('open');
                menu.setAttribute('aria-hidden','true');
                backdrop.setAttribute('aria-hidden','true');
            }

            btn.addEventListener('click', function(){
                const open = btn.classList.contains('is-active');
                (open? closeMenu : openMenu)();
            });
            backdrop.addEventListener('click', closeMenu);
            // close on Escape
            document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeMenu(); });
        })();