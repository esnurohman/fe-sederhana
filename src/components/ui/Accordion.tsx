interface PropTypes {
  content: string;
  title: string;
}

const Accordion = (props: PropTypes) => {
  const { content, title } = props;
  return (
    <div className="collapse collapse-arrow">
      <input type="radio" name="my-accordion-2" />
      <div className="text-xl font-medium collapse-title">{title}</div>
      <div className="collapse-content">
        <p>{content}</p>
      </div>
    </div>
  );
};
export default Accordion;
