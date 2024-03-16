import Image from "next/image"
import Link from "next/link"

const Card = (props) => {
    return (
        <Link href={props.href} className="m-5 bg-white rounded-2xl bg-opacity-40 backdrop-blur-lg shadow-lg transition duration-200 hover:bg-opacity-70 hover:shadow-2xl">
            <h2 className="font-bold text-4xl p-3 text-blue-800">
                {props.name.length > 25 ? `${props.name.substring(0, 25)}...` : props.name}
            </h2>
            <div className="px-3 pb-3 relative">
                <Image src={props.image} alt={props.name} width={475} height={350} className="border rounded-lg h-80 object-cover"/>
            </div>
        </Link>
    )
}

export default Card