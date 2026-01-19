const ClientsSection = () => {
  const clients = [
    'Tech Solutions',
    'Grupo Ribeiro',
    'RS Comércio',
    'Nova Indústria',
    'Saúde Premium',
    'Educação Plus',
  ];

  return (
    <section id="clientes" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Empresas que <span className="text-gradient">confiam</span> na Million
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Parceiros que alcançaram resultados extraordinários com nossa assessoria estratégica.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="card-glass flex items-center justify-center py-8 px-4 hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-muted-foreground font-semibold text-center">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
