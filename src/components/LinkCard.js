import React from 'react'

export default function LinkCard({link, refreshLinks}) {

    const archiveLink = async () => {
        link.archived = true;
        try {
            await fetch('/.netlify/functions/updateLink', {
                method: 'PUT',
                body: JSON.stringify(link)
            });
            refreshLinks();
        } catch (err) {
            console.error(err);
        }
    }

    const deleteLink = async () => {
        try {
            const id = link._id
            await fetch('/.netlify/functions/deleteLink', {
                method: 'DELETE',
                body: JSON.stringify({id})
            });
            refreshLinks();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="card my-3">
            <div className="card-header">
                {link.name}
            </div>
            <div className="card-body">
                <a href={link.url}>{link.url}</a>
                <p>{link.description}</p>
                <p>Archived: {link.archived.toString()}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-warning mx-2" onClick={archiveLink}>Archive</button>
                <button className="btn btn-danger" onClick={deleteLink}>Delete</button>
            </div>
        </div>
    )
}