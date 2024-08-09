import { Box, Typography } from "@mui/material";
import { fetchSalesMap } from "features/api/thunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { AppDispatch, RootState } from "redux/store";

import geoJson from "../../constants/world-50m.v1.json";
import { CustomBox } from "styles/CustomBox.style";

const SalesMap = () => {
  const dispatch = useDispatch<AppDispatch>();
  const salesMap = useSelector((state: RootState) => state.salesMap.data);
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    dispatch(fetchSalesMap());
  }, []);

  console.log("salesMap:", salesMap);

  const findByCountryId = (countryId: string) => {
    const matchedCountry = salesMap?.find(
      (country) => country.country_id === countryId
    );
    return matchedCountry ? matchedCountry.fill_color : "#dbdbdb";
  };

  return (
    <CustomBox widthPercent={30} isDark={theme.darkTheme}>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        Sales Mapping by Contry
      </Typography>
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 220,
        }}
      >
        <Graticule stroke="#dbdbdb" strokeWidth={0} />
        {salesMap.length > 0 && (
          <Geographies geography={geoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                if (geo.code !== "010") {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={findByCountryId(geo.id)}
                    />
                  );
                } else {
                  return null;
                }
              })
            }
          </Geographies>
        )}
      </ComposableMap>
    </CustomBox>
  );
};

export default SalesMap;
