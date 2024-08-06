import {useTranslations} from "next-intl"
import Contacts from "@/components/Contacts/Contacts"

import styles from "./Home.module.sass"

import InitFlashLight from "@/components/other/FlashLight/FlashLight"
import Navigation from "@/components/Navigation/Navigation"
import EducationList from "@/components/Lists/EducationList/EducationList"
import ProjectsList from "@/components/Lists/ProjectsList/ProjectsList"

const navLinks = [
    {
        id: "desc",
        name: "Desc",
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