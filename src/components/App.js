import AddNewsForm from "./AddNewsForm";
import NavBar from "./NavBar";
import NewsFilter from "./NewsFilter";
import NewsList from "./NewsList/NewsList";

function App() {
    return (
        <div className="app">
            <NavBar />
            <div className="content">
                <NewsList />
                <div className="content__page">
                    <AddNewsForm />
                    <NewsFilter />
                </div>
            </div>
        </div>
    );
}

export default App;