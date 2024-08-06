import styles from "@/components/Lists/EducationList/EducationList.module.sass"
import ProjectCard, {ProjectCardProps} from "@/components/Cards/ProjectCard/ProjectCard"

const projects: ProjectCardProps[] = [
    {
        url: "https://web.archive.org/web/20230625060952/https://ruden.fun/",
        title: "Ruden — Manga(old)",
        description: "The site with manga translations is written in pure PHP. This was my first experience in writing a website, which I maintained for a year until I decided to rewrite it with a completely new design and architecture.",
        imageUrl: "/projects/ruden.fun.png",
        tags: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "jQuery"]
    },
    {
        url: "https://school12.ck.ua",
        title: "School 12",
        description: "I was asked to write this project by the school where I was studying at that moment. Here, for the first time, I had to work under a tight deadline, since from the initial month for development, it was reduced to 2 weeks. I'm not very proud of this project, because due to the tight deadline, a lot of crutches were used in the code and the design is not very good.",
        imageUrl: "/projects/school12.ck.ua.png",
        tags: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "jQuery", "YouTube API"]
    },
    {
        url: "https://github.com/furry-dev/ruden.pro-UI",
        title: "Ruden — Manga(new)",
        description: "A new version of the site with an updated design, multilingual and using the GraphQL API. My first work with frameworks such as Next.js and NestJS. This is also my first time using the MongoDB database. This project already consists of different mini-projects, such as RudenFonts (font storage), RudenAccounts (OAuth2), RudenAPI (GraphQL) and many others in the future, which will unite into a larger ecosystem.",
        imageUrl: "/projects/ruden.pro.png",
        tags: ["Next.js", "TypeScript", "HTML", "CSS", "NestJS", "GraphQL", "MongoDB", "i18n"]
    },
    {
        url: "https://rudenfonts.onrender.com/",
        title: "Ruden — Fonts",
        description: "Graduation project in Ampli. More will be added in the future to create a convenient repository of fonts for translating manga",
        imageUrl: "/projects/fonts.ruden.pro.png",
        tags: ["Next.js", "TypeScript", "HTML", "CSS", "NestJS", "i18n"]
    }
]

export default function ProjectsList() {
    return (
        <ul className={styles.list}>
            {projects.map((project, index) => (
                <li key={index}>
                    <ProjectCard url={project.url} title={project.title} description={project.description}
                        imageUrl={project.imageUrl} tags={project.tags}/>
                </li>
            ))}
        </ul>
    )
}