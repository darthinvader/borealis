import AbilityCheck from "./abilityCheck";
import AreaStyle from "./areaStyle";
import AttackType from "./attackType";
import CastTime from "./castTime";
import Condition from "./condition";
import damageType from "./damageType";
import DurationInterval from "./durationInterval";
import SavingThrow from "./savingThrow";
import School from "./spellSchool";

export default interface Spell {
  text: string;
  name: string;
  level: number;
  levelString: string;
  classes: string[];
  optionalClasses: string[];
  subclasses: string[];
  school: School;
  subSchool: string;
  castTime: string;
  castingTimeInSeconds: number;
  castTimeGeneral: CastTime;
  range: string;
  rangeInFeet: number;
  rangeInMeters: number;
  spellAttack?: AttackType;
  atHigherLevels?: string;
  components: {
    verbal: boolean;
    somatic: boolean;
    material: string[];
    materialWithCost: boolean;
    materialCostInCopper?: number;
    materialCostInSilver?: number;
    materialCostInGold?: number;
    materialCostInElectrum?: number;
    materialCostInPlatinum?: number;
    materialIsConsumed?: boolean;
    materialIsOptionallyConsumed?: boolean;
  };
  duration?: DurationInterval;
  durationInSeconds: number;
  concentation: boolean;
  ritual: boolean;
  sourceBooks: string[];
  races?: string[];
  backgrounds?: string[];
  eldritchInvocations?: string[];
  damageTypes?: damageType;
  conditionInflicted?: Condition;
  areaStyle?: AreaStyle;
  savingThrow?: SavingThrow;
  abilityCheck?: AbilityCheck;
  royalty: boolean;
  healing: boolean;
  grantsTemporaryHP: boolean;
  requiresSight: boolean;
  permanentEffects: boolean;
  scalingEffects: boolean;
  summonsCreature: boolean;
  modifiesAc: boolean;
  teleportation: boolean;
  forcedMovement: boolean;
  hasImages: boolean;
  hasInfo: boolean;
  hasToken: boolean;
  SRD: boolean;
}
