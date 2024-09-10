import cities from '../data/city.list.json';

interface City {
    id: number;
    name: string;
    country:string
}

const normalizeString = (str: string): string =>{
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export const searchCities = (term: string): City[] => {
    const normalizedTerm = normalizeString(term);
    return (cities as City[]).filter((city: City) =>
        normalizeString(city.name).includes(normalizedTerm) ||
        normalizeString(city.country).includes(normalizedTerm)
    );
};
