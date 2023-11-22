'use client'
import React, { useState } from 'react'
import useSWR from 'swr';
import FetchSuggestionsChatgpt from '../../../lib/FetchSugestionsChatgpt';

function PromptImput() {
    const [input, setInput] = useState('');
    const {data, error, isLoading, mutate, isValidating} = useSWR('/api/Sugestion', FetchSuggestionsChatgpt, {
        revalidateOnFocus: false,
    });

  return (
    <div className='m-10'>
        <form className='flex flex-col lg:flex-row shadow-slate-400/10 border rounded-md lg-divide-x'>
            <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter your Prompt...' className='flex-1 p-4 outline-none rounded-md' />
            <button type='submit' 
            disabled = {!input}
            className={`p-4 font-bold ${input? 'bg-orange-500 text-white transition-colors duration-200' : 'text-gray-400 cursor-not-allowed'}`}>Generate</button>
            <button  type='button' className='p-4 bg-green-500 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400'>Use Suggestion</button>
            <button type='button' className='bg-white text-green-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold'>New Suggestion</button>
        </form>
    </div>
  )
}

export default PromptImput