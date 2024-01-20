import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Navbar from './components/Navbar';
import { fetchData, saveViewState, loadViewState } from './utils/api';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    fetchData()
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const savedViewState = loadViewState();
    if (savedViewState) {
      setGroupingOption(savedViewState.groupingOption);
      setSortOption(savedViewState.sortOption);
    }
  }, []);

  useEffect(() => {
    saveViewState({
      groupingOption,
      sortOption,
    });
  }, [groupingOption, sortOption]);

  const handleGroupingOptionChange = (option) => {
    setGroupingOption(option);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="app">
      <Navbar
        onGroupingOptionChange={handleGroupingOptionChange}
        onSortOptionChange={handleSortOptionChange}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        groupingOption={groupingOption}
        sortOption={sortOption}
      />
    </div>
  );
}

export default App;
