import React from 'react'
import './App.css'

function App() {
  return (
    <div>
        <div className="p-6 mt-60 max-w-sm mx-auto bg-slate-200 rounded-xl shadow-lg items-center space-x-4">
            <h1 className="text-5xl mb-5 text-center font-bold text-slate-700">Calculator</h1>
            <span className="block text-sm font-medium text-slate-700">x^2 의 계수</span>
            <div className="inline-block text-center mb-3">
                <form className="inline-block text-center">
                    <input type="text" className="mt-1 block w-50 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"></input>
                </form>
            </div>
            <span className="block text-sm font-medium text-slate-700">x 의 계수</span>
            <div className="inline-block text-center mb-3">
                <form className="inline-block text-center">
                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"></input>
                </form>
            </div>
            <span className="block text-sm font-medium text-slate-700">상수항</span>
            <div className="inline-block text-center mb-3">
                <form className="inline-block text-center">
                    <input type="text" className="mt-1 block w-50 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"></input>
                </form>
            </div>
            <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 border border-slate-700 rounded">
                계산하기
            </button>
        </div>
        
        
    </div>
  )
}

export default App
