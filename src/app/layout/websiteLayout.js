
import NavigationBar from "../components/appbar";



export default function WebsiteLayout({ children }) {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    );
}