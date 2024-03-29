import { geoData } from "@/constants/geoData";
import { ResponsiveChoropleth } from "@nivo/geo";

const GeographyChart = ({ geography }: { geography: any }) => {
  if (geography?.length === 0) {
    return;
  }
  return (
    <ResponsiveChoropleth
      data={geography}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#ffedc2",
            },
          },
          legend: {
            text: {
              fill: "#ffedc2",
            },
          },
          ticks: {
            line: {
              stroke: "#ffda85",
              strokeWidth: 1,
            },
            text: {
              fill: "#ffda85",
            },
          },
        },
        legends: {
          text: {
            fill: "#ffda85",
          },
        },
        tooltip: {
          container: {
            color: "#d3d4de",
          },
        },
      }}
      features={geoData.features}
      margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
      domain={[0, 20]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={150}
      projectionTranslation={[0.45, 0.6]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      borderWidth={1.3}
      borderColor="#ffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: true,
          translateX: 0,
          translateY: -125,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: "#ffda85",
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default GeographyChart;
