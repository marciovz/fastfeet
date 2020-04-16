import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import InitialLetters from './InitialLetters';
 
import {Container, Image} from './styles';

export default function Avatar({size, dataImageUrl, dataNameProfile, children, ...rest}) {
  const [imageUrl, setImageUrl] = useState(null);
  const [nameProfile, setNameProfile] = useState(null);

  useEffect(() => {
    if (dataImageUrl) {
      setImageUrl(dataImageUrl);
      return;
    } 
    setImageUrl(null);
  }, [dataImageUrl]);

  useEffect(() => {
    if (dataNameProfile) {
      setNameProfile(dataNameProfile);
      return;
    } 
    setNameProfile(null);
  }, [dataNameProfile]);

  return (
    <Container>
      {imageUrl ? (
          <Image size={size} {...rest} src={imageUrl} />
        ) : (
          nameProfile ? (
            <InitialLetters size={size} name={nameProfile} />
          ) : (
            <>{ children }</>
          )
      )}
    </Container>
  );
}

Avatar.defaultProps = {
  dataImgUrl: null,
  dataNameProfile: null,
  size: 100,
  children: null,
};

Avatar.propTypes = {
  dataImgUrl: PropTypes.string,
  dataNameProfile: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.node,
};
