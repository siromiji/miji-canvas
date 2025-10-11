import type { PropsWithChildren } from 'react';
import { Provider } from '@/components/Provider';

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="ko">
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
