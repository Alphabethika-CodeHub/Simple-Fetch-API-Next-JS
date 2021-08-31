import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 4000)
    }, [])

    return (
        <div>
            <p className="text-center text-3xl font-bold">Page Not Found</p>
        </div>
    );
}

export default NotFound;