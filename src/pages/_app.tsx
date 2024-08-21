
import MainLayout from "@/components/Layout/MainLayout";
import { AuthProvider } from "@/context/AuthContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </AuthProvider>
  )
}
