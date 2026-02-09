import { City } from "@/types"

interface Prop {
    city: City;
}
export default function CityDetail({ city }: Prop) {
    return (
        <div>{JSON.stringify(city)}</div>
    )
}