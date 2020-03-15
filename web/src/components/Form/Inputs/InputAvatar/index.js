import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { MdImage } from 'react-icons/md';

import api from '~/services/api';

import { Container, Filtro } from './styles';

export default function InputAvatar() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

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

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('avatars', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img
            src={
              preview || 'https://api.adorable.io/avatars/50/aborr@adorable.png'
            }
            alt="imagem do avatar"
          />
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
