const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi du formulaire.');
        }

        alert('Votre message a bien été envoyé ! Merci.');
        form.reset();
    } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
        alert('Une erreur s\'est produite lors de l\'envoi du formulaire. Veuillez réessayer.');
    }
});