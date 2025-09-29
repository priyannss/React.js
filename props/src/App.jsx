import { useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1);
  }

  return (
    <>
      <Card name = "Priyanshu">
        <h2>Title</h2>
        <p>This is a beautiful card with custom content!</p>
      </Card>

      <Button handleClick = {handleClick}>
        <div>Count: {count}</div>
      </Button>
    </>
  )
}

export default App
