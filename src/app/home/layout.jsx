import '@/styles/tailwind.css'

import {ApplicationLayout} from './application-layout'
import Providers from "@/app/redux/provider";

export const metadata = {
    title: {
        template: '%s - Online Exam',
        default: 'Online Exam',
    },
    description: '',
}

export default async function RootLayout({children}) {

    return (
        <html lang="en"
              className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
        >
        <head>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
            <link rel="icon" id="favicon"
                  href="https://ik.imagekit.io/kittydev/KittXDev/KittXdev_x_white_icon_uOCkfhTIz.svg"/>
        </head>
        <body>
        <Providers>
            <ApplicationLayout isAdmin={true}>
                {children}
            </ApplicationLayout>
        </Providers>
        </body>
        </html>
    )
}
