import {useTranslations} from "next-intl"
import Contacts from "@/components/Contacts/Contacts"

import styles from "./Home.module.sass"

import InitFlashLight from "@/components/other/FlashLight/FlashLight"
import Navigation from "@/components/Navigation/Navigation"
import EducationList from "@/components/Lists/EducationList/EducationList"
import ProjectsList from "@/components/Lists/ProjectsList/ProjectsList"
import TagsList from "@/components/Lists/TagsList/TagsList"

const navLinks = [
    {
        id: "desc",
        name: "Desc",
    },
    {
        id: "skills",
        name: "Skills",
    },
    {
        id: "education",
        name: "Education",
    },
    {
        id: "experience",
        name: "Experience",
    },
    {
        id: "projects",
        name: "Projects",
    },
]

export default function Home() {
    const t = useTranslations()

    return (
        <main
            className={styles.main}
            id={"desc"}
        >
            <div className={styles.left}>
                <section className={styles.author}>
                    <h1 className={styles.name}>{t("AboutMe.Name")}</h1>
                    <h2 className={styles.role}>Junior Fullstack Developer</h2>
                </section>
                <Navigation links={navLinks}/>
                <Contacts/>
            </div>
            <div className={styles.right}>
                <section
                    className={styles.desc}
                    dangerouslySetInnerHTML={{__html: t.raw("AboutMe.Description")}}
                ></section>
                <section id={"skills"} className={styles.skills}>
                    <h2>Skills:</h2>
                    <div className={styles.titledList}>
                        <h3>Langs:</h3>
                        <TagsList
                            tags={[
                                "PHP (Sufficient)",
                                "JavaScript (Excellent)",
                                "TypeScript (Excellent)",
                                "Node.js (Excellent)",
                                "Python (Good)",
                                "C++ (Beginner)",
                                "Rust (Beginner)"
                            ]}/>
                    </div>
                    <div className={styles.titledList}>
                        <h3>Frameworks:</h3>
                        <TagsList
                            tags={[
                                "Express",
                                "Next.js",
                                "NestJS",
                                "PySide6",
                                "PyQt",
                                "React",
                                "Tauri"
                            ]}/>
                    </div>
                    <div className={styles.titledList}>
                        <h3>Other:</h3>
                        <TagsList
                            tags={[
                                "Git",
                                "SSL",
                                "Linux",
                                "Docker",
                                "MySQL",
                                "MongoDB",
                                "Adobe Photoshop",
                                "Adobe PremierePro",
                                "Adobe Audition",
                                "Adobe After Effects",
                                "PHPStorm",
                                "PyCharm",
                                "WebStorm",
                                "Autodesk Fusion360",
                                "Autodesk Inventor"
                            ]}/>
                    </div>
                </section>
                <section id={"education"}>
                    <h2>Education:</h2>
                    <EducationList/>
                </section>
                <section id={"experience"}>
                    <h2>Experience:</h2>
                    <span className={styles.note}>I have no commercial experience</span>
                </section>
                <section id={"projects"}>
                    <h2>Projects:</h2>
                    <ProjectsList/>
                    <span>And other on <a href="https://github.com/furry-dev" target={"_blank"}>GitHub</a></span>
                </section>
            </div>
            <InitFlashLight selector={"body"} brightness={15}/>
        </main>
    )
}