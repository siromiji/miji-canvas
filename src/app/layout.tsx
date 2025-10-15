import type { PropsWithChildren } from 'react';
import { Provider } from '@/components/Provider';
import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="ko">
            <body style={{ backgroundColor: '#efefef' }}>
                <AppRouterCacheProvider>
                    <CssBaseline />
                    <Provider>{children}</Provider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
