// File: backend/public/script.js

// 1) Initialisation de la connexion admin et des menus
const jwtToken           = localStorage.getItem("jwtToken");
let isAdminConnected    = !!jwtToken;
const publicNav         = document.getElementById("publicNav");
const adminNav          = document.getElementById("adminNav");
const logoutBtn         = document.getElementById("logoutBtn");
const adminWarning      = document.getElementById("admin-warning");
const tokenStatus       = document.getElementById("token-status");
const addForm           = document.getElementById("addProjectForm");
const editForm          = document.getElementById("editProjectForm");
const deleteForm        = document.getElementById("deleteProjectForm");
const cvInput           = document.getElementById("cvFileInput");
const btnUpdateCv       = document.getElementById("btn-update-cv");

/**
 * Met à jour l'affichage de la navbar selon l'état de connexion
 */
function updateNavDisplay() {
  if (publicNav && adminNav) {
    publicNav.style.display = isAdminConnected ? "none" : "flex";
    adminNav.style.display  = isAdminConnected ? "flex" : "none";
    if (logoutBtn) logoutBtn.style.display = isAdminConnected ? "inline-block" : "none";
  }
}

// Mise à jour initiale au chargement
updateNavDisplay();


// ----------------------------------------------------------------------
// 🔐 Connexion admin (index.html)
// ----------------------------------------------------------------------
document.getElementById("adminLoginForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();
  const email    = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  updateNavDisplay();
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
      tokenStatus.innerText = "✅ Token copié dans le presse‑papier !";
      if (adminWarning) adminWarning.style.display = "none";
      updateNavDisplay();
    } else {
      tokenStatus.innerText = "❌ Identifiants invalides.";
      isAdminConnected = false;
      updateNavDisplay();
    }
  } catch {
    tokenStatus.innerText = "❌ Erreur de connexion.";
    isAdminConnected = false;
    updateNavDisplay();
  }
});

// ----------------------------------------------------------------------
// 🔓 Déconnexion
// ----------------------------------------------------------------------
logoutBtn?.addEventListener("click", () => {
  localStorage.removeItem("jwtToken");
  isAdminConnected = false;
  updateNavDisplay();
  alert("Déconnexion réussie !");
});


// ----------------------------------------------------------------------
// ➕ AJOUT PROJET (ajout.html)
// ----------------------------------------------------------------------
if (addForm) {
  addForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(addForm);
    const token    = localStorage.getItem("jwtToken");

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
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
    } catch {
      document.getElementById("addError").innerText = "❌ Erreur serveur.";
      document.getElementById("addError").style.display = "block";
    }
  });
}

// Bloque navigation des boutons admin si pas connecté
["btn-ajouter", "btn-modifier", "btn-supprimer"].forEach((id) => {
  document.getElementById(id)?.addEventListener("click", function (e) {
    if (!isAdminConnected) {
      e.preventDefault();
      if (adminWarning) adminWarning.style.display = "block";
    } else if (adminWarning) {
      adminWarning.style.display = "none";
    }
  });
});


// ----------------------------------------------------------------------
// 🔄 MODIFICATION PROJET (edition.html)
// ----------------------------------------------------------------------
if (editForm) {
  editForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = this.id.value.trim();

    // 1) Mise à jour texte
    const updatedData = {
      title:        this.title.value || undefined,
      description:  this.description.value || undefined,
      githubLink:   this.githubLink.value || undefined,
      demoLink:     this.demoLink?.value || "",
      whatILearned: this.whatILearned.value || undefined,
      stack:        this.stack.value ? JSON.parse(this.stack.value) : undefined,
    };

    try {
      const resTxt = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:  `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify(updatedData),
      });
      if (!resTxt.ok) {
        const err = await resTxt.text();
        throw new Error(err);
      }
      alert("✅ Projet mis à jour !");
      this.reset();
    } catch (err) {
      document.getElementById("editError").innerText = "❌ Erreur : " + err.message;
      document.getElementById("editError").style.display = "block";
      return;
    }

    // 2) Image principale
    const imageInput = document.getElementById("imageCard");
    if (imageInput && imageInput.files.length > 0) {
      const imgForm = new FormData();
      imgForm.append("imageCard", imageInput.files[0], imageInput.files[0].name);
      const resImg = await fetch(
        `/api/projects/${id}/image-card`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
          body: imgForm,
        }
      );
      if (!resImg.ok) {
        const errText = await resImg.text();
        alert("⚠ Image principale : " + errText);
      }
    }

    // 3) Galerie
    const galleryInput = document.getElementById("galleryImages");
    if (galleryInput && galleryInput.files.length > 0) {
      const galForm = new FormData();
      Array.from(galleryInput.files).forEach((f) =>
        galForm.append("galleryImages", f, f.name)
      );
      const resGal = await fetch(
        `/api/projects/${id}/gallery`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
          body: galForm,
        }
      );
      if (!resGal.ok) {
        const errText = await resGal.text();
        alert("⚠ Galerie : " + errText);
      }
    }
  });
}


// ----------------------------------------------------------------------
// 🗑️ SUPPRESSION PROJET (suppression.html)
// ----------------------------------------------------------------------
if (deleteForm) {
  deleteForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = this.id.value.trim();
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
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


// ----------------------------------------------------------------------
// 📄 MISE À JOUR DU CV (index.html)
// ----------------------------------------------------------------------
btnUpdateCv?.addEventListener("click", () => {
  if (!isAdminConnected) {
    if (adminWarning) adminWarning.style.display = "block";
    return;
  }
  cvInput.click();
});

cvInput?.addEventListener("change", async () => {
  if (!isAdminConnected) {
    if (adminWarning) adminWarning.style.display = "block";
    return;
  }
  const file = cvInput.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("cv", file);

  try {
    const response = await fetch("/api/cv", {
      method: "PUT",
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
      body: formData,
    });
    if (response.ok) {
      alert("✅ CV mis à jour avec succès !");
    } else {
      const err = await response.json();
      alert("❌ Erreur mise à jour CV : " + (err.message || ""));
    }
  } catch (err) {
    console.error("Erreur réseau CV:", err);
    alert("❌ Erreur réseau lors de la mise à jour du CV.");
  } finally {
    cvInput.value = "";
  }
});
