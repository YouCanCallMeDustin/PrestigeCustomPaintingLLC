import data from './areaData.json';

export interface AreaData {
    city: string;
    slug: string;
    heroTagline: string;
    funFact: string;
    state?: string;
}

export const areaData: AreaData[] = data;
