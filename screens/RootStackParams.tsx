export type RootStackParamList = {
    Home: { dishes: Dish[] };
    AddDish: undefined;
};

export type Dish = {
    Title: string;
    Description: string;
    Course: string;
    Price: number;
};