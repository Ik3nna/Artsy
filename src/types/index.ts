// checkbox type
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

// Button type
export type ButtonProps = {
    children: React.ReactNode;
    linkTo?: string,
    className?: any,
    onClick?: ()=> void
}

// Input type
export type InputProps = {
    label?: string,
    placeholder?: string,
    select?: boolean,
    icon?: string,
    selectOptions?: React.ReactNode,
    type?: string,
    style?: any,
    checkboxMessage?: string,
    className?: any
}

// carousel type
export type SwiperProps = {
    children: React.ReactNode,
    className?: any
}

// cart itemsList type
export type ItemsListProps = {
    id: number,
    category: string,
    artist: string,
    price: string,
    image: string,
    quantity: number
}

// timestamp type
export type TimeStampProps = {
    time: string,
    bg: string
}

// Auction data type props
export type AuctionDataProps = {
    id: number,
    image: string,
    title: string,
    time: string,
    imageBg: string,
    imageTime: string,
    timeTitle: string,
    imageTimestamp: string,
    mainBg: string,
    mainTime: string
}
