import React from 'react';

const countries = [
  { value: 'deutschland', label: 'Deutschland' },
  { value: 'österreich', label: 'Österreich' },
  { value: 'schweiz', label: 'Schweiz' },
  { value: 'frankreich', label: 'Frankreich' },
  { value: 'italien', label: 'Italien' },
  { value: 'spanien', label: 'Spanien' },
  { value: 'vereinigtes-königreich', label: 'Vereinigtes Königreich' },
  { value: 'niederlande', label: 'Niederlande' },
  { value: 'belgien', label: 'Belgien' },
  { value: 'schweden', label: 'Schweden' },
  { value: 'norwegen', label: 'Norwegen' },
  { value: 'dänemark', label: 'Dänemark' },
  { value: 'finnland', label: 'Finnland' },
];

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = React.useState('');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <label htmlFor="country-select">Wählen Sie ein Land:</label>
      <select id="country-select" value={selectedCountry} onChange={handleChange}>
        <option value="">--Bitte wählen Sie eine Option--</option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>
      {selectedCountry && <p>Sie haben ausgewählt: {selectedCountry}</p>}
    </div>
  );
};

export default CountrySelect;
