import PageWithLayoutType from "./pageWithLayout";


type AppLayoutProps = {
    Component: PageWithLayoutType
    pageProps: any
}

type Message = {
    id: number;
    inserted_at: string;
    message: string;
    user_id: string;
    channel_id: number;
    author: { username: string };
}


export {AppLayoutProps,Message}
