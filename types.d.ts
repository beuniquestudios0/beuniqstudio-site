import PageWithLayoutType from "./pageWithLayout";


type AppLayoutProps = {
    Component: PageWithLayoutType
    pageProps: any
}

type POST = {
    _id?:string,
    title: string,
    content: string,
    coverPicture: string,
    author: string,
    published: boolean,
    integrations: string[],
    scheduledAt: string,
    updatedAt: string,
}


interface USER {
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
}


export {AppLayoutProps, POST, USER}
