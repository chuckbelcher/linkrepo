import React from 'react'
import LinkCard from './LinkCard';

export default function LinkList({links, refreshLinks}) {
    return (
        <div>
            <h3>Links</h3>
                {links && links.filter(link => !link.archived).map(link => <LinkCard key={link._id} link={link} refreshLinks={refreshLinks}/>)}
                
                <h3 className="mt-5">Archived Links</h3>
                {links && links.filter(link => link.archived).map(link => <LinkCard key={link._id} link={link} refreshLinks={refreshLinks}/>)}
        </div>
    )
}