import React, { useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import useChatSections from '../../hooks/useChatSections/useChatSections';
import useUsers from '../../hooks/useUsers/useUsers';
import { Container, Input } from './Dashboard.styles';

const Dashboard: React.FC<RouteComponentProps> = ({ history }) => {
  const { users, createUser, deleteUser } = useUsers();
  const { sections, deleteSection } = useChatSections();
  const ref = useRef<HTMLInputElement>(null);

  const handleCreateNewUser = (event: React.FormEvent) => {
    event.preventDefault();
    if (!ref.current) return;
    const newUser = ref.current.value;
    createUser(newUser);
  };

  const handleDeleteUser = (userID: string) => {
    deleteSection(userID);
    deleteUser(userID);
  };

  const handleStartChat = async (userID: string) => {
    history.push(`/chat/${userID}`);
  };

  React.useEffect(() => {
    if (ref.current) {
      ref.current.value = '';
    }
  }, [users]);

  return (
    <Container>
      <h1>Users</h1>

      <form onSubmit={handleCreateNewUser}>
        <Input className="ui input">
          <input ref={ref} placeholder="New user name" data-testid="new-user-input" />
        </Input>

        <button type="submit" className="ui icon button" data-testid="new-user-button">
          Create user
        </button>
      </form>

      <div className="ui middle aligned divided list">
        {users.map((user) => (
          <div className="item" key={user.id}>
            <div className="right floated content">
              <button onClick={() => handleStartChat(user.id)} className="ui button" data-testid={`start-chat-button-${user.name}`}>
                {sections[user.id] ? 'Open chat' : 'Start chat'}
              </button>

              <button className="ui negative button" onClick={() => handleDeleteUser(user.id)}>
                Delete user
              </button>
            </div>
            <img alt="avatar" className="ui avatar image" src={user.avatar} />
            <div className="content">{user.name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Dashboard;
