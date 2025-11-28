import { FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
            <img className="w-[10vw]" src="./logoQCLand.png" alt="logo" />
        </aside>
        <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <FaFacebook className="size-6"/>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <FaYoutube className="size-7"/>
                </a>
            </div>
        </nav>
        </footer>
    )
}