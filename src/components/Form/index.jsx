import Alert from '../Alert';
import './index.scss';
import useAlert from '../../hooks/useAlert';

const Form = ({ setCity, setCountry, city, country, callingTheApi }) => {
  const COUNTRIES = [
    { cod: 'US', name: 'United States' },
    { cod: 'ES', name: 'Spain' },
    { cod: 'MX', name: 'Mexico' },
    { cod: 'AR', name: 'Argentina' },
    { cod: 'PE', name: 'Peru' },
    { cod: 'CR', name: 'Costa Rica' },
    { cod: 'CO', name: 'Colombia' },
  ];

  const { showAlert, messages } = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([city, country].includes('')) {
      showAlert({
        formError: 'All fields required',
      });
      return;
    }

    callingTheApi();

    setCity('');
    setCountry('');
  };

  const { formError } = messages;

  return (
    <form onSubmit={handleSubmit}>
      {formError && <Alert message={formError} />}
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="" hidden>
            -- Select An Option --
          </option>
          {COUNTRIES.map((country) => (
            <option value={country.cod} key={country.cod}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="search-button">
        search
      </button>
    </form>
  );
};

export default Form;
