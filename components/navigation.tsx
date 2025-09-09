export default function Navigation() {
    return (
        <header className="content-grid">
            <nav>
                <ul className="flex justify-between items-center p-4">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Collections</Link></li>
                    <li><Link href="#">SALE</Link></li>
                </ul>
                <picture className="flex items-center">
                    <Image></Image>
                </picture>
                <div class="search">
                </div>
                <div className="flex gap-5">
                    <Link href="#"><img src="" alt="Profile" /></Link>
                    <Link href="#"><img src="" alt="Cart" /></Link>
                </div>
            </nav>
        </header>
    )
}