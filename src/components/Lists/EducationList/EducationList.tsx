import EducationCard, {EducationCardProps} from "@/components/Cards/EducationCard/EducationCard"

import styles from "./EducationList.module.sass"

const Educations: EducationCardProps[] = [
    {
        url: "https://school12.ck.ua/",
        time: {
            startYear: 2013,
            endYear: 2022
        },
        name: "Cherkasy School №12",
        speciality: "Junior Secondary Education"
    },
    {
        url: "https://school12.ck.ua/",
        time: {
            startYear: 2022,
            endYear: 2024
        },
        name: "Cherkasy School №12",
        speciality: "Complete Secondary Education"
    },
    {
        url: "https://ampli.com.ua/",
        time: {
            startYear: 2023
        },
        name: "Ampli",
        speciality: "React Front-end Developer"
    }
]

export default function EducationList() {
    return (
        <ul className={styles.list}>
            {Educations.map((education, index) => (
                <li key={index}>
                    <EducationCard url={education.url} time={education.time} name={education.name}
                        speciality={education.speciality}/>
                </li>
            ))}
        </ul>
    )
}