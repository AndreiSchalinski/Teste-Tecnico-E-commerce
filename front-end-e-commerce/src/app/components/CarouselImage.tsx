
"use client"

import { useState } from 'react';
import { Galleria } from 'primereact/galleria';

export default function CarouselImage({imagens}:any) {
    
    const [images, setImages] = useState(imagens);
    const [inside, setInside] = useState<boolean>(false);
    
    const itemTemplate = (item:any) => {
        return <img src={item} style={{ width: '100%', display: 'block' }} />;
    };
    
    return (
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators 
                    showIndicatorsOnItem={inside} indicatorsPosition={'bottom'} item={itemTemplate} />
        </div>
    )
}
        