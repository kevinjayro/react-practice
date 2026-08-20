type CompanyBadgeProps = {
  companyName: string;
  industry: string;
  employees: number;
};

export default function CompanyBadge({
  companyName,
  industry,
  employees,
}: CompanyBadgeProps) {
  return (
    <section>
      <h1>{companyName}</h1>
      <p>Industry: {industry}</p>
      <p>Employees: {employees}</p>
    </section>
  );
}
