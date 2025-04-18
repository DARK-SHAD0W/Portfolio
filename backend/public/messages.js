// backend/public/messages.js

(async () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      // redirection si pas admin
      return window.location.href = '/';
    }
  
    const container = document.getElementById('messagesContainer');
    try {
      const res = await fetch('/api/messages', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(await res.text());
      const messages = await res.json();
  
      messages.forEach(msg => {
        const card = document.createElement('div');
        card.className = 'message-card';
        card.innerHTML = `
          <div class="message-inner">
            <!-- Face avant : infos brèves -->
            <div class="message-front">
              <h3>${msg.name}</h3>
              <p><strong>Objet :</strong> ${msg.subject}</p>
              <p><em>${msg.email}</em></p>
            </div>
            <!-- Face arrière : contenu complet -->
            <div class="message-back">
              <h3>message</h3>
              <p>${msg.message}</p>
              <small>${new Date(msg.createdAt).toLocaleString()}</small>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    } catch (err) {
      container.innerText = 'Erreur de chargement des messages : ' + err.message;
    }
  })();
  