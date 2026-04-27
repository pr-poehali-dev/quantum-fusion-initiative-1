import { useReveal } from "@/hooks/use-reveal"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  const results = [
    {
      number: "01",
      title: "Прядь #1 — дистиллированная вода",
      result: "Гладкая, блестящая, мягкая",
      color: "text-foreground",
    },
    {
      number: "02",
      title: "Прядь #2 — жёсткая вода",
      result: "Тусклая, жёсткая, ощущается налёт",
      color: "text-foreground/60",
    },
    {
      number: "03",
      title: "Прядь #3 — жёсткая вода + хелатор",
      result: "Заметно лучше: мягче и светлее",
      color: "text-foreground",
    },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-6xl lg:text-7xl">
                Эксперимент
                <br />
                <span className="text-foreground/40">и выводы</span>
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Результаты исследования</p>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                Были использованы 3 пряди волос в одинаковых условиях — отличалась только вода.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                Жёсткая вода действительно ухудшает состояние волос. Но проблема решается — достаточно использовать средства с хелаторами. Правильный уход помогает сохранить волосы здоровыми даже при плохой воде.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6">
              {results.map((item, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  <div className="group border-b border-foreground/10 py-4 hover:border-foreground/20 md:py-5">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs text-foreground/30 mt-1">{item.number}</span>
                      <div>
                        <p className={`font-sans text-sm font-light md:text-base ${item.color}`}>{item.title}</p>
                        <p className="font-mono text-xs text-foreground/50 mt-1">{item.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className={`pt-4 transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <div className="rounded-lg border border-foreground/20 bg-foreground/10 px-6 py-4 backdrop-blur-sm">
                  <p className="font-mono text-xs text-foreground/60 mb-1">Вывод</p>
                  <p className="font-sans text-sm text-foreground md:text-base">
                    Хелаторы реально работают — они защищают волосы от жёсткой воды.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
