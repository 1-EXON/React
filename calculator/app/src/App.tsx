import React, { useState } from 'react'
import './App.css'

export default function App() {
    const [numbers, setNumbers] = useState<{x2: string, x1: string, n: string}>({
        x2: '',
        x1: '',
        n: ''
    })

    const { x2, x1, n } = numbers

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setNumbers({
            ...numbers,
            [name]: value
        })
        console.log(numbers)
    }

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        let arr: number[] = [x2, x1, n].map(number => parseInt(number))
        const result1: number = (-1*arr[1] + Math.sqrt(arr[1]*arr[1] - (4 * arr[0] * arr[2]))) / (2 * arr[0])
        const result2: number = (-1*arr[1] - Math.sqrt(arr[1]*arr[1] - (4 * arr[0] * arr[2]))) / (2 * arr[0])
        alert((Number.isNaN(result1) && Number.isNaN(result2)) ? '해가 없습니다.' : `${result1}, ${result2}`)
    }

    return (
        <div>
            <div className="p-6 mt-60 max-w-sm mx-auto bg-slate-200 rounded-xl shadow-lg items-center space-x-4">
                <h1 className="text-5xl mb-5 text-center font-bold text-slate-700">Calculator</h1>
                <span className="block text-sm font-medium text-slate-700">x^2 의 계수</span>
                <div className="inline-block text-center mb-3">
                    <form className="inline-block text-center">
                        <input name="x2" type="text" value={x2} onChange={onChange} className="mt-1 block w-50 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"></input>
                    </form>
                </div>
                <span className="block text-sm font-medium text-slate-700">x 의 계수</span>
                <div className="inline-block text-center mb-3">
                    <form className="inline-block text-center">
                        <input name="x1" type="text" value={x1} onChange={onChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"></input>
                    </form>
                </div>
                <span className="block text-sm font-medium text-slate-700">상수항</span>
                <div className="inline-block text-center mb-3">
                    <form className="inline-block text-center">
                        <input name="n" type="text" value={n} onChange={onChange} className="mt-1 block w-50 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"></input>
                    </form>
                </div>
                <button onClick={onClick} className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 border border-slate-700 rounded">
                    계산하기
                </button>
            </div>
        </div>
    )
}