import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { StyledSettingPage } from './StyledSettingPage';
import Section from '../../components/Section';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { fetchStorage, insertStorage } from '../../api/config';

const SettingPage = ({}) => {
  const [storagePath, setStoragePath] = useState<string>('');

  const { data, isLoading, isError } = useQuery(['storagePath'], () => fetchStorage());
  const { mutate } = useMutation(['insertStoragePath'], () => insertStorage({ storagePath }));

  useEffect(() => setStoragePath(data?.storagePath || ''), []);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error</p>;

  const onChangeStoragePathInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setStoragePath(event.target.value?.trim());

  const onClickSaveStoragePath = () => {
    mutate();
  };

  return (
    <StyledSettingPage>
      <Section
        title="저장소 경로 설정"
        body={
          <Input
            defaultValue={data?.storagePath || ''}
            label="전체 경로"
            placeholder="전체 경로를 입력해주세요."
            onChange={onChangeStoragePathInput}
          />
        }
        footer={<Button onClick={onClickSaveStoragePath}>저장</Button>}
      />
    </StyledSettingPage>
  );
};

export default SettingPage;
