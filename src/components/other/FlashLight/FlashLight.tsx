"use client"

import {useEffect} from "react"

interface InitFlashLightProps {
    selector: string,
    brightness: number
}

export default function InitFlashLight({selector, brightness}: InitFlashLightProps) {
    useEffect(() => {
        const box = document.querySelector(selector)
        if (!(box instanceof HTMLElement)) return

        const rect = box.getBoundingClientRect()

        box.style.backgroundImage = `radial-gradient(600px at var(--flashlight-x-pos) var(--flashlight-y-pos), rgba(29, 78, 216, 0.${brightness}), transparent 80%)`

        box.addEventListener("mousemove", (e) => {
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            box.style.setProperty("--flashlight-x-pos", `${x}px`)
            box.style.setProperty("--flashlight-y-pos", `${y}px`)
        })

        box.addEventListener("mouseleave", () => {
            const inset = box.style.getPropertyValue("--flashlight-inset")

            box.style.setProperty("--flashlight-x-pos", inset)
            box.style.setProperty("--flashlight-y-pos", inset)
        })
    })

    return <></>
}

