import styles from "./EducationCard.module.sass"

export interface EducationCardProps {
    url?: string
    time: {
        startYear: number
        endYear?: number
    }
    name: string
    speciality: string
}

export default function EducationCard({url, time, name, speciality}: EducationCardProps) {
    return (
        <a className={styles.card} href={url} target={"_blank"}>
            <div>
                <span className={styles.period}><time dateTime={`${time.startYear}`}>{time.startYear}</time> - <time
                    dateTime={`${time.endYear}`}>{time.endYear || "Now"}</time></span>
            </div>
            <div className={styles.content}>
                <h3>
                    {name}
                    <span className={styles.speciality}>{speciality}</span>
                </h3>
            </div>
        </a>
    )
}