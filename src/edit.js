import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss';

export default function Edit( {attributes, setAttributes} ) {
    const getImageButton = (openEvent) => {
      return (
        <div className="button-container">
          <Button 
            onClick={ openEvent }
            className="button button-large"
          >
            Pick an image
          </Button>
        </div>
      );
    };

    return (
        <div { ...useBlockProps(
            {className: 'formo-slider-slide-recipe formo-slider-slide'}
        ) }>
            <MediaUpload
                onSelect={ media => { setAttributes({ imageID: media.id, imageUrl: media.url }); } }
                type="image"
                value={ attributes.imageID } // make sure to set this from props
                render={ ({ open }) => getImageButton(open) }
            />
            <figure className='formo-slider-slide-recipe--image'>
              { attributes.imageID && <img src={ attributes.imageUrl } className="image" data-id={ attributes.imageID } />}
            </figure>
            <RichText
              tagName='p'
              value={ attributes.cheesename }
              onChange={ (cheesename) => setAttributes({ cheesename }) }
              placeholder="Your title"
              className='formo-slider-slide-recipe--cheesename'
            />
            <RichText
              tagName='h2'
              value={ attributes.title }
              onChange={ (title) => setAttributes({ title }) }
              placeholder="Your title"
              className='formo-slider-slide-recipe--title'
            />
        </div>
    );
}