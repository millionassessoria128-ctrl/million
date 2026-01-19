import { X, Check, TrendingDown, TrendingUp, Eye, BarChart3, Users, Target, Zap, Shield } from 'lucide-react';

const ComparisonSection = () => {
  const withoutItems = [
    { icon: Eye, text: 'Decisões no escuro' },
    { icon: TrendingDown, text: 'Baixa previsibilidade de faturamento' },
    { icon: Zap, text: 'Estratégias desconectadas' },
    { icon: Users, text: 'Falta de acompanhamento' },
    { icon: Target, text: 'Crescimento lento ou instável' },
  ];

  const withItems = [
    { icon: Target, text: 'Estratégia clara e validada' },
    { icon: TrendingUp, text: 'Crescimento previsível e escalável' },
    { icon: BarChart3, text: 'Métricas e dados orientando decisões' },
    { icon: Shield, text: 'Acompanhamento constante' },
    { icon: Zap, text: 'Resultados consistentes' },
  ];

  return (
    <section id="comparativo" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Veja a diferença que uma <span className="text-gradient">assessoria estratégica</span> faz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare os resultados de empresas que operam sem direcionamento versus aquelas que contam com a Million Assessoria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without Card */}
          <div className="card-glass bg-card/50 border-destructive/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="text-destructive" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Sem Assessoria</h3>
            </div>
            <div className="space-y-5">
              {withoutItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-muted-foreground" size={20} />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With Card */}
          <div className="card-glass border-primary/30 glow-effect">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Com a Million Assessoria</h3>
            </div>
            <div className="space-y-5">
              {withItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
