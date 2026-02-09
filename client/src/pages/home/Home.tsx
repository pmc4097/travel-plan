import NarowLayout from "@/components/common/NarowLayout";
import CityList from "@/components/home/CityList";
import FilterList from "@/components/home/FilterList";
import SearchInput from "@/components/home/SearchInput";
import { City } from "@/types";

export default function Home() {


    // const { data } = useQuery()  //국가필터, 검색 필터
    return (
        <NarowLayout className="flex flex-col items-center my-30">
            <div className="w-[339px] mb-24">
                <SearchInput
                    onCompositionEnd={(value) => { console.log(value) }}
                />
            </div>
            <div className="mb-21">
                <FilterList
                    active="all"
                    onChange={() => { }} />
            </div>
            <CityList cities={DUMMY_DATA} />
        </NarowLayout>
    )
}

const DUMMY_DATA: City[] = [
    {
        city: 'Seoul',
        name: '서울',
        description: '서울',
        thumbnail: 'https://picsum.photos/300/200?random=1'
    },
    {
        city: 'Busan',
        name: '부산',
        description: '부산',
        thumbnail: 'https://picsum.photos/300/200?random=2'
    },
    {
        city: 'Incheon',
        name: '인천',
        description: '인천',
        thumbnail: 'https://picsum.photos/300/200?random=3'
    },
    {
        city: 'Daegu',
        name: '대구',
        description: '대구',
        thumbnail: 'https://picsum.photos/300/200?random=4'
    },
    {
        city: 'Gwangju',
        name: '광주',
        description: '광주',
        thumbnail: 'https://picsum.photos/300/200?random=5'
    },
]