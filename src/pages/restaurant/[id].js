import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BiUpvote } from "react-icons/bi";

import coffeeStoresData from "../../../public/data/coffee-stores.json"
import Head from "next/head"
import { fetchRestaurants } from "@/lib/restaurants";

export async function getStaticProps(staticProps) {
    const params = staticProps.params

    const results = await fetchRestaurants()

    return {
        props: {
            coffeeStore: results.find(store => {
                return store.fsq_id === params.id
            })
        }
    }
}

export async function getStaticPaths() {

    const results = await fetchRestaurants()

    return {
        paths: results.map(store => {
            return {
                params: {
                    id: store.fsq_id
                }
            }
        }),
        fallback: true
    }
}

const CoffeeStore = (props) => {

    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const {location, name, imgUrl} = props.coffeeStore

    return (
        <div>
            <Head>
                <title>{name}</title>
            </Head>

            <main className="flex flex-wrap p-32 h-screen w-screen">
                <div className="w-1/2 ">
                    <Link href="/" className="font-semibold text-3xl text-blue-800 flex my-5"><IoMdArrowRoundBack className="mt-1" />Back to Home</Link>
                    <h1 className="text-5xl font-bold mb-6">{name}</h1>
                    <Image src={imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"} alt={name} width={450} height={600} className="h-96 w-3/4 rounded-3xl object-cover" />
                </div>
                <div className="w-1/2">
                    <div className="rounded-3xl bg-white bg-opacity-30 backdrop-blur-lg p-4 h-96 w-3/4 my-[9.25rem] ml-10 flex flex-col justify-center">
                        <p className="flex font-bold p-2 text-3xl"><CiLocationOn className="mt-1 mr-2 text-white" />{location.formatted_address}</p>
                        <p className="flex font-bold p-2 text-3xl"><BiUpvote className="mt-1 mr-2 text-white" />10</p>
                        <button
                            onClick={props.handleOnClick}
                            className="text-white text-2xl bg-blue-600 p-3 mx-3 my-2 w-1/4 rounded-lg font-bold"
                        >
                            Upvote!
                        </button>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}

export default CoffeeStore