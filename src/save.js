import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
  return (
    <div { ...useBlockProps.save( {className: "formo-slider-slide-recipe formo-slider-slide"} )} >
        <figure className="formo-slider-slide-recipe--image">
          { attributes.imageID && <img src={ attributes.imageUrl } data-id={ attributes.imageID } /> }
        </figure> 
        <RichText.Content
          tagName='p'
          value={attributes.cheesename}
          className='formo-slider-slide-recipe--cheesename'
        />
        <RichText.Content
          tagName='h2'
          value={attributes.title}
          className='formo-slider-slide-recipe--title'
        />
    </div>
);
}