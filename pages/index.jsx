import dynamic from 'next/dynamic';

const App = dynamic(() => import("../src/cube"), { ssr: false });


export default function Home() {
    return (<div><App /></div>)
}