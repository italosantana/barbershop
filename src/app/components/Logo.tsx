import Link from "next/link"
import Image from "next/image"



export const Logo = () => {
    return (
        <Link href={'/'}>
            <Image src={'/logo.png'} alt="logo barbershop business" width={220} height={220} />
        </Link>
    )
}