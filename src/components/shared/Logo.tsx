import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/" className="text-2xl font-bold tracking-tighter transition-all">
            <p className="hidden lg:block">
                Zapatico
                <span className="text-red-700">
                    Roto
                    </span>
                    Shop
            </p>

            <p className="flex text-4xl lg:hidden">
                <span className="-skew-x-6">Z</span>
                <span className="text-red-700 skew-x-6">R</span>
            </p>
        </Link>
    )
}