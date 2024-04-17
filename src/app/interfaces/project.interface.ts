

export interface Project {
    id: number;
    title: string;
    description: string;
    main_technologies: string[];
    tags: string[];
    img_dest: string;
    banner: string;
    imgs: string[];
    year: string;
    course: string;
    categories: string[];
    links: Links;
}
export interface Links {
    web_link?: string;
    github?: string;
    backend_link?: string;
    github_backend?: string;
    documentation_api?: string;
}
