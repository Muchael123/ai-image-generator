import Image from 'next/image'
import Header from './components/Header'
import PromptInput from './components/PromptImput'

export default function Home() {
  return (
    <main className="">
     <Header />
     <PromptInput />
    </main>
  )
}
