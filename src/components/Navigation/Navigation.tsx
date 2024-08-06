"use client"

import styles from "./Navigation.module.sass"
import React, {useEffect} from "react"

interface linkData {
    id: string
    name: string
}

interface NavigationProps {
    links: linkData[]
}

export default function Navigation({links}: NavigationProps) {
    useEffect(() => {
        const elements = document.querySelectorAll(`.${styles.nav} a`)


        const handleScroll = () => {

            const scrolledSections: HTMLElement[] = []

            links.forEach(link => {
                const section = document.getElementById(link.id)
                if (!(section instanceof HTMLElement)) return

                if (section.getBoundingClientRect().top < 200) scrolledSections.push(section)
            })

            elements.forEach(link => {
                if (!(link instanceof HTMLElement)) return

                if (link.dataset.id === scrolledSections[scrolledSections.length - 1].id) {
                    link.classList.add(styles.active)
                } else {
                    link.classList.remove(styles.active)
                }
            })
        }


        handleScroll()

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })


    return (
        <nav className={styles.nav}>
            <ul>
                {links.map(({id, name}) => (
                    <li key={id}>
                        <a href={`#${id}`} data-id={id}>{name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}