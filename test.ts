import { useEffect, useState } from 'react';

export function useTest1() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log('start delay', state);
    new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
      console.log('end delay', state);
      setState(state + 1);
    });
  }, [state]);
}

export function useTest2() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log('start delay', state);
    setTimeout(() => {
      console.log('end delay', state);
      setState(state + 1);
    }, 5000);
  }, [state]);
}
