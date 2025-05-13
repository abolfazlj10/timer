import "./styles/globals.css";

export const metadata = {
  title: "timeToDo",
  description: "a timer for manage works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}