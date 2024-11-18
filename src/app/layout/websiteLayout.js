
import NavigationBar from "../components/appbar";
export const metadata = {
    title: "Congo Details",
    description: "Explore detailed information about the provinces of Congo, including geographical data and local insights.",
};


export default function WebsiteLayout({ children }) {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    );
}