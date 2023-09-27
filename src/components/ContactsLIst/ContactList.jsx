import { Contact } from 'components/Contact/Contact';
import { ContactListStyle } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = ({ deleteContact }) => {
  const filter = useSelector(store => store.filter);
  const contacts = useSelector(store => store.contacts);

  const filterByName = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <ContactListStyle>
        {filterByName().map(element => {
          return <Contact key={element.id} contact={element} />;
        })}
      </ContactListStyle>
    </div>
  );
};
