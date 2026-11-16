import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { languageOptions } from "@/data/study-in-germany";

export function LanguageRequirements() {
  return (
    <section
      aria-labelledby="study-language-title"
      className="study-language"
      id="language-requirements"
    >
      <Container className="study-language__grid">
        <SectionHeading
          description="The language of instruction shapes what evidence you may need to provide."
          eyebrow="Language requirements"
          id="study-language-title"
          title="Know the language of your program."
        />
        <div className="study-language__content">
          {languageOptions.map((option, index) => (
            <article className="study-language__option" key={option.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
            </article>
          ))}
          <p className="study-language__note">
            Certificates such as TestDaF or DSH for German, and IELTS or TOEFL
            for English, may be accepted by some programs. This is not a
            universal list: each institution decides which qualifications and
            scores it recognizes.
          </p>
        </div>
      </Container>
    </section>
  );
}
