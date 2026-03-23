/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function ItemsList() {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchData();
    }, []);

    return (
        <ul>
            {items.map(item => <li key={item.id}>{item.nombre}</li>)}
        </ul>
    );
}