type WeatherReportProps = {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
};

export default function WeatherReport({
  city,
  temperature,
  condition,
  humidity,
}: WeatherReportProps) {
  return (
    <section>
      <h1>{city}</h1>
      <p>{`Temperature: ${temperature}°C`}</p>
      <p>{`Condition: ${condition}`}</p>
      <p>{`Humidity: ${humidity}%`}</p>
    </section>
  );
}
