export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="https://github.com/Georgesa98" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/george-salebe-04a020247/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 George Salebe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
