import { NextPage } from 'next'
import DefaultLayout from "layout/default";
type PageWithDefaultLayoutType = NextPage & { layout: typeof DefaultLayout }

type PageWithLayoutType = PageWithDefaultLayoutType

export default PageWithLayoutType
