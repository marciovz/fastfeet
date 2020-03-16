import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useField } from '@unform/core';
import { MdImage } from 'react-icons/md';

import InitialLetters from '~/components/Tags/InitialLetters';

import api from '~/services/api';

import { Container, Filtro } from './styles';

export default function InputAvatar() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  useEffect(() => {
    if (defaultValue) {
      setFile(defaultValue.id);
      setAvatar(defaultValue);
    }
  }, [defaultValue]); // eslint-disable-line

  const avatarView = useCallback(() => {
    if (avatar && avatar.url) {
      return <img src={avatar.url} alt="imagem do avatar" />;
    }
    return <InitialLetters name={avatar.name} />;
  }, [avatar]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('avatars', data);
    const { id, url } = response.data;
    setFile(id);
    setAvatar({ id, url });
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {avatar ? (
          avatarView()
        ) : (
          <>
            <MdImage />
            <p>Adicionar Foto</p>
            <Filtro />
          </>
        )}

        <input
          id="avatar"
          type="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
