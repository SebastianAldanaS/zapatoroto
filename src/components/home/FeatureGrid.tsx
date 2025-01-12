import { MdLocalShipping, MdSupportAgent } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";

export const FeatureGrid = () => {
    return <div className="grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5">
        <div className="flex item-center gap-6">
            <MdLocalShipping size={40} className="text-slate-950" />

            <div className="space-y-1">
                <p className="font-semibold">Envio Gratis </p>
                <p className="text-sm">En todos nuestros productos</p>
            </div>
        </div>

        <div className="flex item-center gap-6">
            <MdSupportAgent size={40} className="text-slate-950" />

            <div className="space-y-1">
                <p className="font-semibold">Soporte 24/7</p>
                <p className="text-sm">Ayudamos con lo que necesites</p>
            </div>
        </div>

        <div className="flex item-center gap-6">
            <GiReturnArrow  size={40} className="text-slate-950" />

            <div className="space-y-1">
                <p className="font-semibold">Devouluciones</p>
                <p className="text-sm">Devolucion si no estas satisfecho</p>
            </div>
        </div>

        <div className="flex item-center gap-6">
            <IoDiamond size={40} className="text-slate-950" />

            <div className="space-y-1">
                <p className="font-semibold">Garantia</p>
                <p className="text-sm">Garantia en todos nuestros calzados</p>
            </div>
        </div>
    </div>
}

