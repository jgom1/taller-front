import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

const Paragraph = () => {
    return (
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero iure repudiandae consequatur assumenda,
            velit, error doloribus dolores hic unde qui est tempora nihil optio beatae laudantium molestias.
            Consequuntur, quibusdam inventore?
        </p>
    );
};

export const AnonymousPage = () => {
    let paragraphs = []
    for (let i = 0; i < 10; i++) {
        paragraphs.push(<Paragraph key={i} />)
    }
    return (
        <div className="row m-0">
            <div className="col-12 px-0 p-4 bg-light text-left">
                {paragraphs}
            </div>
        </div>
    );
}