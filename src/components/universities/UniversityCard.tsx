import type { University } from "@/data/universities";

interface UniversityCardProps {
  university: University;
  number: string;
}

export function UniversityCard({ university, number }: UniversityCardProps) {
  return (
    <article
      aria-labelledby={`university-${university.id}`}
      className="university-card"
    >
      <div className="university-card__topline">
        <span className="university-card__number">{number}</span>
        <span className="university-card__city">{university.city}</span>
      </div>
      <div aria-hidden="true" className="university-card__monogram">
        {university.initials}
      </div>
      <p className="university-card__type">{university.type}</p>
      <h3 id={`university-${university.id}`}>{university.name}</h3>
      <p className="university-card__description">{university.description}</p>
      {(university.ownership || university.studyLevels?.length) && (
        <ul className="university-card__tags" aria-label="Verified information">
          {university.ownership && (
            <li className="university-card__tag">{university.ownership}</li>
          )}
          {university.studyLevels?.map((level) => (
            <li className="university-card__tag" key={level}>
              {level}
            </li>
          ))}
        </ul>
      )}
      <div className="university-card__links">
        <a
          href={university.websiteUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Official website <span aria-hidden="true">↗</span>
        </a>
        {university.studyProgramsUrl && (
          <a
            href={university.studyProgramsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Study information <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
