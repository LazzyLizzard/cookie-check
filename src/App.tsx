import {useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {Test} from "./test.tsx";
import {COOKIE_NAME} from "./constants.ts";

export const App = () => {
    const [cookies, setCookie, removeCookie, updateCookies] = useCookies([
        COOKIE_NAME,
    ]);

    useEffect(() => {
        const interval = window.setInterval(() => {
            const date = new Date();
            updateCookies();
            console.log('tick', date.toUTCString());
        }, 1000);

        return () => {
            console.log('CDU');
            window.clearInterval(interval);
        };
    }, [updateCookies]);

    return (
        <div>
            cookie tester
            <Test />
        </div>
    );
};
