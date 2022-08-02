import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.ul variants={variants}>
        {itemIds.map(i => (
            <MenuItem i={i} key={i.id} />
        ))}
    </motion.ul>
);

const itemIds = [
    {
        id: 0,
        name: 'Home',
        url: '/'
    },
    {
        id: 1,
        name: 'Committee',
        url: '/'
    },
    {
        id: 2,
        name: 'Call For Paper',
        url: '/'
    },
    {
        id: 3,
        name: 'Keynote',
        url: '/'
    },
    {
        id: 4,
        name: 'Submission',
        url: '/'
    },
    {
        id: 5,
        name: 'Publication',
        url: '/'
    },
    {
        id: 6,
        name: 'Registration',
        url: '/'
    },
    {
        id: 7,
        name: 'Venue',
        url: '/'
    },
    {
        id: 8,
        name: 'Contact',
        url: '/'
    },
    {
        id: 9,
        name: 'ICCES 2023',
        url: '/'
    }
];
