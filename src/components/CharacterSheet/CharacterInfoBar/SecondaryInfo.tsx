import { Box } from "@mui/system";
import TooltipedTypography from "../../../utilComponents/TooltipedTypography";
import { useCharacter } from "../CharacterContext";

const SecondaryInfo = () => {
  const info = useCharacter().info;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <TooltipedTypography title="Eyes">Eyes: {info.eyes}</TooltipedTypography>
      <TooltipedTypography title="Hair">Hair: {info.hair}</TooltipedTypography>
      <TooltipedTypography title="Skin">Skin: {info.skin}</TooltipedTypography>
      <TooltipedTypography title="Age">Age: {info.age}</TooltipedTypography>
      <TooltipedTypography title="Height">
        Height: {info.height}
      </TooltipedTypography>
      <TooltipedTypography title="Weight">
        Weight: {info.weight}
      </TooltipedTypography>
    </Box>
  );
};

export default SecondaryInfo;
