import { ModalBackdrop, ModalPanel } from "@/components/common/Modal";
import Card from "@/components/home/Card"
import { useCustomModalStore } from "@/store"
import { City } from "@/types"
import CloseIcon from '@/assets/icons/close.svg?react';
import CityDetail from "@/components/home/CityDetail";

interface Props {
    cities: City[]
}

export default function CityList({ cities }: Props) {

    // const { openModal } = useModalStore();
    const { createModal, removeModal } = useCustomModalStore();
    // const openDetailModal = (city: City) => {
    //     openModal(({ onClose }) => (
    //         <Modal>
    //             <ModalBackdrop />
    //             <ModalPanel>
    //                 <div className="rounded-20 border border-gray100 bg-white px-28 pt-58 pb-37 relative w-[655px] min-h-[300px]">
    //                     <button onClick={onClose} className="absolute right-28 top-22"><CloseIcon /></button>
    //                     <CityDetail city={city} />
    //                 </div>
    //             </ModalPanel>
    //         </Modal>
    //     ));
    // }
    const openCustmModal = (city: City) => {
        createModal((id) => (
            <>
                <ModalBackdrop />
                <ModalPanel>
                    <div className="rounded-20 border border-gray100 bg-white px-28 pt-58 pb-37 relative w-[655px] min-h-[300px]">
                        <button onClick={() => removeModal(id)} className="absolute right-28 top-22"><CloseIcon /></button>
                        <CityDetail city={city} />
                    </div>
                </ModalPanel>
            </>
        ));
    }

    return (
        <div className="flex flex-wrap justify-between gap-y-28 items-start w-full">
            {cities.map(city => (
                <button onClick={() => openCustmModal(city)} key={city.code}>
                    <Card title={city.nameEn.toUpperCase()} description={`${city.country.name} ${city.name}`} image={city.thumbnail} />
                </button>
            ))}
        </div>
    )
}

