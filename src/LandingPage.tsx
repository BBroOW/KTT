import { useNavigate } from "react-router-dom";
import Button from "./components/Button";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleUtleieClick = () => {
    navigate("/utleie");
  };
  const handleInnleveringClick = () => {
    navigate("/innlevering");
  };

  return (
    <>
      <div className="flex flex-row justify-center">
        <Button
          contents="Utleie"
          buttonType="primary"
          type="submit"
          onClick={handleUtleieClick}
        />
        <Button
          contents="Innlevering"
          buttonType="primary"
          type="button"
          onClick={handleInnleveringClick}
        />
      </div>
    </>
  );
};

export default LandingPage;
