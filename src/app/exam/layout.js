import {ApplicationLayout} from "@/app/home/application-layout";
import Providers from "@/app/redux/provider";
import '@/styles/tailwind.css'

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
            <link rel="icon" id="favicon"
                  href="https://ik.imagekit.io/kittydev/KittXDev/KittXdev_x_white_icon_uOCkfhTIz.svg"/>
        </head>
        <body>
        <Providers>
            <ApplicationLayout>
                {children}
            </ApplicationLayout>
        </Providers>
        </body>
        </html>
    )
}
