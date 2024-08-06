import styles from "./TagsList.module.sass"

export default function TagsList({tags}: { tags: string[] }) {
    return (
        <ul className={styles.list}>
            {tags.map((tag, index) => <li key={index}>{tag}</li>)}
        </ul>
    )
}