import { Providers } from "./providers";
import "@fontsource/roboto/300.css";

export const metadata = {
    title: "Stellarchy",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
