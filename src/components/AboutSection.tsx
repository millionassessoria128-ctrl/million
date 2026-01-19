import { Target, BarChart3, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada estratégia é orientada para gerar impacto real e mensurável no seu negócio.',
    },
    {
      icon: BarChart3,
      title: 'Decisões Baseadas em Dados',
      description: 'Utilizamos análises precisas para fundamentar cada passo do crescimento.',
    },
    {
      icon: Users,
      title: 'Parceria Próxima',
      description: 'Acompanhamento constante e personalizado em cada etapa da jornada.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação Estratégica',
      description: 'Metodologias atualizadas e soluções criativas para desafios únicos.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Sobre a <span className="text-gradient">Million Assessoria</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Million Assessoria nasceu com o propósito de transformar a forma como empresas crescem. 
                Acreditamos que crescimento sustentável vem de estratégias claras, decisões baseadas em dados 
                e acompanhamento próximo.
              </p>
              <p>
                Nossa equipe é formada por especialistas em gestão, marketing estratégico e operações, 
                unidos pelo objetivo de levar empresas ao próximo nível. Não oferecemos apenas consultoria — 
                construímos parcerias duradouras focadas em resultados reais.
              </p>
              <p>
                Com uma metodologia validada e cases de sucesso em diversos segmentos, ajudamos empresários 
                a saírem do operacional e focarem no que realmente importa: escalar seus negócios com previsibilidade.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-glass">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
