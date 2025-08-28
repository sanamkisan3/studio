export function Footer() {
    return (
        <footer className="border-t border-border/40 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Sanam Kisan. All Rights Reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                        Designed & Built with ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
}
