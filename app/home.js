import Image from './image/2020-04-04.jpg'

export default function Main() {
    return (

        <div>
            home 
            <img
                className="text-black"
                src={Image}
                alt="Next.js Logo"
                width={180}
                height={37}

            />
        </div>
    )
}
