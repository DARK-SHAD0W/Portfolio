let isAdminConnected = false;

// Connexion admin
document.getElementById("adminLoginForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok && data.token) {
      await navigator.clipboard.writeText(data.token);
      localStorage.setItem("jwtToken", data.token);
      isAdminConnected = true;
      document.getElementById("token-status").innerText = "✅ Token copié dans le presse-papier !";
      document.getElementById("admin-warning").style.display = "none";
    } else {
      document.getElementById("token-status").innerText = "❌ Identifiants invalides.";
      isAdminConnected = false;
    }
  } catch {
    document.getElementById("token-status").innerText = "❌ Erreur de connexion.";
    isAdminConnected = false;
  }
});

// Blocage navigation si pas connecté
["btn-ajouter", "btn-modifier", "btn-supprimer"].forEach((id) => {
  document.getElementById(id)?.addEventListener("click", function (e) {
    if (!isAdminConnected) {
      e.preventDefault();
      document.getElementById("admin-warning").style.display = "block";
    } else {
      document.getElementById("admin-warning").style.display = "none";
    }
  });
});

// Déconnexion
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("jwtToken");
  alert("Déconnexion réussie !");
  window.location.reload();
});

// Ajout de projet
const addForm = document.getElementById("addProjectForm");
if (addForm) {
  addForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!isAdminConnected) {
      document.getElementById("admin-warning").style.display = "block";
      return;
    }

    const formData = new FormData(addForm);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Projet ajouté avec succès !");
        addForm.reset();
      } else {
        document.getElementById("addError").innerText = data.message || "❌ Échec de l’ajout.";
        document.getElementById("addError").style.display = "block";
      }
    } catch (error) {
      document.getElementById("addError").innerText = "❌ Erreur réseau ou serveur.";
      document.getElementById("addError").style.display = "block";
    }
  });
}

// Modification projet
const editForm = document.getElementById("editProjectForm");
if (editForm) {
  editForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const id = this.id.value.trim();
    const updatedData = {
      title: this.title.value || undefined,
      description: this.description.value || undefined,
      githubLink: this.githubLink.value || undefined,
      demoLink: this.demoLink?.value || "", // ✅ assure la présence même si vide
      whatILearned: this.whatILearned.value || undefined,
      stack: this.stack.value ? JSON.parse(this.stack.value) : undefined,
    };

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        alert("✅ Projet mis à jour !");
        this.reset();
      } else {
        const errorText = await response.text();
        document.getElementById("editError").innerText = "❌ Erreur : " + errorText;
        document.getElementById("editError").style.display = "block";
      }
    } catch {
      document.getElementById("editError").innerText = "❌ Erreur de connexion.";
      document.getElementById("editError").style.display = "block";
    }
  });
}

// Suppression projet
const deleteForm = document.getElementById("deleteProjectForm");
if (deleteForm) {
  deleteForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const id = this.id.value.trim();

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });

      if (response.ok) {
        alert("🗑️ Projet supprimé !");
        this.reset();
      } else {
        const errorText = await response.text();
        document.getElementById("deleteError").innerText = "❌ Erreur : " + errorText;
        document.getElementById("deleteError").style.display = "block";
      }
    } catch {
      document.getElementById("deleteError").innerText = "❌ Erreur réseau.";
      document.getElementById("deleteError").style.display = "block";
    }
  });
}
