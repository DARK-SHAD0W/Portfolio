// frontend/src/api/projectService.ts

export type StackItem = {
    _id: string;
    name: string;
    icon: string;         // si vous souhaitez l’utiliser plus tard
    description: string;  // on l’affichera au verso de la flip-card
  };
  
  export type ProjectAPI = {
    _id: string;
    title: string;
    description: string;
    technologies: string[];    // pour vos badges, si besoin
    stack: StackItem[];        // ← le tableau de vos objets stack
    githubLink: string;
    imageUrl: string;
    galleryImages: string[];
  };
  
  const API_BASE = "http://localhost:5000/api";
  
  export const fetchProjects = async (): Promise<ProjectAPI[]> => {
    const res = await fetch(`${API_BASE}/projects`);
    const list = await res.json();
  
    return Promise.all(
      list.map(async (proj: any) => {
        // galerie d’images
        let galleryImages: string[] = [];
        try {
          const g = await fetch(`${API_BASE}/projects/${proj._id}/gallery`);
          const gd = await g.json();
          galleryImages = gd.images || [];
        } catch {
          console.warn("Erreur chargement galerie");
        }
  
        return {
          _id: proj._id,
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies || [],
          stack: proj.stack || [],    // ← on récupère directement le champ stack
          githubLink: proj.githubLink,
          imageUrl: `${API_BASE}/projects/${proj._id}/image`,
          galleryImages,
        };
      })
    );
  };
  
  export const fetchProject = async (id: string): Promise<ProjectAPI | null> => {
    try {
      const res = await fetch(`${API_BASE}/projects/${id}`);
      if (!res.ok) throw new Error("Projet non trouvé");
      const proj = await res.json();
  
      // galerie d’images
      let galleryImages: string[] = [];
      try {
        const g = await fetch(`${API_BASE}/projects/${id}/gallery`);
        const gd = await g.json();
        galleryImages = gd.images || [];
      } catch {
        console.warn("Erreur chargement galerie");
      }
  
      return {
        _id: proj._id,
        title: proj.title,
        description: proj.description,
        technologies: proj.technologies || [],
        stack: proj.stack || [],    // ← idem
        githubLink: proj.githubLink,
        imageUrl: `${API_BASE}/projects/${proj._id}/image`,
        galleryImages,
      };
    } catch (err) {
      console.error("Erreur lors de la récupération du projet :", err);
      return null;
    }
  };
  