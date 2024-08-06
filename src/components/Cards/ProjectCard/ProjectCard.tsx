import styles from "./ProjectCard.module.sass"
import TagsList from "@/components/Lists/TagsList/TagsList"

import Image from "next/image"

export interface ProjectCardProps {
    url?: string
    title: string
    description: string
    imageUrl: string
    tags: string[]
}

export default function ProjectCard({url, title, description, imageUrl, tags}: ProjectCardProps) {
    return (
        <a className={styles.card} href={url} target={"_blank"}>
            <div className={styles.left}>
                <Image src={imageUrl} width={160} height={90} alt={title}></Image>
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <TagsList tags={tags}/>
            </div>
        </a>
    )
}