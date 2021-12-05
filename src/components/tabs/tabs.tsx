import React, {useEffect, useState} from 'react';

interface TabsProps {
    tabs: Array<{
        code: string,
        content: React.ReactNode,
        title?: string,
    }>
}

export const Tabs = ({tabs}: TabsProps) => {
    const [activeTab, setActiveTab] = useState(tabs?.[0]?.code);

    // По принципу componentDidMount и componentDidUpdate:
    useEffect(() => {
        document.title = `Opened tab "${activeTab}"`;
    });
    useEffect(() => {
        fetch('/api/products').then(async (body) => {
            console.log('res:body:', body);
            // const json = await body.text();
            // console.log('res:json', json);
        });

    });

    return (
        <div>
            {tabs && <>
                <ul>
                    {tabs.map(({code, title}) => (
                        <li key={code}>
                            <button onClick={() => setActiveTab(code)}>
                                {title || code}
                            </button>
                        </li>
                    ))}
                </ul>

                <div>
                    {tabs.map(({content, code}) => (
                        activeTab === code && <div key={code}>{content}</div>
                    ))}
                </div>
            </>}
        </div>
    );
}
