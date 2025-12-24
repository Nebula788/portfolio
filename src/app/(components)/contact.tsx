const contacts = [
  {
    label: "Instagram",
    value: "gantulga777__",
    icon: "/ig-logo.png",
  },
  {
    label: "Facebook",
    value: "Gantulga",
    icon: "/fb-logo.png",
  },
  {
    label: "Discord",
    value: "nebula09389",
    icon: "/dc-logo.png",
  },
  {
    label: "Email",
    value: "odonbyambagantulga@gmail.com",
    icon: "/gm-logo.png",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen snap-center flex items-center justify-center px-4"
    >
      <div className="border-4 border-primary rounded-xl p-8 md:p-12  backdrop-blur-sm shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">
          Contact Me
        </h2>

        <ul className="space-y-5">
          {contacts.map((contact) => (
            <li
              key={contact.label}
              className="flex items-center gap-4 text-xl md:text-2xl text-primary
                         transition-transform duration-200 hover:translate-x-2"
            >
              <img
                src={contact.icon}
                alt={contact.label}
                width={32}
                height={32}
                className="pixelated"
              />
              <span className="font-semibold">{contact.label}:</span>
              <span className="opacity-90">{contact.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
