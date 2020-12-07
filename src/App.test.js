
import { render, screen , fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import WatchListMovies from './components/watchlist';
import Movies from './components/movies';


describe('App', () => {
  test('renders message', () => {
    render(<App />);
    
    const linkElement = screen.getByText(/There are no movies in the database./i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders message movies', () => {
    render(<App />);
    
    const linkElement = screen.getAllByText(/Movies/i);
   
   expect(linkElement).toBeTruthy();
  });

  test('renders message watch list', () => {
    render(<App />);
   
    const linkElement = screen.getByText(/Watch List/i);
    expect(linkElement).toBeInTheDocument();
  });

  
  test('renders WatchListMovies', () => {
    render(<WatchListMovies />);
    const linkElement = screen.getByText(/There are no movies in the list/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders Movies', () => {
    render(<Movies />);
    const linkElement = screen.getByText(/There are no movies in the database/i);
    expect(linkElement).toBeInTheDocument();
  });
});