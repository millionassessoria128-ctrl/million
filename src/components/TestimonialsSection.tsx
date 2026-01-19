import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      company: 'Tech Solutions LTDA',
      text: 'A Million Assessoria transformou nossa visão de negócio. Em 6 meses, triplicamos nosso faturamento com estratégias claras e acompanhamento constante.',
      rating: 5,
    },
    {
      name: 'Ana Paula Ribeiro',
      company: 'Grupo Ribeiro',
      text: 'Finalmente encontramos parceiros que entendem de crescimento escalável. Os resultados falam por si: crescimento de 280% no primeiro ano.',
      rating: 5,
    },
    {
      name: 'Roberto Silva',
      company: 'RS Comércio',
      text: 'O diferencial da Million é o acompanhamento próximo. Não é só consultoria, é uma parceria real focada em resultados mensuráveis.',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas que confiaram na Million Assessoria e alcançaram resultados extraordinários.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-glass relative">
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={18} />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
