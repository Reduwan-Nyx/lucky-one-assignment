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
            <p>React works in declarative code. react just maintains a tree for you.react contains a collection of reusable javscript code snippets for user interface.In simple cases..react works with virtal Dom .the html dom is pretty much an interface to modify the nodes in it.this means whenever we want to chanege content.we are modifying the dom and thats how react creats a single page website and mobile application </p>
        </div>
            
    </article>
            
 
            
    <article class="card">
        <header>
            <h2>Props vs state</h2>
        </header>

        <div class="content">
            <p>props short for properties is an object of arbitrary inputs a React function component accepts as the first argument.state is data that changes over the lifetime of a specific instance of a React component. porps are passed into component.similar to how argument is passed to a funtion. props are only read only component.it allows passing data from one component to another </p>
        </div>
     
    </article>
    <article class="card">
        <header>
            <h2>How use State Works</h2>
        </header>
        
        <div class="content">
            <p>use state is a hook that allows to have state vairables in a functional componenets.Hooks are fundamnetaly simpler stateful behaivior and side effect in user interfaces.this usestate hook is a special function that makes the initital state as an argument and returns and array of two entries  </p>
        </div>

    </article>
  
</div>
          
    </div>
    
  );
}

export default App;
