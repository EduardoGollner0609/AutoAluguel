import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}