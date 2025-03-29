import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";

export default function LandingLayout(properties: React.PropsWithChildren) {
    return (
        <>
            <Header />

            <main className="z-10 w-full grow flex flex-col bg-gray-200">
                {properties.children}
            </main>

            <Footer />
        </>
    );
}