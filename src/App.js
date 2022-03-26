import logo from './logo.svg';
import './App.css';
import Card from './Componenet/Card/Card';

function App() {
  return (
    <div className="App">
      <h1 className='header'>MOBILE PHONE SHOP</h1>
     <Card></Card>
      {/* card */}
      <div class="cards">
    <article class="card">
        <header>
            <h2>How react works</h2>
        </header>    
      
        <div class="content">
            <p>React works in declarative code. react just maintains a tree for you.react contains a collection of reusable javscript code snippets for user interface.The syntax used by React components is called JSX (JavaScript XML). The idea is actually quite simple. A component renders content by returning some JSX. The JSX itself is usually HTML markup, mixed with custom tags for the React components. </p>
        </div>
            
    </article>
            
 
            
    <article class="card">
        <header>
            <h2>Props vs state</h2>
        </header>

        <div class="content">
            <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event.Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components.</p>
        </div>
     
    </article>
    <article class="card">
        <header>
            <h2>How use State Works</h2>
        </header>
        
        <div class="content">
            <p>The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  </p>
        </div>

    </article>
  
</div>
          
    </div>
    
  );
}

export default App;
