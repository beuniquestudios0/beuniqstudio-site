import * as React from "react"

function SvgComponent(props: any) {
    return (
        <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <defs>
                <clipPath id="prefix__a">
                    <path
                        d="M480.5 294q-18.5 44-58 66.5t-77 26.5q-37.5 4-66.5 27t-69.5 27.5q-40.5 4.5-55.5-38T89 349q-50-12-67.5-55.5t27.5-76Q94 185 102.5 148t35-70.5Q164 44 207 57.5t77 21q34 7.5 84 5.5t54.5 45.5q4.5 47.5 40.5 84t17.5 80.5z"
                        fill="#d1d8e0"
                    />
                </clipPath>
            </defs>
            <image
                width="100%"
                height="100%"
                clipPath="url(#prefix__a)"
                xlinkHref="https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                preserveAspectRatio="none"
            />
        </svg>
    )
}

export default SvgComponent
