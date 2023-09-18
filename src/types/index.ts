// checkbox types
export type State = {
    category1: boolean;
    category2: boolean;
    category3: boolean;
};

export type Action = { type: 'TOGGLE_CATEGORY'; category: keyof State };

// data type
export type DataProps = {
    id: number,
    category: string,
    artist: string,
    price: string,
    image: string,
    info: {
        [key: string]: string
    }
}

