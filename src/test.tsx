import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import {COOKIE_NAME} from "./constants.ts";

const COOKIE_LIFETIME_SECONDS = 15;

export const Test = () => {
    const [cookies, setCookie, removeCookie] = useCookies([COOKIE_NAME]);

    const [cookieInfo, setCookieInfo] = useState('NO');

    useEffect(() => {
        console.log('cookies', cookies);

        setCookieInfo(cookies[COOKIE_NAME] || 'NO');
    }, [JSON.stringify(cookies)]);

    // console.log(cookies);

    return (
        <>
            <hr />
            {COOKIE_NAME}: {cookieInfo}
            <div>
                <button
                    onClick={() => {
                        const date = new Date(Date.now() + 1000 * COOKIE_LIFETIME_SECONDS);

                        console.log('click till', date.toUTCString());

                        setCookie(COOKIE_NAME, `TILL ${date.toUTCString()}`, {
                            expires: date,
                            // maxAge: COOKIE_LIFETIME_SECONDS,
                            path: '/',
                        });
                    }}
                >
                    set cookie for {COOKIE_LIFETIME_SECONDS} sec
                </button>
            </div>
        </>
    );
};
// 2024-09-03T06:51:51.000Z
