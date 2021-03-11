import './assets/css/main.min.css';
import Button from './components/Button';
import Column from './components/Column';
import Container from './components/Container';
import Input from './components/Input';
import Row from './components/Row';

function App() {

  function formSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="wrapper">
      <Container className="width-100 background-white shadow">
        <form id="form" onSubmit={formSubmit}>
          <Row>
            <Column width="12">
              <Input id="name" placeholder="Enter full name" label="Name" errorMessage="Invalid name" type="name" />
            </Column>
            <Column width="12">
              <Input id="dob" placeholder="Enter date of birth" label="Date of Birth" errorMessage="Invalid date" type="date" />
            </Column>
            <Column width="12">
              <Input id="phone" placeholder="Enter phone" label="Phone Number" errorMessage="Invalid phone number" type="phone" />
            </Column>
            <Column width="12">
              <Input id="address" placeholder="Enter address" label="Address" errorMessage="Invalid address" type="address" />
            </Column>
            <Column width="12">
              <Input id="zip" placeholder="Enter ZIP" label="Zip" errorMessage="Invalid zip" type="zip" />
            </Column>
            <Column width="12">
              <Button label="Submit" className="btn-block" type="submit" />
            </Column>

          </Row>
        </form>
      </Container>
    </main>
  );
}

export default App;
