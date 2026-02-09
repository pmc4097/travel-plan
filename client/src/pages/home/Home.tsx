import Loading from "@/components/common/Loading";
import NarowLayout from "@/components/common/NarowLayout";
import CityList from "@/components/home/CityList";
import FilterList from "@/components/home/FilterList";
import SearchInput from "@/components/home/SearchInput";
import { getCities, getSearchCities } from "@/services/home";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
    //const { data } = useQuery()  //국가필터, 검색 필터
    const [q, setQ] = useState('');
    const { isLoading, data } = useQuery({
        queryKey: ['cities', q],
        queryFn: q ? () => getSearchCities(q) : getCities,
    });



    return isLoading || !data ? (< Loading />) :
        (
            <NarowLayout className="flex flex-col items-center my-30">
                <div className="w-[339px] mb-24">
                    <SearchInput
                        onCompositionEnd={(value) => { setQ(value) }}
                    />
                </div>
                <div className="mb-21">
                    <FilterList
                        active="all"
                        onChange={() => { }} />
                </div>
                <CityList cities={data} />
            </NarowLayout>
        );
}
