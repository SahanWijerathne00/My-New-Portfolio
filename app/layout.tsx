import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "John Doe | Portfolio",
  description:
    "Personal portfolio website of John Doe, Software Engineer and ML Enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
