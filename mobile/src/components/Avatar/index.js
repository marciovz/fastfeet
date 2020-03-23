import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import InitialLetters from './InitialLetters';

import {Container, Image, IconAvatar} from './styles';

export default function Avatar({size, dataProfile, ...rest}) {
  const [profile, setProfile] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (dataProfile) {
      setProfile({name: dataProfile.name});
      if (dataProfile.Avatar) {
        setAvatar(dataProfile.Avatar);
      }
    }
  }, [dataProfile]);

  return (
    <Container>
      {profile ? (
        avatar && avatar.url ? (
          <InitialLetters name={profile.name} size={size} />
        ) : (
          <Image size={size} {...rest} source={{uri: avatar.url}} />
        )
      ) : (
        <IconAvatar name="account-circle" size={size} color="#dddddd" />
      )}
    </Container>
  );
}

Avatar.defaultProps = {
  dataProfile: null,
  size: 100,
};

Avatar.propTypes = {
  dataProfile: PropTypes.shape({
    name: PropTypes.string,
    Avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  size: PropTypes.number,
};
