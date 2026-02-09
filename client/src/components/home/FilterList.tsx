import Filter from "@/components/home/Filter";

const filters = [
    { key: 'all', text: "전체" },
    { key: 'adomesitc', text: "국내" },
    { key: 'internatinal', text: "해외" }
] as const;
type Filter = typeof filters[number]["key"];

interface Props {
    active: Filter;
    onChange: (value: Filter) => void;
}
export default function FilterList({ active, onChange }: Props) {
    return (
        <div className="flex justify-center gap-x-25">
            {filters.map(filter => (
                <Filter key={filter.key} active={filter.key === active} onClick={() => onChange(filter.key)}>{filter.text}</Filter>
            ))}
        </div>
    )
}