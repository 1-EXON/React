import { useEffect } from 'react'

export function Result(props: { x2: string, x1: string, n: string, r1: string, r2: string }) {
    useEffect(() => {
        console.log('componet 등장')
        return () => {
            console.log('component 퇴장')
        }
    })

    return (
        <div>
            <h1>{props.x2}x<sup>2</sup> + {props.x1}x + {props.n} ={'>'} {props.r1}, {props.r2}</h1>
        </div>
    )
}