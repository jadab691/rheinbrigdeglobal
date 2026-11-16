import { Container } from "@/components/layout/Container";

export function UniversityNotice() {
  return (
    <section
      aria-labelledby="university-notice-title"
      className="university-notice"
    >
      <Container className="university-notice__inner">
        <span aria-hidden="true">i</span>
        <div>
          <h2 id="university-notice-title">Important information</h2>
          <p>
            University information is provided for initial exploration. Program
            availability, admission requirements, language requirements, and
            application deadlines vary by institution and must be verified
            through official university sources.
          </p>
        </div>
      </Container>
    </section>
  );
}
