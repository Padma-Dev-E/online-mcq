import '@/styles/tailwind.css'
import Providers from "@/app/redux/provider";


export const metadata = {
    title: {
        template: '%s - Online Mcq',
        default: 'Online Mcq',
    },
    description: '',
}

export default async function RootLayout({children}) {

    return (
        <html
            lang="en"
            className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
        >
        <head>
            <link rel="icon" id="favicon"
                  href="https://ik.imagekit.io/kittydev/KittXDev/KittXdev_x_white_icon_uOCkfhTIz.svg"/>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
                <link rel="preconnect" href="https://rsms.me/"/>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
        </head>
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
