import Accordion from "@/components/ui/Accordion";

const faqs = [
  {
    id: 1,
    question: "Apa saja layanan yang Anda tawarkan?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est architecto beatae unde? Totam officia deleniti ipsa fugiat? Voluptas dolore mollitia dolorum autem minima harum unde quibusdam iusto laboriosam labore nisi qui necessitatibus saepe, aperiam molestiae.",
  },
  {
    id: 2,
    question: "Teknologi apa saja yang Anda kuasai?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci quae numquam excepturi delectus distinctio natus sapiente mollitia exercitationem a.",
  },
  {
    id: 3,
    question: "Bagaimana proses kerja Anda?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat odio, ad, ipsam ratione eius iure atque aliquam totam corrupti sunt laborum natus maiores! Atque iure qui veniam molestias vel.",
  },
  {
    id: 4,
    question: "Berapa biaya untuk layanan Anda?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsa. ",
  },
  {
    id: 5,
    question: "Bagaimana cara menghubungi Anda?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sint maiores exercitationem, dolorem velit, veniam sunt saepe voluptatibus numquam sequi est voluptate omnis repellat voluptas!",
  },
];

const Faq = () => {
  return (
    <div className="max-w-lg mx-auto ">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-4xl font-bold">Frequently Asked Questions</div>
        <div className="my-4">
          {faqs.map((faq) => (
            <Accordion key={faq.id} title={faq.question} content={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
