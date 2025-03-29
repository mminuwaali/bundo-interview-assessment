import "./global.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
    icons: "/favicon.svg",
    title: "Bundo Interview App",
};

export default function RootLayout(properties: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                <div id="portal" />
                <ToastContainer autoClose={3000} />
                <div id="root">{properties.children}</div>
            </body>
        </html>
    );
}
