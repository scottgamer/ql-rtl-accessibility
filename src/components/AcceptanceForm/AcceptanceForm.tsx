import React, { useState } from "react";

const AcceptanceForm = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [continues, setContinues] = useState<boolean>(false);

  return (
    <div className="App">
      <h1>Acceptance form</h1>

      {!continues && (
        <label>
          <input
            type="checkbox"
            name="terms-and-conditions"
            onClick={() => setDisabled(!disabled)}
          />
          I accept the Terms and Conditions
        </label>
      )}

      {continues && <p>Thanks for accepting the Terms and Conditions</p>}

      <br />
      {!continues && (
        <button disabled={disabled} onClick={() => setContinues(true)}>
          Continue
        </button>
      )}
    </div>
  );
};

export default AcceptanceForm;
