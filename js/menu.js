    // --- JAVASCRIPT PARA LA INTERACCIÓN ---
    
    // Seleccionamos la hamburguesa y el menú
    const menuIcon = document.getElementById('menuIcon');
    const navMenu = document.getElementById('navMenu');

    // Escuchamos el clic en la hamburguesa
    menuIcon.addEventListener('click', () => {
        // Alternamos (añadimos/quitamos) la clase 'active' a ambos
        menuIcon.classList.toggle('active'); // Para animar la hamburguesa a 'X'
        navMenu.classList.toggle('active');   // Para mostrar/ocultar el menú
    });