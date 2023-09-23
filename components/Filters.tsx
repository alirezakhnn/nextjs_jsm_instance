"use client";

import {useState, MouseEventHandler} from 'react';
import {formUrlQuery} from '@/sanity/utils';
import {useSearchParams, useRouter} from "next/navigation";

const links: string[] = ['all', 'Next 13', 'frontend', 'backend', 'fullstack'];

const Filters = () => {
    const [active, setActive] = useState<string>('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilter: MouseEventHandler<HTMLButtonElement> = (event) => {
        const link = event.currentTarget.textContent;
        let newUrl = '';

        if (active === link) {
            setActive('');

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['category'],
            });
        } else {
            setActive(link);

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: link.toLowerCase()
            })
        }
        router.push(newUrl, {scroll: false})
    };

    return (
        <ul className="text-white body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
            {links.map((link) => (
                <button
                    key={link}
                    onClick={handleFilter}
                    className={`${active === link ? 'gradient_blue-purple' : ''} 
                    whitespace-nowrap rounded-xl px-8 py-2.5 capitalize`}
                >
                    {link}
                </button>
            ))}
        </ul>
    );
};

export default Filters;