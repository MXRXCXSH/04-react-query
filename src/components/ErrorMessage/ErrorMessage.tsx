import css from './ErrorMessage.module.css';

function ErrorMessage() {
  return <p className={css.text}>There was an error, please try again...</p>;
}
export default ErrorMessage;

export function NoResults() {
  return <p className={css.text}>No movies found</p>;
}
