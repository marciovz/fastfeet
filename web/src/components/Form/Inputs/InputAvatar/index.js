import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { MdImage } from 'react-icons/md';

import Avatar from '~/components/Avatar';

import api from '~/services/api';

import { Container, Filtro } from './styles';

export default function InputAvatar() {
  const { defaultValue, registerField } = useField('avatar');

  const [avatarId, setAvatarId] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [nameProfile, setNameProfile] = useState(null);

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
      setNameProfile(defaultValue.name);
      setAvatarUrl((defaultValue.Avatar && defaultValue.Avatar.url) || null);
    }
  }, [defaultValue]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('avatars', data);
    const { id, url } = response.data;
    setAvatarId(id);
    setAvatarUrl(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <Avatar size={150} dataImageUrl={avatarUrl} dataNameProfile={nameProfile}>
          <MdImage size={40} />
          <p>Adicionar Foto</p>
          <Filtro />
        </Avatar>

        <input
          id="avatar"
          type="file"
          accept="image/*"
          data-file={avatarId}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
