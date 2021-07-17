import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { NovelCard } from '../../components/novel/NovelCard';

interface NovelProps {
  id: string;
  title: string;
}

type Action = { type: 'START' } | { type: 'SUCCESS'; payload: any } | { type: 'FAIL', payload: string };

interface State {
  isLoading: boolean;
  isError: Error | null;
  novels: NovelProps[];
}

const dataFetchReducer = (dataState: State, action: Action): State => {
  switch (action.type) {
    case 'START':
      return {
        ...dataState,
        isLoading: true,
        novels: [],
        isError: null,
      };
    case 'SUCCESS':
      return {
        ...dataState,
        isLoading: false,
        isError: null,
        novels: action.payload,
      };
    case 'FAIL':
      return {
        ...dataState,
        isLoading: false,
        novels: [],
        isError: new Error(action.payload),
      };
    default:
      throw new Error('Action not supported');
  }
};

export const NovelIndexPage = () => {
  const initialState = {
    isLoading: true,
    novels: [] as NovelProps[],
    isError: null,
  };

  const [dataState, dispatch] = useReducer(dataFetchReducer, initialState);

  useEffect(() => {
    axios
      .get('/novels')
      .then((res) => {
        dispatch({ type: 'SUCCESS', payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: 'FAIL', payload: error });
      });
  }, []);

  return (
    <div className="App">
      <h3>{dataState.isLoading ? 'Loading...' : '一覧画面'}</h3>

      <p>{dataState.isError ? dataState.isError : null}</p>

      {dataState.novels.map((novel) => <NovelCard novelProps={novel} key={novel.id} />)}
    </div>
  );
};
