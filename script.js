const toggleButton = document.getElementById('toggleLight');
        const statusText = document.querySelector('.status');
        const body = document.body;

        toggleButton.addEventListener('click', () => {
            const isLightOn = body.classList.toggle('light-on');
            body.classList.toggle('light-off', !isLightOn);

           
            statusText.textContent = isLightOn ? 'Gaisma ir ieslēgta' : 'Gaisma ir izslēgta';
            toggleButton.textContent = isLightOn ? 'Izslēgt gaismu' : 'Ieslēgt gaismu';
        });