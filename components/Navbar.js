import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="w-full shadow flex text-center justify-between p-5">
            <div>
                <Link href="/"><a className="text-2xl" href="#">Home</a></Link>
            </div>
            <div className="mt-1">
                <Link href="/books"><a className="ml-5" href="#">Books</a></Link>
                <Link href="/contact"><a className="ml-5" href="#">Contact</a></Link>
                <Link href="/about"><a className="ml-5" href="#">About</a></Link>
            </div>
        </div>
    );
}

export default Navbar;