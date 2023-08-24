import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>
    </div>
  );
}
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
]; 

function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}


function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <>
     <img
      className="avatar"
      src={avatar}
      alt= {description}
    />
    <h1>{description} hellow world</h1>
    </>
   
  );
}
function TodoList() {
   let back={backgroundColor:"black",color:"pink"}

  return (
    <ul style={back}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

function MyFun({person,size}){
  return (
    <img
      className="avatar"
      //src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default MyFun;
