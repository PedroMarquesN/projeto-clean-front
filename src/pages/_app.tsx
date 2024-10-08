import MainLayout from "@/components/Layout/MainLayout";
import { AuthProvider } from "@/context/AuthContext";
import GlobalStyle from "@/styles/globalStyles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
    </AuthProvider>
  );
}
