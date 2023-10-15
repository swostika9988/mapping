import './App.css';
import Card from './components/Card';
import emojipedia from './data/emojiBank';

function myEmoji(contact){
  return(
    <Card 
    id={contact.id}
    name={contact.name}
    emoji={contact.emoji}
    meaning={contact.meaning}
    />
  )
}
function App() {
  return (
    <div>
      
    <h1>
      <span>emojipedia</span>
    </h1>

    <dl className="dictionary">
      
      {
      emojipedia.map(myEmoji)
      }
      
      
    </dl> 
  </div> 
  );
    }

export default App;
